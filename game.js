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

// 3. Define the player object
const player = {
    x: 1.5, // starting x position
    y: 1.5, // starting y position
    dir: 0, // direction the player is facing (in radians)
    fov: Math.PI / 3, // field of view (60 degrees)
    speed: 0.05, // movement speed
    turnSpeed: 0.03, // turning speed
    radius: 0.2 // Player's collision radius
};

// 4. Implement the raycasting function with mipmapping
function castRays() {
    const numRays = canvas.width;
    const angleStep = player.fov / numRays;

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

        // Correct fish-eye distortion
        const angleDifference = rayAngle - player.dir;
        const correctedDistance = distanceToWall * Math.cos(angleDifference);

        // Calculate wall height based on corrected distance
        const lineHeight = (canvas.height / correctedDistance);

        const drawStart = Math.floor(-lineHeight / 2 + canvas.height / 2);
        const drawEnd = Math.floor(lineHeight / 2 + canvas.height / 2);

        // Choose texture level based on distance (mipmapping)
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
            ctx.fillStyle = 'grey';
            ctx.fillRect(i, drawStart, 1, drawEnd - drawStart);
        }
    }
}


// 5. Handle player movement
const keys = {};

window.addEventListener('keydown', function(e) {
    keys[e.code] = true;
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

// 6. Create the game loop
function gameLoop() {
    if (!texturesLoaded) {
        requestAnimationFrame(gameLoop);
        return;
    }

    movePlayer();

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw ceiling
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height / 2);

    // Draw floor
    ctx.fillStyle = 'grey';
    ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);

    // Render walls
    castRays();

    requestAnimationFrame(gameLoop);
}

gameLoop();
