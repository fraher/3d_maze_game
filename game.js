// game.js

// 1. Define the game map
const map = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1],
    [1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1],
    [1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1],
    [1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1],
    [1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
const mapWidth = map[0].length;
const mapHeight = map.length;

// 2. Initialize the canvas and context
const canvas = document.getElementById('gameCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

// Texture loading with mipmapping
const textures = {
    256: new Image(),
    128: new Image(),
    64: new Image(),
    32: new Image(),
    16: new Image()
};

textures[256].src = 'textures/wall.png';       // Highest resolution
textures[128].src = 'textures/wall_128.png';
textures[64].src = 'textures/wall_64.png';
textures[32].src = 'textures/wall_32.png';
textures[16].src = 'textures/wall_16.png';     // Lowest resolution

let texturesLoaded = false;
let texturesToLoad = 5;

for (let size in textures) {
    textures[size].onload = function() {
        texturesToLoad--;
        if (texturesToLoad === 0) {
            texturesLoaded = true;
        }
    };
}

// Load enemy sprite
const enemySprite = new Image();
enemySprite.src = 'textures/enemy.png';

// Load weapon sprite
const weaponSprite = new Image();
weaponSprite.src = 'textures/weapon.png';

// 3. Define the player object
const player = {
    x: 1.5, // starting x position
    y: 1.5, // starting y position
    dir: 0, // direction the player is facing (in radians)
    fov: Math.PI / 3, // field of view (60 degrees)
    speed: 0.05, // movement speed
    turnSpeed: 0.03, // turning speed
    radius: 0.2, // Player's collision radius
    health: 100 // Player's health
};

// Enemies array
const enemies = [];

// Enemy definition
class Enemy {
    constructor(x, y) {
        this.x = x; // Enemy's position on the map
        this.y = y;
        this.health = 100; // Enemy's health
        this.speed = 0.02; // Movement speed
        this.alive = true; // Is the enemy alive?
    }

    update() {
        if (!this.alive) return;

        // Simple AI to move towards the player
        const dx = player.x - this.x;
        const dy = player.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 0.5) {
            // Move towards the player
            const moveX = (dx / distance) * this.speed;
            const moveY = (dy / distance) * this.speed;

            const newX = this.x + moveX;
            const newY = this.y + moveY;

            // Check collision with walls for newX
            if (map[Math.floor(this.y)][Math.floor(newX)] === 0) {
                this.x = newX;
            }

            // Check collision with walls for newY
            if (map[Math.floor(newY)][Math.floor(this.x)] === 0) {
                this.y = newY;
            }
        } else {
            // Attack the player
            player.health -= 0.1; // Adjust damage as needed
            if (player.health <= 0) {
                player.health = 0;
                console.log('Player defeated!');
                // Stop the game loop
                cancelAnimationFrame(gameLoopId);
                // Display game over message
                ctx.fillStyle = 'red';
                ctx.font = '50px Arial';
                ctx.textAlign = 'center';
                ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2);
                return;
            }
        }
    }
}

// Function to place enemies randomly
function placeEnemies(numEnemies) {
    for (let i = 0; i < numEnemies; i++) {
        let placed = false;
        while (!placed) {
            const x = Math.floor(Math.random() * mapWidth);
            const y = Math.floor(Math.random() * mapHeight);
            if (map[y][x] === 0 && (Math.abs(x - player.x) > 2 || Math.abs(y - player.y) > 2)) {
                enemies.push(new Enemy(x + 0.5, y + 0.5));
                placed = true;
            }
        }
    }
}

// Place 5 enemies
placeEnemies(5);

// Weapons array
const weapons = [];

// Weapon definition
class Weapon {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.pickedUp = false;
    }
}

// Player's weapon
let playerWeapon = null;

// Function to place weapons randomly
function placeWeapons(numWeapons) {
    for (let i = 0; i < numWeapons; i++) {
        let placed = false;
        while (!placed) {
            const x = Math.floor(Math.random() * mapWidth);
            const y = Math.floor(Math.random() * mapHeight);
            if (map[y][x] === 0 && (Math.abs(x - player.x) > 2 || Math.abs(y - player.y) > 2)) {
                weapons.push(new Weapon(x + 0.5, y + 0.5));
                placed = true;
            }
        }
    }
}

// Place 3 weapons
placeWeapons(3);

// 4. Implement the raycasting function with fisheye correction
function castRays() {
    const numRays = canvas.width;
    const angleStep = player.fov / numRays;

    const zBuffer = []; // To keep track of wall distances for sprites

    for (let i = 0; i < numRays; i++) {
        const rayAngle = player.dir - (player.fov / 2) + (i * angleStep);
        let distanceToWall = 0;
        let hitWall = false;
        let textureX = 0;

        const eyeX = Math.cos(rayAngle);
        const eyeY = Math.sin(rayAngle);

        while (!hitWall && distanceToWall < 16) {
            distanceToWall += 0.05;

            const testX = player.x + eyeX * distanceToWall;
            const testY = player.y + eyeY * distanceToWall;

            const mapX = Math.floor(testX);
            const mapY = Math.floor(testY);

            if (mapX < 0 || mapX >= mapWidth || mapY < 0 || mapY >= mapHeight) {
                hitWall = true;
                distanceToWall = 16;
            } else {
                if (map[mapY][mapX] === 1) {
                    hitWall = true;

                    const blockX = testX % 1;
                    const blockY = testY % 1;

                    if (Math.abs(blockX - 1) < 0.0001 || blockX < 0.0001) {
                        textureX = blockY;
                    } else {
                        textureX = blockX;
                    }
                    textureX = textureX % 1;
                }
            }
        }

        // Correct fisheye distortion
        const angleDifference = rayAngle - player.dir;
        const correctedDistance = distanceToWall * Math.cos(angleDifference);

        // Calculate wall height based on corrected distance
        const lineHeight = (canvas.height / correctedDistance);

        const drawStart = Math.floor(-lineHeight / 2 + canvas.height / 2);
        const drawEnd = Math.floor(lineHeight / 2 + canvas.height / 2);

        // Choose texture level based on corrected distance (mipmapping)
        let textureSize;
        if (correctedDistance < 2) {
            textureSize = 256;
        } else if (correctedDistance < 4) {
            textureSize = 128;
        } else if (correctedDistance < 8) {
            textureSize = 64;
        } else if (correctedDistance < 12) {
            textureSize = 32;
        } else {
            textureSize = 16;
        }

        const texture = textures[textureSize];

        // Draw the textured wall slice
        if (texturesLoaded) {
            ctx.drawImage(
                texture,
                Math.floor(textureX * texture.width), 0, 1, texture.height,
                i, drawStart, 1, drawEnd - drawStart
            );
        } else {
            // Texture not loaded yet; draw a plain wall
            ctx.fillStyle = 'grey';
            ctx.fillRect(i, drawStart, 1, drawEnd - drawStart);
        }

        zBuffer[i] = correctedDistance; // Save distance for sprite rendering
    }

    // Render sprites (enemies and weapons)
    renderSprites(zBuffer);
}

// Render sprites (enemies and weapons)
function renderSprites(zBuffer) {
    const sprites = [];

    // Add enemies to sprites array
    enemies.forEach(enemy => {
        if (enemy.alive) {
            const dx = enemy.x - player.x;
            const dy = enemy.y - player.y;

            const distance = Math.sqrt(dx * dx + dy * dy);

            let angle = Math.atan2(dy, dx) - player.dir;

            // Normalize angle between -PI and PI
            while (angle < -Math.PI) angle += 2 * Math.PI;
            while (angle > Math.PI) angle -= 2 * Math.PI;

            // Sprite is within FOV
            if (angle > -player.fov / 2 && angle < player.fov / 2) {
                sprites.push({
                    type: 'enemy',
                    x: enemy.x,
                    y: enemy.y,
                    distance: distance,
                    angle: angle
                });
            }
        }
    });

    // Add weapons to sprites array
    weapons.forEach(weapon => {
        if (!weapon.pickedUp) {
            const dx = weapon.x - player.x;
            const dy = weapon.y - player.y;

            const distance = Math.sqrt(dx * dx + dy * dy);

            let angle = Math.atan2(dy, dx) - player.dir;

            // Normalize angle between -PI and PI
            while (angle < -Math.PI) angle += 2 * Math.PI;
            while (angle > Math.PI) angle -= 2 * Math.PI;

            // Sprite is within FOV
            if (angle > -player.fov / 2 && angle < player.fov / 2) {
                sprites.push({
                    type: 'weapon',
                    x: weapon.x,
                    y: weapon.y,
                    distance: distance,
                    angle: angle
                });
            }
        }
    });

    // Sort sprites by distance (furthest first)
    sprites.sort((a, b) => b.distance - a.distance);

    sprites.forEach(sprite => {
        // Projection calculations
        const spriteScreenX = (canvas.width / 2) * (1 + (Math.sin(sprite.angle) / Math.tan(player.fov / 2)));
        const spriteSize = (canvas.height / sprite.distance);

        const drawStartY = Math.floor((canvas.height / 2) - spriteSize / 2);
        const drawEndY = drawStartY + spriteSize;

        const drawStartX = Math.floor(spriteScreenX - spriteSize / 2);
        const drawEndX = Math.floor(spriteScreenX + spriteSize / 2);

        // Ensure sprite is within screen bounds
        if (drawEndX < 0 || drawStartX >= canvas.width || drawEndY < 0 || drawStartY >= canvas.height) {
            return; // Skip rendering this sprite
        }

        // Check z-buffer to see if sprite is behind a wall
        const spriteMiddleX = Math.floor(spriteScreenX);
        if (spriteMiddleX >= 0 && spriteMiddleX < canvas.width) {
            if (sprite.distance < zBuffer[spriteMiddleX]) {
                // Calculate sprite size and position
                const scaledWidth = spriteSize;
                const scaledHeight = spriteSize;

                // Draw the sprite image
                if (sprite.type === 'enemy' && enemySprite.complete) {
                    ctx.drawImage(
                        enemySprite,
                        0, 0, enemySprite.width, enemySprite.height,
                        drawStartX, drawStartY, scaledWidth, scaledHeight
                    );
                } else if (sprite.type === 'weapon' && weaponSprite.complete) {
                    ctx.drawImage(
                        weaponSprite,
                        0, 0, weaponSprite.width, weaponSprite.height,
                        drawStartX, drawStartY, scaledWidth, scaledHeight
                    );
                } else {
                    // Fallback to colored rectangle
                    ctx.fillStyle = sprite.type === 'enemy' ? 'red' : 'yellow';
                    ctx.fillRect(drawStartX, drawStartY, scaledWidth, scaledHeight);
                }
            }
        }
    });
}

// 5. Handle player movement and attack input
const keys = {};

window.addEventListener('keydown', function(e) {
    keys[e.code] = true;

    // Handle attack with spacebar
    if (e.code === 'Space') {
        e.preventDefault(); // Prevent page from scrolling
        attack();
    }
});

window.addEventListener('keyup', function(e) {
    keys[e.code] = false;
});

function movePlayer() {
    let moveStep = 0;
    if (keys['ArrowUp'] || keys['KeyW']) {
        moveStep = player.speed;
    }
    if (keys['ArrowDown'] || keys['KeyS']) {
        moveStep = -player.speed;
    }

    // Calculate new position
    const newX = player.x + Math.cos(player.dir) * moveStep;
    const newY = player.y + Math.sin(player.dir) * moveStep;

    // Collision detection with consideration of player's radius
    if (isWalkable(newX, player.y)) {
        player.x = newX;
    }
    if (isWalkable(player.x, newY)) {
        player.y = newY;
    }

    if (keys['ArrowLeft'] || keys['KeyA']) {
        player.dir -= player.turnSpeed;
    }
    if (keys['ArrowRight'] || keys['KeyD']) {
        player.dir += player.turnSpeed;
    }

    // Keep the angle between 0 and 2PI
    if (player.dir < 0) {
        player.dir += 2 * Math.PI;
    }
    if (player.dir > 2 * Math.PI) {
        player.dir -= 2 * Math.PI;
    }
}

function isWalkable(x, y) {
    const margin = player.radius;

    const minX = x - margin;
    const maxX = x + margin;
    const minY = y - margin;
    const maxY = y + margin;

    const mapMinX = Math.floor(minX);
    const mapMaxX = Math.floor(maxX);
    const mapMinY = Math.floor(minY);
    const mapMaxY = Math.floor(maxY);

    // Check all corners around the player for collisions
    return (
        map[mapMinY][mapMinX] === 0 &&
        map[mapMinY][mapMaxX] === 0 &&
        map[mapMaxY][mapMinX] === 0 &&
        map[mapMaxY][mapMaxX] === 0
    );
}

// Weapon pickup
function checkWeaponPickup() {
    weapons.forEach(weapon => {
        if (!weapon.pickedUp) {
            const dx = player.x - weapon.x;
            const dy = player.y - weapon.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 0.5) {
                weapon.pickedUp = true;
                playerWeapon = weapon;
                console.log('Weapon picked up!');
            }
        }
    });
}

// Attack function
function attack() {
    if (!playerWeapon) {
        console.log('No weapon to attack with!');
        return;
    }

    // Cast a ray straight ahead to see if an enemy is in front
    const rayAngle = player.dir;
    let distanceToEnemy = 0;
    let hitEnemy = null;

    const eyeX = Math.cos(rayAngle);
    const eyeY = Math.sin(rayAngle);

    while (!hitEnemy && distanceToEnemy < 2) {
        distanceToEnemy += 0.1;

        const testX = player.x + eyeX * distanceToEnemy;
        const testY = player.y + eyeY * distanceToEnemy;

        // Check for enemy collision
        enemies.forEach(enemy => {
            if (enemy.alive) {
                const dx = enemy.x - testX;
                const dy = enemy.y - testY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 0.5) {
                    hitEnemy = enemy;
                }
            }
        });

        // Check for wall collision to stop the attack ray
        if (map[Math.floor(testY)][Math.floor(testX)] === 1) {
            break;
        }
    }

    if (hitEnemy) {
        // Damage the enemy
        hitEnemy.health -= 50;
        console.log('Hit enemy! Health remaining:', hitEnemy.health);
        if (hitEnemy.health <= 0) {
            hitEnemy.alive = false;
            console.log('Enemy defeated!');
        }
    } else {
        console.log('Missed!');
    }
}

// 6. Create the game loop
let gameLoopId;

function gameLoop() {
    if (!texturesLoaded) {
        requestAnimationFrame(gameLoop);
        return;
    }

    console.log('Game Loop Iteration Started'); // Debugging

    movePlayer();

    // Update enemies
    enemies.forEach(enemy => enemy.update());

    // Check for weapon pickup
    checkWeaponPickup();

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw ceiling
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height / 2);

    // Draw floor
    ctx.fillStyle = 'grey';
    ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);

    // Render walls and sprites
    castRays();

    // Display player's health
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText('Health: ' + Math.floor(player.health), 20, 30);

    console.log('Game Loop Iteration Ended'); // Debugging

    gameLoopId = requestAnimationFrame(gameLoop);
}

gameLoop();
