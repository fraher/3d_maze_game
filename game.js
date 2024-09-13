// game.js

// Define the current map and its dimensions
let map = [];
let mapWidth = 0;
let mapHeight = 0;


// ====================
// 1. Define All Levels
// ====================

// Define 10 levels with unique or similar mazes
const levels = [
    // Level 1 - Easy
    [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1],
        [1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1],
        [1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1],
        [1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1],
        [1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1],
        [1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    // Level 2
    [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1],
        [1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1],
        [1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    // Level 3
    [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1],
        [1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1],
        [1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    // Levels 4 to 10 - Duplicate Level 3's maze
    [
        // Level 4
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1],
        [1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1],
        [1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [
        // Level 5
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1],
        [1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1],
        [1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [
        // Level 6
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1],
        [1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1],
        [1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [
        // Level 7
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1],
        [1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1],
        [1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [
        // Level 8
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1],
        [1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1],
        [1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [
        // Level 9
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1],
        [1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1],
        [1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [
        // Level 10
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1],
        [1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1],
        [1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ]
];


// ========================
// 2. Initialize the Canvas
// ========================

const canvas = document.getElementById('gameCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

// ========================
// 3. Texture Loading
// ========================

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

// ========================
// 4. Load Sprite Images
// ========================

const enemySprite = new Image();
enemySprite.src = 'textures/enemy.png';

const weaponSprite = new Image();
weaponSprite.src = 'textures/weapon.png';

const swordSprite = new Image();
swordSprite.src = 'textures/sword.png'; // Ensure this image exists

// ========================
// 5. Sound Manager
// ========================

// Sound Manager using Web Audio API
class SoundManager {
    constructor() {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    // Method to play a beep sound
    playBeep(frequency = 440, duration = 0.1, volume = 0.5) {
        const oscillator = this.audioCtx.createOscillator();
        const gainNode = this.audioCtx.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(frequency, this.audioCtx.currentTime); // Frequency in Hz

        gainNode.gain.setValueAtTime(volume, this.audioCtx.currentTime); // Volume (0 to 1)

        oscillator.connect(gainNode);
        gainNode.connect(this.audioCtx.destination);

        oscillator.start();

        oscillator.stop(this.audioCtx.currentTime + duration);
    }

    // Method to play a short square wave (useful for attack sounds)
    playAttackSound() {
        this.playBeep(600, 0.1, 0.7);
    }

    // Method to play a pickup sound
    playPickupSound() {
        this.playBeep(300, 0.2, 0.5);
    }

    // Method to play a damage sound
    playDamageSound() {
        this.playBeep(200, 0.1, 0.6);
    }

    // Method to play a defeat sound (lower frequency)
    playDefeatSound() {
        this.playBeep(100, 0.3, 0.8);
    }
}

// Instantiate the Sound Manager
const soundManager = new SoundManager();

// ========================
// 6. Define the Player Object
// ========================

const player = {
    x: 1.5, // starting x position
    y: 1.5, // starting y position
    dir: 0, // direction the player is facing (in radians)
    fov: Math.PI / 3, // field of view (60 degrees)
    speed: 0.01, // movement speed
    turnSpeed: 0.01, // turning speed
    radius: 0.2, // Player's collision radius
    health: 100 // Player's health
};

// ========================
// 7. Initialize Game Variables
// ========================

// Initialize score
let score = parseInt(localStorage.getItem('score')) || 0;

// Initialize level
let currentLevel = parseInt(localStorage.getItem('currentLevel')) || 1;
const maxLevel = 10;

// Enemies array
let enemies = [];

// Weapons array
let weapons = [];

// Player's weapon
let playerWeapon = null;

// Game State
let gameState = 'running'; // 'running', 'gameover', 'levelcomplete', 'victory'

// ========================
// 8. Define Enemy Class
// ========================

class Enemy {
    constructor(x, y, health = 100) {
        this.x = x; // Enemy's position on the map
        this.y = y;
        this.health = health; // Enemy's health
        this.speed = 0.01; // Movement speed
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
            soundManager.playDamageSound(); // Play damage sound
            if (player.health <= 0) {
                player.health = 0;
                console.log('Player defeated!');
                soundManager.playDefeatSound(); // Play defeat sound
                // Trigger Game Over
                showGameOver();
            }
        }
    }
}

// ========================
// 9. Define Weapon Class
// ========================

class Weapon {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.pickedUp = false;
    }
}

// ========================
// 10. Level Management Functions
// ========================

// Function to place enemies randomly
function placeEnemies(numEnemies, enemyHealth) {
    enemies = []; // Reset enemies array
    for (let i = 0; i < numEnemies; i++) {
        let placed = false;
        while (!placed) {
            const x = Math.floor(Math.random() * mapWidth);
            const y = Math.floor(Math.random() * mapHeight);
            if (map[y][x] === 0 && (Math.abs(x - player.x) > 2 || Math.abs(y - player.y) > 2)) {
                enemies.push(new Enemy(x + 0.5, y + 0.5, enemyHealth));
                placed = true;
            }
        }
    }
}

// Function to place weapons randomly
function placeWeaponsFunc(numWeapons) {
    weapons = []; // Reset weapons array
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

// Function to load a specific level
function loadLevel(levelNumber) {
    if (levelNumber > levels.length) {
        console.error('Level not defined!');
        return;
    }

    // Set the current map
    map.splice(0, map.length, ...levels[levelNumber - 1]);

    // Update map dimensions
    mapHeight = map.length;
    mapWidth = map[0].length;

    // Increase difficulty: more enemies and higher health
    const numEnemies = 5 + levelNumber * 2; // Example: starting at 5, increasing by 2 each level
    const enemyHealth = 100 + levelNumber * 20; // Example: starting at 100, increasing by 20 each level

    placeEnemies(numEnemies, enemyHealth);

    // Increase weapons: optional, can keep constant or increase
    const numWeapons = 3 + Math.floor(levelNumber / 2); // Example: starting at 3, increasing by 1 every 2 levels
    placeWeaponsFunc(numWeapons);

    // Reset player position and health
    player.x = 1.5;
    player.y = 1.5;
    player.dir = 0;
    player.health = 100;
    score = 0;

    // Store current level and score in Local Storage
    localStorage.setItem('currentLevel', levelNumber);
    localStorage.setItem('score', score);
}


// ========================
// 11. Raycasting Function
// ========================

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

// ========================
// 12. Render Sprites Function
// ========================

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

                    // Draw enemy health indicator
                    drawEnemyHealth(sprite, drawStartX, drawStartY, scaledWidth);
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

// ========================
// 13. Draw Enemy Health Indicators
// ========================

function drawEnemyHealth(sprite, drawStartX, drawStartY, spriteWidth) {
    const healthBarWidth = spriteWidth;
    const healthBarHeight = 5; // Thickness of the health bar

    // Find the corresponding enemy object
    const enemy = enemies.find(e => e.x === sprite.x && e.y === sprite.y && e.alive);

    if (enemy) {
        const healthPercent = Math.max(0, Math.min(1, enemy.health / 100));

        // Position the health bar above the sprite
        const healthBarX = drawStartX;
        const healthBarY = drawStartY - 10; // 10 pixels above the sprite

        // Background of the health bar (gray)
        ctx.fillStyle = 'gray';
        ctx.fillRect(healthBarX, healthBarY, healthBarWidth, healthBarHeight);

        // Health portion (green)
        ctx.fillStyle = 'green';
        ctx.fillRect(healthBarX, healthBarY, healthBarWidth * healthPercent, healthBarHeight);
    }
}

// ========================
// 14. Draw Sword Function
// ========================

function drawSword() {
    if (playerWeapon && swordSprite.complete) {
        const swordWidth = 100; // Adjust size as needed
        const swordHeight = 200; // Adjust size as needed

        const swordX = (canvas.width / 2) - (swordWidth / 2);
        const swordY = canvas.height - swordHeight - 50; // Positioning above bottom edge

        // Save the current context state
        ctx.save();

        // Translate to the pivot point (e.g., bottom center of the sword)
        ctx.translate(swordX + swordWidth / 2, swordY + swordHeight);

        // Calculate rotation angle
        let rotation = -Math.PI / 6; // Default angle (30 degrees upwards)

        if (isAttacking) {
            // Swing the sword by rotating it
            rotation += (Math.PI / 4) * (attackFrame / maxAttackFrames); // Swing 45 degrees
        }

        // Rotate the context
        ctx.rotate(rotation);

        // Draw the sword image centered at the pivot
        ctx.drawImage(
            swordSprite,
            -swordWidth / 2, -swordHeight,
            swordWidth, swordHeight
        );

        // Restore the context to its original state
        ctx.restore();
    }
}

// ========================
// 15. Handle Player Input
// ========================

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

// Sword attack animation variables
let isAttacking = false; // Flag to indicate if the player is attacking
let attackFrame = 0;     // Current frame of the attack animation
const maxAttackFrames = 10; // Total frames for the attack animation

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

// ========================
// 16. Weapon Pickup Function
// ========================

function checkWeaponPickup() {
    weapons.forEach(weapon => {
        if (!weapon.pickedUp) {
            const dx = player.x - weapon.x;
            const dy = player.y - weapon.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 0.5) {
                weapon.pickedUp = true;
                playerWeapon = weapon;
                soundManager.playPickupSound(); // Play pickup sound
                console.log('Weapon picked up!');
            }
        }
    });
}

// ========================
// 17. Attack Function
// ========================

function attack() {
    if (!playerWeapon) {
        console.log('No weapon to attack with!');
        return;
    }

    if (isAttacking) return; // Prevent multiple attacks at the same time

    isAttacking = true;
    attackFrame = 0; // Reset attack animation

    soundManager.playAttackSound(); // Play attack sound

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
            score += 1; // Increment score
            soundManager.playDamageSound(); // Play damage sound
            console.log('Enemy defeated! Total Score:', score);
        } else {
            soundManager.playDamageSound(); // Play damage sound even if not defeated
        }
    } else {
        console.log('Missed!');
    }
}

// ========================
// 18. Mini-Map Function
// ========================

const miniMapScale = 20; // Scale down the map
const miniMapX = 20; // X position on the canvas
const miniMapY = 20; // Y position on the canvas

function drawMiniMap() {
    // Draw map
    for (let y = 0; y < mapHeight; y++) {
        for (let x = 0; x < mapWidth; x++) {
            if (map[y][x] === 1) {
                ctx.fillStyle = 'blue';
            } else {
                ctx.fillStyle = 'lightgrey';
            }
            ctx.fillRect(miniMapX + x * miniMapScale, miniMapY + y * miniMapScale, miniMapScale, miniMapScale);
        }
    }

    // Draw player
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.arc(miniMapX + player.x * miniMapScale, miniMapY + player.y * miniMapScale, 5, 0, 2 * Math.PI);
    ctx.fill();

    // Draw enemies
    enemies.forEach(enemy => {
        if (enemy.alive) {
            ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.arc(miniMapX + enemy.x * miniMapScale, miniMapY + enemy.y * miniMapScale, 5, 0, 2 * Math.PI);
            ctx.fill();
        }
    });

    // Draw weapons
    weapons.forEach(weapon => {
        if (!weapon.pickedUp) {
            ctx.fillStyle = 'yellow';
            ctx.beginPath();
            ctx.arc(miniMapX + weapon.x * miniMapScale, miniMapY + weapon.y * miniMapScale, 5, 0, 2 * Math.PI);
            ctx.fill();
        }
    });
}

// ========================
// 19. Game Over and Level Complete Functions
// ========================

// Reference to HTML elements
const gameOverOverlay = document.getElementById('gameOverOverlay');
const finalScoreSpan = document.getElementById('finalScore');
const restartButton = document.getElementById('restartButton');

const levelCompleteOverlay = document.getElementById('levelCompleteOverlay');
const nextLevelSpan = document.getElementById('nextLevel');
const nextLevelButton = document.getElementById('nextLevelButton');

// Function to show Game Over screen
function showGameOver() {
    gameState = 'gameover';
    // Store the final score in Local Storage
    localStorage.setItem('finalScore', score);
    // Redirect to gameover.html
    window.location.href = 'gameover.html';
}

// Function to show Level Complete screen
function showLevelComplete() {
    gameState = 'levelcomplete';
    // Store the current score in Local Storage
    localStorage.setItem('score', score);
    // Redirect to levelcomplete.html
    window.location.href = 'levelcomplete.html';
}

// Function to show Victory screen
function showVictory() {
    gameState = 'victory';
    // Store the final score
    localStorage.setItem('finalScore', score);
    // Set a victory flag
    localStorage.setItem('victory', 'true');
    // Redirect to gameover.html to display victory message
    window.location.href = 'gameover.html';
}

// ========================
// 20. Game Loop Function
// ========================

let gameLoopId;

function gameLoop() {
    if (!texturesLoaded) {
        requestAnimationFrame(gameLoop);
        return;
    }

    if (gameState === 'running') {
        movePlayer();

        // Update enemies
        enemies.forEach(enemy => enemy.update());

        // Check for weapon pickup
        checkWeaponPickup();

        // Handle sword attack animation
        if (isAttacking) {
            attackFrame++;
            if (attackFrame >= maxAttackFrames) {
                isAttacking = false; // Reset after animation completes
            }
        }

        // Check if all enemies are defeated
        const allEnemiesDefeated = enemies.every(enemy => !enemy.alive);
        if (allEnemiesDefeated) {
            if (currentLevel < maxLevel) {
                showLevelComplete();
            } else {
                // All levels completed
                showVictory();
            }
        }

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

        // Draw the sword if picked up
        drawSword();

        // Draw the mini-map
        drawMiniMap();

        // Display player's health
        ctx.fillStyle = 'white';
        ctx.font = '20px Arial';
        ctx.fillText('Health: ' + Math.floor(player.health), 20, 30);

        // Display player's score
        ctx.fillText('Score: ' + score, 20, 60); // Positioned below health
    }

    // Continue the game loop
    gameLoopId = requestAnimationFrame(gameLoop);
}

// ========================
// 21. Initialize the First Level
// ========================

loadLevel(currentLevel);

// ========================
// 22. Start the Game Loop
// ========================

gameLoop();

// ========================
// 23. Handle Page Resize
// ========================

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Optionally, redraw mini-map or other elements if necessary
});
