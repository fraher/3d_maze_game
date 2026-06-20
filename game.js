// game.js

// ====================================
// 1. Define All Levels and Map Variables
// ====================================

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
        [1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1],
        [1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1],
        [1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1],
        [1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1],
        [1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    // Level 3
    [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1],
        [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1],
        [1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1],
        [1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1],
        [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        
    ],
    [
        // Level 4
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
        [1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1],
        [1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1],
        [1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1],
        [1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1],
        [1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        
    ],
    // Levels 5 to 10 - Similarly defined or unique
    [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1],
        [1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1],
        [1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1],
        [1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1],
        [1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        
    ],
    [
        // Level 6
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1],
        [1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1],
        [1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1],
        [1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1],
        [1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        
    ],
    [
        // Level 7
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1],
        [1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1],
        [1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1],
        [1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1],
        [1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [
        // Level 8
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1],
        [1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1],
        [1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1],
        [1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1],
        [1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        
    ],
    [
        // Level 9
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
        [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
        [1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        
    ],
    [
        // Level 10
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1],
        [1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1],
        [1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1],
        [1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1],
        [1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1],
        [1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

    ],
    // Level 11 - Dragon's Lair: one large empty floor for the boss fight
    [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ]
];

// Initialize map variables
let map = [];
let mapWidth = 0;
let mapHeight = 0;

// ========================
// 2. Initialize the Canvas
// ========================

const canvas = document.getElementById('gameCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

// ========================
// 3. Procedural Wall Textures (medieval alien stone)
// ========================

// Walls are generated in-code per floor: stone masonry with glowing alien runes
// and veins, whose hue shifts as you climb the castle. No image files needed.
let texturesLoaded = true;     // procedural textures are ready synchronously
let wallTexture = null;        // active floor's wall texture (a canvas)

// Small seeded PRNG so each floor's texture is stable and distinct
function mulberry32(a) {
    return function () {
        a |= 0; a = (a + 0x6D2B79F5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

// Glow hue + stone palette for a given floor (rotates as you ascend)
function wallPaletteForFloor(n) {
    const hues = [180, 168, 150, 128, 104, 88, 262, 286, 304, 324, 318];
    const hue = hues[(n - 1) % hues.length];
    return {
        hue: hue,
        glow: 'hsl(' + hue + ',90%,62%)',
        base: 'hsl(' + hue + ',12%,18%)',
        baseDark: 'hsl(' + hue + ',16%,11%)',
        mortar: 'hsl(' + hue + ',18%,7%)'
    };
}

// A small glowing alien rune carved into a block
function drawRune(g, cx, cy, glow, rng) {
    g.save();
    g.translate(cx, cy);
    g.shadowColor = glow; g.shadowBlur = 8;
    g.strokeStyle = glow; g.globalAlpha = 0.85; g.lineWidth = 2;
    g.beginPath();
    const t = Math.floor(rng() * 4);
    if (t === 0) { g.arc(0, 0, 6, 0, 7); g.moveTo(-8, 0); g.lineTo(8, 0); g.moveTo(0, -8); g.lineTo(0, 8); }
    else if (t === 1) { g.moveTo(0, -8); g.lineTo(7, 6); g.lineTo(-7, 6); g.closePath(); }
    else if (t === 2) { g.moveTo(-8, -6); g.lineTo(-2, 2); g.lineTo(-8, 8); g.moveTo(4, -8); g.lineTo(4, 8); }
    else { g.moveTo(0, -8); g.lineTo(6, 0); g.lineTo(0, 8); g.lineTo(-6, 0); g.closePath(); }
    g.stroke();
    g.restore();
}

// Build a 128x128 tiling stone wall for a floor
function makeWallTexture(pal, seed) {
    const S = 128;
    const c = document.createElement('canvas');
    c.width = S; c.height = S;
    const g = c.getContext('2d');
    const rng = mulberry32(seed);

    // Base stone gradient
    const grad = g.createLinearGradient(0, 0, 0, S);
    grad.addColorStop(0, pal.base);
    grad.addColorStop(1, pal.baseDark);
    g.fillStyle = grad; g.fillRect(0, 0, S, S);

    // Grit / speckle
    for (let i = 0; i < 900; i++) {
        const x = rng() * S, y = rng() * S, a = rng() * 0.10;
        g.fillStyle = (rng() < 0.5) ? 'rgba(255,255,255,' + a + ')' : 'rgba(0,0,0,' + a + ')';
        g.fillRect(x, y, 1, 1);
    }

    // Masonry courses (offset every other row so it reads as blockwork)
    const bh = 32, bw = 64;
    for (let row = 0; row * bh < S; row++) {
        const y = row * bh;
        const offset = (row % 2) ? bw / 2 : 0;
        g.strokeStyle = pal.mortar; g.lineWidth = 3;
        g.beginPath(); g.moveTo(0, y); g.lineTo(S, y); g.stroke();
        for (let bx = -bw; bx < S + bw; bx += bw) {
            const x = bx + offset;
            g.beginPath(); g.moveTo(x, y); g.lineTo(x, y + bh); g.stroke();
            const v = (rng() - 0.5) * 0.12; // per-block tone variation
            g.fillStyle = (v > 0) ? 'rgba(255,255,255,' + v + ')' : 'rgba(0,0,0,' + (-v) + ')';
            g.fillRect(x + 2, y + 2, bw - 3, bh - 3);
            if (rng() < 0.16) drawRune(g, x + bw / 2, y + bh / 2, pal.glow, rng);
        }
        g.strokeStyle = 'rgba(255,255,255,0.05)'; g.lineWidth = 1; // bevel highlight
        g.beginPath(); g.moveTo(0, y + 1); g.lineTo(S, y + 1); g.stroke();
    }

    // Glowing alien veins trickling down the stone
    g.save();
    g.shadowColor = pal.glow; g.shadowBlur = 6; g.strokeStyle = pal.glow;
    g.globalAlpha = 0.5; g.lineWidth = 1.5;
    for (let k = 0; k < 2; k++) {
        let x = rng() * S, y = 0;
        g.beginPath(); g.moveTo(x, y);
        while (y < S) { y += 8 + rng() * 10; x += (rng() - 0.5) * 20; g.lineTo(x, y); }
        g.stroke();
    }
    g.restore();

    c._cacheKey = 'wall_' + seed;
    return c;
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

const potionSprite = new Image();
potionSprite.src = 'textures/potion.png'; // Add a potion sprite image

// ========================
// 4b. Enemy Types
// ========================
// Each floor N introduces N distinct enemy types (floor 1 has 1, floor 2 has 2, ...).
// Every type is a hand-drawn "medieval space alien": `form` picks the silhouette,
// `color` is the body, `glow` is the plasma/eye colour. Stats escalate by floor.
const enemyTypes = [
    { name: 'Ooze Trooper',  form: 'ooze',    color: '#5db84a', glow: '#bcff8a', health: 60,  speed: 0.015, damage: 0.05, score: 1,  scale: 0.85 },
    { name: 'Void Bat',      form: 'bat',     color: '#c2384a', glow: '#ff9aa0', health: 80,  speed: 0.022, damage: 0.06, score: 2,  scale: 0.80 },
    { name: 'Spire Crawler', form: 'spider',  color: '#e08a2a', glow: '#ffe28a', health: 110, speed: 0.018, damage: 0.07, score: 3,  scale: 0.90 },
    { name: 'Star Ghoul',    form: 'ghoul',   color: '#2fa3b8', glow: '#aef0ff', health: 140, speed: 0.019, damage: 0.08, score: 4,  scale: 0.95 },
    { name: 'Plasma Wraith', form: 'wraith',  color: '#b145d6', glow: '#f0b6ff', health: 170, speed: 0.020, damage: 0.09, score: 5,  scale: 1.00 },
    { name: 'Iron Golem',    form: 'golem',   color: '#7d6a55', glow: '#ffd27a', health: 230, speed: 0.013, damage: 0.11, score: 6,  scale: 1.15 },
    { name: 'Comet Reaper',  form: 'reaper',  color: '#cfc24a', glow: '#fdffb0', health: 200, speed: 0.024, damage: 0.10, score: 7,  scale: 1.00 },
    { name: 'Nebula Specter',form: 'specter', color: '#3f6fd0', glow: '#b6d4ff', health: 240, speed: 0.021, damage: 0.11, score: 8,  scale: 1.05 },
    { name: 'Warp Demon',    form: 'demon',   color: '#b22a2a', glow: '#ff7a5a', health: 300, speed: 0.020, damage: 0.13, score: 9,  scale: 1.10 },
    { name: 'Rune Warlock',  form: 'warlock', color: '#6a4fb0', glow: '#c9b6ff', health: 360, speed: 0.018, damage: 0.14, score: 10, scale: 1.10 }
];

// The floor 11 boss: a single massive alien dragon
const bossType = { name: 'Alien Dragon', form: 'dragon', color: '#6a1b9a', glow: '#7affea', health: 2600, speed: 0.011, damage: 0.22, score: 100, scale: 3.2 };

// ========================
// 4c. Procedural Sprite Helpers (creatures + stairs)
// ========================

// Shared "medieval" metal for helmets, plates, blades and horns
const ARMOR = '#c2c9d4';
const ARMOR_DARK = '#8a93a1';
const ESW = 100, ESH = 140; // default creature canvas size

// Lighten (f>0) or darken (f<0) a #rrggbb colour by fraction f.
function shade(hex, f) {
    const n = parseInt(hex.slice(1), 16);
    let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    if (f < 0) { const k = 1 + f; r *= k; g *= k; b *= k; }
    else { r += (255 - r) * f; g += (255 - g) * f; b += (255 - b) * f; }
    return 'rgb(' + (r | 0) + ',' + (g | 0) + ',' + (b | 0) + ')';
}

// A glowing alien eye (bright halo with a dark pupil)
function drawGlowEye(g, x, y, r, glow) {
    g.save();
    g.shadowColor = glow;
    g.shadowBlur = 10;
    g.fillStyle = glow;
    g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
    g.shadowBlur = 0;
    g.fillStyle = '#0b0b16';
    g.beginPath(); g.arc(x, y, r * 0.4, 0, Math.PI * 2); g.fill();
    g.restore();
}

// Each form draws a distinct creature onto a transparent canvas, feet near the
// bottom so it floor-anchors. `c` = { main, dark, light, glow }.
const enemyForms = {
    ooze(g, c) {
        g.fillStyle = c.main; // gloopy body
        g.beginPath();
        g.moveTo(18, 132);
        g.bezierCurveTo(8, 95, 14, 64, 50, 62);
        g.bezierCurveTo(86, 64, 92, 95, 82, 132);
        g.quadraticCurveTo(50, 122, 18, 132);
        g.closePath(); g.fill();
        g.fillStyle = c.light;
        g.beginPath(); g.ellipse(40, 88, 9, 13, -0.3, 0, 7); g.fill();
        g.fillStyle = ARMOR; // knight's helm
        g.beginPath(); g.arc(50, 62, 28, Math.PI, 2 * Math.PI); g.closePath(); g.fill();
        g.fillStyle = ARMOR_DARK; g.fillRect(22, 58, 56, 6);
        g.save(); g.shadowColor = c.glow; g.shadowBlur = 10; g.fillStyle = c.glow;
        g.fillRect(32, 49, 36, 5); g.restore(); // visor slit
        drawGlowEye(g, 41, 96, 6, c.glow);
        drawGlowEye(g, 61, 96, 6, c.glow);
        g.fillStyle = c.main;
        g.beginPath(); g.arc(30, 132, 5, 0, 7); g.arc(70, 130, 4, 0, 7); g.fill();
    },
    bat(g, c) {
        g.fillStyle = c.dark; // membranous wings
        g.beginPath();
        g.moveTo(50, 70); g.lineTo(6, 48); g.lineTo(16, 70); g.lineTo(4, 78);
        g.lineTo(20, 84); g.lineTo(10, 98); g.lineTo(50, 88); g.closePath(); g.fill();
        g.beginPath();
        g.moveTo(50, 70); g.lineTo(94, 48); g.lineTo(84, 70); g.lineTo(96, 78);
        g.lineTo(80, 84); g.lineTo(90, 98); g.lineTo(50, 88); g.closePath(); g.fill();
        g.fillStyle = c.main; // body
        g.beginPath(); g.ellipse(50, 88, 15, 26, 0, 0, 7); g.fill();
        g.beginPath(); // ears
        g.moveTo(40, 66); g.lineTo(44, 50); g.lineTo(48, 66); g.closePath();
        g.moveTo(52, 66); g.lineTo(56, 50); g.lineTo(60, 66); g.closePath(); g.fill();
        drawGlowEye(g, 44, 84, 5, c.glow);
        drawGlowEye(g, 56, 84, 5, c.glow);
        g.fillStyle = '#fff'; // fangs
        g.beginPath();
        g.moveTo(46, 100); g.lineTo(48, 108); g.lineTo(50, 100); g.closePath();
        g.moveTo(52, 100); g.lineTo(54, 108); g.lineTo(56, 100); g.closePath(); g.fill();
    },
    spider(g, c) {
        g.strokeStyle = c.dark; g.lineWidth = 5; g.lineCap = 'round';
        for (let i = 0; i < 4; i++) {
            const yy = 80 + i * 9;
            g.beginPath(); g.moveTo(46, yy); g.lineTo(18, yy - 8); g.lineTo(8, yy + 8); g.stroke();
            g.beginPath(); g.moveTo(54, yy); g.lineTo(82, yy - 8); g.lineTo(92, yy + 8); g.stroke();
        }
        g.fillStyle = c.main; // abdomen
        g.beginPath(); g.ellipse(50, 112, 24, 22, 0, 0, 7); g.fill();
        g.fillStyle = c.light; // head
        g.beginPath(); g.ellipse(50, 82, 18, 16, 0, 0, 7); g.fill();
        drawGlowEye(g, 44, 78, 4, c.glow); drawGlowEye(g, 56, 78, 4, c.glow);
        drawGlowEye(g, 40, 86, 3, c.glow); drawGlowEye(g, 60, 86, 3, c.glow);
        drawGlowEye(g, 50, 84, 3, c.glow);
        g.fillStyle = ARMOR; g.fillRect(44, 92, 12, 6); // mandible plate
    },
    ghoul(g, c) {
        g.fillStyle = c.main; // tattered cloak
        g.beginPath();
        g.moveTo(50, 40); g.lineTo(82, 96); g.lineTo(74, 110); g.lineTo(66, 98);
        g.lineTo(58, 116); g.lineTo(50, 100); g.lineTo(42, 116); g.lineTo(34, 98);
        g.lineTo(26, 110); g.lineTo(18, 96); g.closePath(); g.fill();
        g.fillStyle = '#0a0c14'; // hood shadow
        g.beginPath(); g.ellipse(50, 64, 16, 20, 0, 0, 7); g.fill();
        drawGlowEye(g, 44, 62, 5, c.glow);
        drawGlowEye(g, 56, 62, 5, c.glow);
        g.fillStyle = ARMOR; // pauldrons
        g.beginPath(); g.ellipse(30, 80, 9, 6, 0.4, 0, 7); g.fill();
        g.beginPath(); g.ellipse(70, 80, 9, 6, -0.4, 0, 7); g.fill();
    },
    wraith(g, c) {
        g.save(); g.globalAlpha = 0.85; g.fillStyle = c.main;
        g.beginPath();
        g.moveTo(50, 44);
        g.bezierCurveTo(78, 60, 70, 100, 60, 124);
        g.quadraticCurveTo(50, 112, 40, 124);
        g.bezierCurveTo(30, 100, 22, 60, 50, 44);
        g.closePath(); g.fill(); g.restore();
        g.save(); g.shadowColor = c.glow; g.shadowBlur = 16; g.fillStyle = c.glow;
        g.beginPath(); g.arc(50, 88, 7, 0, 7); g.fill(); g.restore(); // core
        g.strokeStyle = c.light; g.lineWidth = 5; g.lineCap = 'round';
        g.beginPath(); g.moveTo(40, 72); g.lineTo(22, 84); g.stroke();
        g.beginPath(); g.moveTo(60, 72); g.lineTo(78, 84); g.stroke();
        drawGlowEye(g, 44, 60, 5, c.glow);
        drawGlowEye(g, 56, 60, 5, c.glow);
    },
    golem(g, c) {
        g.fillStyle = c.dark; g.fillRect(32, 110, 14, 24); g.fillRect(54, 110, 14, 24); // legs
        g.fillStyle = c.main; g.fillRect(26, 64, 48, 52); // torso
        g.fillStyle = ARMOR; g.fillRect(26, 64, 48, 10); // chest plate
        g.fillStyle = ARMOR_DARK;
        for (let i = 0; i < 3; i++) { g.beginPath(); g.arc(36 + i * 14, 69, 2, 0, 7); g.fill(); }
        g.fillStyle = c.main; g.fillRect(12, 70, 14, 40); g.fillRect(74, 70, 14, 40); // arms
        g.fillStyle = c.dark;
        g.beginPath(); g.arc(19, 112, 9, 0, 7); g.arc(81, 112, 9, 0, 7); g.fill(); // fists
        g.fillStyle = ARMOR; g.fillRect(38, 44, 24, 22); // helm
        g.fillStyle = ARMOR_DARK; g.fillRect(38, 44, 24, 4);
        g.save(); g.shadowColor = c.glow; g.shadowBlur = 10; g.fillStyle = c.glow;
        g.fillRect(42, 54, 16, 4); g.restore(); // eye visor
    },
    reaper(g, c) {
        g.strokeStyle = '#6b5436'; g.lineWidth = 5; g.lineCap = 'round'; // scythe pole
        g.beginPath(); g.moveTo(74, 30); g.lineTo(66, 128); g.stroke();
        g.fillStyle = ARMOR; // blade
        g.beginPath(); g.moveTo(74, 30); g.quadraticCurveTo(38, 26, 34, 50);
        g.quadraticCurveTo(58, 40, 74, 44); g.closePath(); g.fill();
        g.fillStyle = c.main; // cloak
        g.beginPath();
        g.moveTo(50, 44); g.lineTo(78, 120); g.lineTo(60, 112); g.lineTo(50, 124);
        g.lineTo(40, 112); g.lineTo(22, 120); g.closePath(); g.fill();
        g.fillStyle = c.dark;
        g.beginPath(); g.moveTo(34, 58); g.quadraticCurveTo(50, 34, 66, 58);
        g.quadraticCurveTo(50, 66, 34, 58); g.fill();
        g.fillStyle = '#0a0c14';
        g.beginPath(); g.ellipse(50, 58, 12, 14, 0, 0, 7); g.fill();
        drawGlowEye(g, 45, 58, 4, c.glow);
        drawGlowEye(g, 55, 58, 4, c.glow);
    },
    specter(g, c) {
        g.save(); g.globalAlpha = 0.8; g.fillStyle = c.main;
        g.beginPath();
        g.moveTo(50, 46);
        g.bezierCurveTo(80, 56, 74, 104, 66, 122);
        g.lineTo(58, 112); g.lineTo(50, 122); g.lineTo(42, 112); g.lineTo(34, 122);
        g.bezierCurveTo(26, 104, 20, 56, 50, 46);
        g.closePath(); g.fill(); g.restore();
        g.fillStyle = c.glow; // star speckles
        const stars = [[40, 70], [60, 64], [52, 90], [36, 100], [64, 96], [48, 78]];
        for (const s of stars) { g.beginPath(); g.arc(s[0], s[1], 1.6, 0, 7); g.fill(); }
        drawGlowEye(g, 44, 64, 5, c.glow);
        drawGlowEye(g, 56, 64, 5, c.glow);
    },
    demon(g, c) {
        g.fillStyle = c.dark; // bat wings
        g.beginPath(); g.moveTo(34, 72); g.lineTo(10, 60); g.lineTo(18, 86); g.lineTo(34, 90); g.closePath(); g.fill();
        g.beginPath(); g.moveTo(66, 72); g.lineTo(90, 60); g.lineTo(82, 86); g.lineTo(66, 90); g.closePath(); g.fill();
        g.fillStyle = c.dark; g.fillRect(38, 112, 10, 22); g.fillRect(52, 112, 10, 22); // legs
        g.fillStyle = c.main;
        g.beginPath(); g.moveTo(34, 72); g.lineTo(66, 72); g.lineTo(62, 116); g.lineTo(38, 116); g.closePath(); g.fill();
        g.fillStyle = ARMOR; // chest plate
        g.beginPath(); g.moveTo(42, 78); g.lineTo(58, 78); g.lineTo(50, 96); g.closePath(); g.fill();
        g.fillStyle = c.main; g.beginPath(); g.arc(50, 60, 14, 0, 7); g.fill(); // head
        g.fillStyle = ARMOR; // horns
        g.beginPath(); g.moveTo(40, 52); g.lineTo(30, 38); g.lineTo(44, 48); g.closePath();
        g.moveTo(60, 52); g.lineTo(70, 38); g.lineTo(56, 48); g.closePath(); g.fill();
        drawGlowEye(g, 44, 60, 4, c.glow);
        drawGlowEye(g, 56, 60, 4, c.glow);
        g.strokeStyle = c.glow; g.lineWidth = 2;
        g.beginPath(); g.moveTo(44, 68); g.lineTo(56, 68); g.stroke();
    },
    warlock(g, c) {
        g.strokeStyle = '#6b5436'; g.lineWidth = 4; g.lineCap = 'round'; // staff
        g.beginPath(); g.moveTo(30, 40); g.lineTo(34, 128); g.stroke();
        g.save(); g.shadowColor = c.glow; g.shadowBlur = 16; g.fillStyle = c.glow;
        g.beginPath(); g.arc(30, 36, 8, 0, 7); g.fill(); g.restore(); // orb
        g.fillStyle = c.main; // robe
        g.beginPath(); g.moveTo(50, 46); g.lineTo(74, 124); g.lineTo(50, 118); g.lineTo(26, 124); g.closePath(); g.fill();
        g.strokeStyle = c.glow; g.lineWidth = 2;
        g.beginPath(); g.moveTo(50, 46); g.lineTo(74, 124); g.moveTo(50, 46); g.lineTo(26, 124); g.stroke();
        g.fillStyle = c.dark;
        g.beginPath(); g.moveTo(38, 64); g.quadraticCurveTo(50, 40, 62, 64);
        g.quadraticCurveTo(50, 72, 38, 64); g.fill();
        g.fillStyle = '#0a0c14';
        g.beginPath(); g.ellipse(50, 62, 11, 13, 0, 0, 7); g.fill();
        drawGlowEye(g, 45, 62, 4, c.glow);
        drawGlowEye(g, 55, 62, 4, c.glow);
        g.fillStyle = c.glow; // runes
        g.beginPath(); g.arc(50, 94, 2, 0, 7); g.arc(46, 104, 1.6, 0, 7); g.arc(54, 104, 1.6, 0, 7); g.fill();
    },
    dragon(g, c, w) {
        const cx = w / 2;
        g.fillStyle = c.dark; // wings
        g.beginPath();
        g.moveTo(cx - 10, 60); g.lineTo(8, 28); g.lineTo(20, 58); g.lineTo(6, 64);
        g.lineTo(24, 76); g.lineTo(14, 92); g.lineTo(cx - 12, 84); g.closePath(); g.fill();
        g.beginPath();
        g.moveTo(cx + 10, 60); g.lineTo(w - 8, 28); g.lineTo(w - 20, 58); g.lineTo(w - 6, 64);
        g.lineTo(w - 24, 76); g.lineTo(w - 14, 92); g.lineTo(cx + 12, 84); g.closePath(); g.fill();
        g.strokeStyle = shade(c.dark, -0.2); g.lineWidth = 2; // wing ribs
        g.beginPath();
        g.moveTo(cx - 10, 60); g.lineTo(8, 28); g.moveTo(cx - 10, 60); g.lineTo(6, 64); g.moveTo(cx - 10, 60); g.lineTo(14, 92);
        g.moveTo(cx + 10, 60); g.lineTo(w - 8, 28); g.moveTo(cx + 10, 60); g.lineTo(w - 6, 64); g.moveTo(cx + 10, 60); g.lineTo(w - 14, 92);
        g.stroke();
        g.strokeStyle = c.main; g.lineWidth = 10; g.lineCap = 'round'; // tail
        g.beginPath(); g.moveTo(cx, 100); g.quadraticCurveTo(cx + 32, 122, cx + 42, 110); g.stroke();
        g.fillStyle = c.main; // body
        g.beginPath(); g.ellipse(cx, 92, 22, 30, 0, 0, 7); g.fill();
        g.fillStyle = c.light; // belly
        g.beginPath(); g.ellipse(cx, 96, 11, 22, 0, 0, 7); g.fill();
        g.strokeStyle = c.main; g.lineWidth = 16; g.lineCap = 'round'; // neck
        g.beginPath(); g.moveTo(cx, 78); g.quadraticCurveTo(cx - 6, 50, cx - 2, 40); g.stroke();
        g.fillStyle = c.main; // head
        g.beginPath(); g.ellipse(cx - 2, 36, 16, 13, -0.2, 0, 7); g.fill();
        g.beginPath(); g.moveTo(cx - 16, 36); g.lineTo(cx - 32, 40); g.lineTo(cx - 14, 44); g.closePath(); g.fill(); // snout
        g.fillStyle = ARMOR; // horns
        g.beginPath(); g.moveTo(cx + 6, 28); g.lineTo(cx + 16, 14); g.lineTo(cx + 10, 30); g.closePath();
        g.moveTo(cx - 4, 26); g.lineTo(cx + 2, 12); g.lineTo(cx + 2, 28); g.closePath(); g.fill();
        drawGlowEye(g, cx - 6, 34, 5, c.glow);
        g.save(); g.shadowColor = c.glow; g.shadowBlur = 12; g.fillStyle = c.glow;
        g.beginPath(); g.arc(cx - 30, 41, 3, 0, 7); g.fill(); g.restore(); // nostril fire
        g.strokeStyle = ARMOR; g.lineWidth = 3; g.lineCap = 'round'; // claws
        g.beginPath();
        g.moveTo(cx - 8, 118); g.lineTo(cx - 12, 126); g.moveTo(cx, 118); g.lineTo(cx, 127);
        g.moveTo(cx + 8, 118); g.lineTo(cx + 12, 126); g.stroke();
    }
};

// Render a creature for a type once and cache it on the type.
function makeEnemySprite(type) {
    const isDragon = type.form === 'dragon';
    const w = isDragon ? 150 : ESW;
    const h = isDragon ? 132 : ESH;
    const cnv = document.createElement('canvas');
    cnv.width = w; cnv.height = h;
    const g = cnv.getContext('2d');
    const c = {
        main: type.color,
        dark: shade(type.color, -0.38),
        light: shade(type.color, 0.32),
        glow: type.glow
    };
    (enemyForms[type.form] || enemyForms.ooze)(g, c, w, h);
    cnv._cacheKey = 'enemy_' + type.form; // used by getShadedSprite's cache
    return cnv;
}

// Build every creature sprite up front
enemyTypes.forEach(t => { t.sprite = makeEnemySprite(t); });
bossType.sprite = makeEnemySprite(bossType);

// Build a simple glowing stairway marker (arrow over steps) on a transparent canvas.
function makeStairsSprite(color, up) {
    const size = 96;
    const c = document.createElement('canvas');
    c.width = size;
    c.height = size;
    const g = c.getContext('2d');

    // Soft glow
    const grad = g.createRadialGradient(size / 2, size / 2, 4, size / 2, size / 2, size / 2);
    grad.addColorStop(0, color);
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    g.globalAlpha = 0.5;
    g.fillStyle = grad;
    g.fillRect(0, 0, size, size);
    g.globalAlpha = 1;

    // Steps
    g.fillStyle = color;
    g.strokeStyle = 'rgba(0,0,0,0.6)';
    g.lineWidth = 2;
    const steps = 4;
    for (let i = 0; i < steps; i++) {
        const sw = size * (0.35 + 0.12 * i);
        const sh = size * 0.12;
        const sx = (size - sw) / 2;
        const sy = up ? (size * 0.78 - i * sh) : (size * 0.22 + i * sh);
        g.fillRect(sx, sy, sw, sh);
        g.strokeRect(sx, sy, sw, sh);
    }

    // Arrow indicating direction
    g.fillStyle = '#ffffff';
    g.beginPath();
    if (up) {
        g.moveTo(size / 2, size * 0.10);
        g.lineTo(size * 0.66, size * 0.30);
        g.lineTo(size * 0.34, size * 0.30);
    } else {
        g.moveTo(size / 2, size * 0.90);
        g.lineTo(size * 0.66, size * 0.70);
        g.lineTo(size * 0.34, size * 0.70);
    }
    g.closePath();
    g.fill();

    c._cacheKey = up ? 'stairsUp' : 'stairsDown';
    return c;
}

const stairsUpSprite = makeStairsSprite('#46e6ff', true);
const stairsDownSprite = makeStairsSprite('#ff9d3a', false);

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
// 5b. Generative Music
// ========================
// Procedural background score built live with the Web Audio API (no audio files).
// Two themes: an eerie ambient drift for exploration, and a driving, menacing
// pulse for the dragon fight. A look-ahead scheduler queues notes just in time.
class MusicManager {
    constructor(ctx) {
        this.ctx = ctx;
        this.master = ctx.createGain();
        this.master.gain.value = 0.0001;
        this.master.connect(ctx.destination);
        this.playing = false;
        this.theme = 'exploration';
        this.step = 0;
        this.nextStepTime = 0;
        this.timer = null;
        this.lookahead = 0.12;     // seconds of audio to schedule ahead
        this.noise = this._makeNoise();
    }

    _makeNoise() {
        const len = Math.floor(this.ctx.sampleRate * 0.4);
        const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
        const d = buf.getChannelData(0);
        for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
        return buf;
    }

    // A single enveloped oscillator note
    _note(freq, t, dur, type, peak, attack, release) {
        const o = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        o.type = type || 'sine';
        o.frequency.setValueAtTime(freq, t);
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(peak, t + (attack || 0.01));
        g.gain.exponentialRampToValueAtTime(0.0001, t + dur + (release || 0.1));
        o.connect(g); g.connect(this.master);
        o.start(t); o.stop(t + dur + (release || 0.1) + 0.02);
    }

    _kick(t) {
        const o = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        o.type = 'sine';
        o.frequency.setValueAtTime(150, t);
        o.frequency.exponentialRampToValueAtTime(45, t + 0.12);
        g.gain.setValueAtTime(0.9, t);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
        o.connect(g); g.connect(this.master);
        o.start(t); o.stop(t + 0.2);
    }

    _hat(t, peak) {
        const s = this.ctx.createBufferSource();
        s.buffer = this.noise;
        const hp = this.ctx.createBiquadFilter();
        hp.type = 'highpass'; hp.frequency.value = 6000;
        const g = this.ctx.createGain();
        g.gain.setValueAtTime(peak || 0.18, t);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
        s.connect(hp); hp.connect(g); g.connect(this.master);
        s.start(t); s.stop(t + 0.07);
    }

    _rampMaster(target, secs) {
        const now = this.ctx.currentTime;
        this.master.gain.cancelScheduledValues(now);
        this.master.gain.setValueAtTime(Math.max(0.0001, this.master.gain.value), now);
        this.master.gain.linearRampToValueAtTime(target, now + secs);
    }

    start(theme) {
        if (!this.ctx) return;
        if (theme) this.theme = theme;
        if (this.playing) { this.setTheme(this.theme); return; }
        const self = this;
        const begin = function () {
            if (self.playing) return;
            self.playing = true;
            self.step = 0;
            self.nextStepTime = self.ctx.currentTime + 0.1;
            self._rampMaster(self._targetGain(), 0.8);
            self.timer = setInterval(function () { self._scheduler(); }, 25);
        };
        // Only begin scheduling once the context is actually running, so the
        // note times and gain ramp are computed against a live clock.
        if (this.ctx.state === 'suspended' && this.ctx.resume) {
            this.ctx.resume().then(begin).catch(begin);
        } else {
            begin();
        }
    }

    _targetGain() {
        return this.theme === 'boss' ? 0.6 : 0.5;
    }

    setTheme(theme) {
        if (theme === this.theme) return;
        this.theme = theme;
        if (this.playing) this._rampMaster(this._targetGain(), 1.2);
    }

    stop() {
        if (!this.playing) return;
        this.playing = false;
        if (this.timer) { clearInterval(this.timer); this.timer = null; }
        this._rampMaster(0.0001, 1.2);
    }

    _scheduler() {
        if (!this.playing) return;
        const stepDur = (this.theme === 'boss') ? 0.16 : 0.30;
        while (this.nextStepTime < this.ctx.currentTime + this.lookahead) {
            if (this.theme === 'boss') this._boss(this.step, this.nextStepTime, stepDur);
            else this._explore(this.step, this.nextStepTime, stepDur);
            this.step++;
            this.nextStepTime += stepDur;
        }
    }

    // Eerie ambient: a low bass, a soft minor pad, a steady arpeggio and sparse bells.
    // Pitched into the audible range so it carries on laptop / phone speakers.
    _explore(step, t, stepDur) {
        const bar = 16;
        const pos = step % bar;
        const barRoots = [146.83, 130.81, 196.00, 174.61]; // D3, C3, G3, F3
        const root = barRoots[Math.floor(step / bar) % barRoots.length];
        if (pos === 0) {
            const barDur = stepDur * bar;
            this._note(root / 2, t, barDur, 'sine', 0.34, 0.6, 0.8);                       // bass
            this._note(root, t, barDur * 0.96, 'triangle', 0.20, 0.8, 0.8);                // pad root
            this._note(root * Math.pow(2, 3 / 12), t, barDur * 0.96, 'triangle', 0.15, 1.0, 0.8); // minor 3rd
            this._note(root * Math.pow(2, 7 / 12), t, barDur * 0.96, 'triangle', 0.15, 1.0, 0.8); // 5th
        }
        // Steady arpeggio so there's always gentle motion
        const arp = [0, 3, 7, 10, 12, 7];
        if (pos % 2 === 0) {
            const deg = arp[(pos / 2) % arp.length];
            this._note(root * Math.pow(2, deg / 12), t, stepDur * 1.3, 'sine', 0.14, 0.02, 0.35);
        }
        // Sparse high bell shimmer
        if (Math.random() < 0.18) {
            const scale = [0, 2, 3, 5, 7, 8, 10];
            const deg = scale[Math.floor(Math.random() * scale.length)];
            this._note(root * Math.pow(2, (deg + 12) / 12), t, stepDur * 2, 'sine', 0.16, 0.02, 0.6);
        }
    }

    // Boss: a driving ostinato, kick/hat pulse, and dissonant phrygian stabs (audible range)
    _boss(step, t, stepDur) {
        const bar = 16;
        const pos = step % bar;
        const root = 110.0; // A2
        const pattern = [0, 0, 7, 0, 0, 3, 0, 5];
        const off = pattern[step % pattern.length];
        this._note(root * Math.pow(2, off / 12), t, stepDur * 0.9, 'sawtooth', 0.26, 0.005, 0.05); // bass
        if (pos % 4 === 0) this._kick(t);
        if (pos % 2 === 1) this._hat(t, 0.16);
        const scale = [0, 1, 3, 5, 7, 8, 10]; // phrygian (menacing)
        if (pos % 4 === 0 || Math.random() < 0.25) {
            const deg = scale[Math.floor(Math.random() * scale.length)];
            this._note(root * Math.pow(2, (deg + 12) / 12), t, stepDur * 2, 'square', 0.14, 0.005, 0.2); // lead
        }
        if (pos === 0) this._note(root * 2, t, stepDur * bar * 0.5, 'sawtooth', 0.06, 0.5, 1.0); // high drone
    }
}

const musicManager = new MusicManager(soundManager.audioCtx);

// ========================
// 6. Define the Player Object
// ========================

let swordItem = localStorage.getItem('sword');

const player = {
    x: 1.5, // starting x position
    y: 1.5, // starting y position
    dir: 0, // direction the player is facing (in radians)
    fov: Math.PI / 3, // field of view (60 degrees)
    speed: 0.03, // movement speed
    turnSpeed: 0.02, // turning speed
    radius: 0.2, // Player's collision radius
    health: 100, // Player's health
    sword: swordItem && swordItem.toLowerCase() === 'true' 
    ? true 
    : false,
    swordLevel: parseInt(localStorage.getItem('swordLevel')) || 1
};

// ========================
// 7. Initialize Game Variables
// ========================

// Initialize score
let score = parseInt(localStorage.getItem('score')) || 0;

// Current floor (1..11). A run always starts at floor 1; floors are kept in memory.
let currentLevel = 1;
const maxLevel = 11;        // Floor 11 is the dragon's lair
const bossLevel = 11;

// Active-floor state (these point at the current floor's data; see floor system below)
let enemies = [];
let weapons = [];
let healthPotions = [];
let seen = [];              // Fog-of-war: which cells the player has seen
let stairsUp = null;        // {x, y} cell of the up-staircase (null on top floor)
let stairsDown = null;      // {x, y} cell of the down-staircase (null on floor 1)

// Persistent per-floor state so enemies are never refreshed once generated
const floorCache = {};

// Stair-transition guard + floor-entry banner
let lastStairs = null;      // stairs we just arrived on; ignored until we step away
let floorBanner = null;     // { text, until } transient on-screen floor label

// Player's weapon
let playerWeapon = localStorage.getItem('weapon') || null;

// Game State
let gameState = 'intro'; // 'intro', 'running', 'gameover', 'victory'

// ========================
// 8. Define Enemy Class
// ========================

class Enemy {
    constructor(x, y, type) {
        this.x = x; // Enemy's position on the map
        this.y = y;
        this.type = type;            // Enemy type definition (stats, colour, scale)
        this.health = type.health;   // Current health
        this.maxHealth = type.health; // For the health-bar ratio
        this.speed = type.speed;     // Movement speed
        this.alive = true;           // Is the enemy alive?
    }

    update() {
        if (!this.alive) return;

        // Simple AI to move towards the player
        const dx = player.x - this.x;
        const dy = player.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 0.5) {
            // Move towards the player (scaled to frame time)
            const moveX = (dx / distance) * this.speed * frameScale;
            const moveY = (dy / distance) * this.speed * frameScale;

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
            // Attack the player (damage per second, scaled to frame time)
            player.health -= this.type.damage * frameScale; // Damage scales with enemy type
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
// 10. Define HealthPotion Class
// ========================

class HealthPotion {
    constructor(x, y, healingAmount = 30) {
        this.x = x;
        this.y = y;
        this.healingAmount = healingAmount;
        this.pickedUp = false;
    }
}

// ========================
// 11. Level Management Functions
// ========================

// Return the open cell (value 0) nearest to (tx, ty) via an expanding ring search.
function nearestOpenCell(grid, tx, ty) {
    const h = grid.length, w = grid[0].length;
    if (grid[ty] && grid[ty][tx] === 0) return { x: tx, y: ty };
    for (let r = 1; r < Math.max(w, h); r++) {
        for (let dy = -r; dy <= r; dy++) {
            for (let dx = -r; dx <= r; dx++) {
                const x = tx + dx, y = ty + dy;
                if (y >= 0 && y < h && x >= 0 && x < w && grid[y][x] === 0) return { x, y };
            }
        }
    }
    return { x: 1, y: 1 };
}

// BFS over open cells from `start`; returns the reachable cell that is farthest away.
function farthestOpenCell(grid, start) {
    const h = grid.length, w = grid[0].length;
    const visited = Array.from({ length: h }, () => new Array(w).fill(false));
    const queue = [start];
    visited[start.y][start.x] = true;
    let farthest = start;
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    while (queue.length) {
        const cell = queue.shift();
        farthest = cell; // BFS dequeues in non-decreasing distance order
        for (const [dx, dy] of dirs) {
            const nx = cell.x + dx, ny = cell.y + dy;
            if (nx >= 0 && nx < w && ny >= 0 && ny < h && !visited[ny][nx] && grid[ny][nx] === 0) {
                visited[ny][nx] = true;
                queue.push({ x: nx, y: ny });
            }
        }
    }
    return farthest;
}

// Pick a random open cell at least `minDist` (Chebyshev) from every cell in `avoid`.
function randomOpenCell(grid, avoid, minDist) {
    const h = grid.length, w = grid[0].length;
    for (let tries = 0; tries < 200; tries++) {
        const x = Math.floor(Math.random() * w);
        const y = Math.floor(Math.random() * h);
        if (grid[y][x] !== 0) continue;
        let ok = true;
        for (const a of avoid) {
            if (Math.max(Math.abs(x - a.x), Math.abs(y - a.y)) < minDist) { ok = false; break; }
        }
        if (ok) return { x, y };
    }
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (grid[y][x] === 0) return { x, y };
    return { x: 1, y: 1 };
}

// Build every enemy for a floor (generated once, then persisted in the floor cache).
function buildEnemies(n, grid, avoid) {
    const list = [];
    if (n === bossLevel) {
        const cx = Math.floor(grid[0].length / 2), cy = Math.floor(grid.length / 2);
        const cell = grid[cy][cx] === 0 ? { x: cx, y: cy } : nearestOpenCell(grid, cx, cy);
        list.push(new Enemy(cell.x + 0.5, cell.y + 0.5, bossType));
        return list;
    }
    const count = 4 + n * 2;
    for (let i = 0; i < count; i++) {
        const type = enemyTypes[i % n]; // round-robin guarantees all N types appear
        const cell = randomOpenCell(grid, avoid, 2);
        list.push(new Enemy(cell.x + 0.5, cell.y + 0.5, type));
    }
    return list;
}

function buildItems(count, grid, avoid, makeFn) {
    const list = [];
    for (let i = 0; i < count; i++) {
        const cell = randomOpenCell(grid, avoid, 1);
        list.push(makeFn(cell.x + 0.5, cell.y + 0.5));
    }
    return list;
}

// Generate a floor's complete, persistent state.
function generateFloor(n) {
    const grid = levels[n - 1].map(row => row.slice());
    const h = grid.length, w = grid[0].length;

    // Down-staircase at the entrance; up-staircase at the farthest reachable cell.
    const base = nearestOpenCell(grid, 1, 1);
    const far = farthestOpenCell(grid, base);
    let sUp = null, sDown = null;
    if (n === 1) {
        sUp = far;            // first floor: only a way up
    } else if (n === bossLevel) {
        sDown = base;         // top floor: only a way back down
    } else {
        sDown = base;
        sUp = far;
    }

    const avoid = [base];
    if (sUp) avoid.push(sUp);
    if (sDown) avoid.push(sDown);

    const enemyList = buildEnemies(n, grid, avoid);
    const weaponList = (n === bossLevel) ? [] : buildItems(1 + Math.floor(n / 3), grid, avoid, (x, y) => new Weapon(x, y));
    const potionCount = (n === bossLevel) ? 3 : 1 + Math.floor(n / 2);
    const potionList = buildItems(potionCount, grid, avoid, (x, y) => new HealthPotion(x, y));
    const seenGrid = Array.from({ length: h }, () => new Array(w).fill(false));
    const wallTex = makeWallTexture(wallPaletteForFloor(n), (n * 2654435761) >>> 0);

    return {
        number: n, map: grid, width: w, height: h,
        enemies: enemyList, weapons: weaponList, healthPotions: potionList,
        seen: seenGrid, stairsUp: sUp, stairsDown: sDown, spawn: base,
        wallTexture: wallTex
    };
}

function getFloor(n) {
    if (!floorCache[n]) floorCache[n] = generateFloor(n);
    return floorCache[n];
}

// Face a direction that points toward an adjacent open cell.
function facingFromCell(grid, cell) {
    const dirs = [[1, 0, 0], [0, 1, Math.PI / 2], [-1, 0, Math.PI], [0, -1, -Math.PI / 2]];
    for (const [dx, dy, ang] of dirs) {
        const nx = cell.x + dx, ny = cell.y + dy;
        if (grid[ny] && grid[ny][nx] === 0) return ang;
    }
    return 0;
}

// Switch the active floor. `arrive` is 'start', 'up' (climbed) or 'down' (descended).
function goToFloor(n, arrive) {
    if (n < 1 || n > maxLevel) return;

    const floor = getFloor(n);
    currentLevel = n;

    // Point the active-floor globals at this floor's persistent data
    map = floor.map;
    mapHeight = floor.height;
    mapWidth = floor.width;
    enemies = floor.enemies;
    weapons = floor.weapons;
    healthPotions = floor.healthPotions;
    seen = floor.seen;
    stairsUp = floor.stairsUp;
    stairsDown = floor.stairsDown;
    wallTexture = floor.wallTexture;

    // Where does the player appear?
    let cell;
    if (arrive === 'up') {
        cell = floor.stairsDown || floor.spawn; // appear at the way back down
        lastStairs = 'down';                    // don't instantly drop back down
    } else if (arrive === 'down') {
        cell = floor.stairsUp || floor.spawn;    // appear at the way back up
        lastStairs = 'up';
    } else {
        cell = floor.spawn;
        lastStairs = null;
    }

    player.x = cell.x + 0.5;
    player.y = cell.y + 0.5;
    player.dir = facingFromCell(floor.map, cell);

    floorBanner = {
        text: n === bossLevel ? 'Floor 11 — Lair of the Alien Dragon' : 'Floor ' + n,
        until: performance.now() + 1800
    };

    soundManager.playBeep(arrive === 'down' ? 320 : 520, 0.15, 0.4);

    // Swap the score to the boss theme on the dragon's floor (and back otherwise)
    musicManager.setTheme(n === bossLevel ? 'boss' : 'exploration');
}

// ========================
// 12. Raycasting Function
// ========================

function castRays() {
    const numRays = canvas.width;
    // Use the same FOV and direction logic as before for consistency
    const angleStep = player.fov / numRays;

    const zBuffer = []; // To keep track of wall distances for sprites

    for (let i = 0; i < numRays; i++) {
        const rayAngle = player.dir - (player.fov / 2) + (i * angleStep);
        
        // Ray direction vectors
        const rayDirX = Math.cos(rayAngle);
        const rayDirY = Math.sin(rayAngle);

        // Map position
        let mapX = Math.floor(player.x);
        let mapY = Math.floor(player.y);

        // Length of ray from current position to next x or y-side
        let sideDistX;
        let sideDistY;

        // Length of ray from one x or y-side to next x or y-side
        // Prevent division by zero
        const deltaDistX = (rayDirX === 0) ? 1e30 : Math.abs(1 / rayDirX);
        const deltaDistY = (rayDirY === 0) ? 1e30 : Math.abs(1 / rayDirY);

        let perpWallDist;

        // Step direction
        let stepX;
        let stepY;

        let hit = 0; // Was there a wall hit?
        let side; // Was a NS or a EW wall hit?

        // Calculate step and initial sideDist
        if (rayDirX < 0) {
            stepX = -1;
            sideDistX = (player.x - mapX) * deltaDistX;
        } else {
            stepX = 1;
            sideDistX = (mapX + 1.0 - player.x) * deltaDistX;
        }
        if (rayDirY < 0) {
            stepY = -1;
            sideDistY = (player.y - mapY) * deltaDistY;
        } else {
            stepY = 1;
            sideDistY = (mapY + 1.0 - player.y) * deltaDistY;
        }

        // DDA Algorithm
        let distanceToWall = 0;
        while (hit === 0) {
            // Jump to next map square, OR in x-direction, OR in y-direction
            if (sideDistX < sideDistY) {
                sideDistX += deltaDistX;
                mapX += stepX;
                side = 0;
            } else {
                sideDistY += deltaDistY;
                mapY += stepY;
                side = 1;
            }

            // Check if ray has hit a wall
            if (mapX < 0 || mapX >= mapWidth || mapY < 0 || mapY >= mapHeight) {
                hit = 1;
                distanceToWall = 16; // Max distance
            } else if (map[mapY][mapX] === 1) {
                hit = 1;
            }

            // Fog-of-war: reveal every cell this ray passes through (and the wall it hits)
            if (mapX >= 0 && mapX < mapWidth && mapY >= 0 && mapY < mapHeight) {
                seen[mapY][mapX] = true;
            }
        }

        // Calculate distance projected on camera direction
        if (side === 0) {
            distanceToWall = (sideDistX - deltaDistX);
        } else {
            distanceToWall = (sideDistY - deltaDistY);
        }

        // Correct fisheye distortion
        const angleDifference = rayAngle - player.dir;
        const correctedDistance = distanceToWall * Math.cos(angleDifference);

        // Calculate wall height based on corrected distance
        const lineHeight = (canvas.height / correctedDistance);

        const drawStart = Math.floor(-lineHeight / 2 + canvas.height / 2);
        const drawEnd = Math.floor(lineHeight / 2 + canvas.height / 2);

        // Calculate texture X coordinate
        let textureX;
        if (side === 0) {
            let wallX = player.y + distanceToWall * rayDirY;
            wallX -= Math.floor(wallX);
            textureX = wallX;
        } else {
            let wallX = player.x + distanceToWall * rayDirX;
            wallX -= Math.floor(wallX);
            textureX = wallX;
        }
        
        // Flip texture if needed
        if (side === 0 && rayDirX > 0) textureX = 1.0 - textureX;
        if (side === 1 && rayDirY < 0) textureX = 1.0 - textureX;

        // Draw the procedural alien-stone wall slice for this floor
        if (wallTexture) {
            ctx.drawImage(
                wallTexture,
                Math.floor(textureX * wallTexture.width), 0, 1, wallTexture.height,
                i, drawStart, 1, drawEnd - drawStart
            );
        } else {
            ctx.fillStyle = 'grey';
            ctx.fillRect(i, drawStart, 1, drawEnd - drawStart);
        }

        // Alien atmosphere: darken/tint walls with distance (fog) and by orientation
        // (y-facing walls a touch darker for depth); distant walls melt into the teal mist.
        const fog = Math.min(1, correctedDistance / 13);
        let darkness = (side === 1 ? 0.22 : 0.08) + fog * 0.7;
        if (darkness > 0.85) darkness = 0.85;
        ctx.fillStyle = 'rgba(26, 46, 50, ' + darkness + ')';
        ctx.fillRect(i, drawStart, 1, drawEnd - drawStart);

        zBuffer[i] = correctedDistance; // Save distance for sprite rendering
    }

    // Render sprites (enemies, weapons, and health potions)
    renderSprites(zBuffer);
}

// ========================
// 13. Render Sprites Function
// ========================

// Cache of distance-shaded sprite variants, keyed by image source + brightness bucket.
// Pre-tinting once per (image, brightness) keeps per-frame rendering cheap.
const shadedSpriteCache = {};

function getShadedSprite(img, brightness) {
    // Quantise brightness so we only cache a handful of variants per image
    const bucket = Math.round(brightness * 10) / 10;
    if (bucket >= 1) return img; // Full brightness: just use the original image

    // Canvases (tinted enemies, stairs) carry _cacheKey since they have no .src
    const key = (img._cacheKey || img.src || '') + '@' + bucket;
    if (shadedSpriteCache[key]) return shadedSpriteCache[key];

    const off = document.createElement('canvas');
    off.width = img.naturalWidth || img.width;
    off.height = img.naturalHeight || img.height;
    const octx = off.getContext('2d');

    // Draw the sprite, then darken only its opaque pixels (source-atop respects alpha)
    octx.drawImage(img, 0, 0);
    octx.globalCompositeOperation = 'source-atop';
    octx.fillStyle = 'rgba(0, 0, 0, ' + (1 - bucket) + ')';
    octx.fillRect(0, 0, off.width, off.height);

    shadedSpriteCache[key] = off;
    return off;
}

function renderSprites(zBuffer) {
    const sprites = [];

    // Collect a billboard if it falls within the field of view
    function pushSprite(obj, type, extra) {
        const dx = obj.x - player.x;
        const dy = obj.y - player.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        let angle = Math.atan2(dy, dx) - player.dir;
        while (angle < -Math.PI) angle += 2 * Math.PI;
        while (angle > Math.PI) angle -= 2 * Math.PI;
        if (angle > -player.fov / 2 && angle < player.fov / 2) {
            const s = { type: type, x: obj.x, y: obj.y, distance: distance, angle: angle };
            if (extra) Object.assign(s, extra);
            sprites.push(s);
        }
    }

    enemies.forEach(enemy => { if (enemy.alive) pushSprite(enemy, 'enemy', { enemyRef: enemy }); });
    weapons.forEach(weapon => { if (!weapon.pickedUp) pushSprite(weapon, 'weapon'); });
    healthPotions.forEach(potion => { if (!potion.pickedUp) pushSprite(potion, 'potion'); });

    // Staircases are floor-anchored markers in the world
    if (stairsUp) pushSprite({ x: stairsUp.x + 0.5, y: stairsUp.y + 0.5 }, 'stairsUp');
    if (stairsDown) pushSprite({ x: stairsDown.x + 0.5, y: stairsDown.y + 0.5 }, 'stairsDown');

    // Sort sprites by distance (furthest first)
    sprites.sort((a, b) => b.distance - a.distance);

    // Animation clock (seconds) for idle bob/sway
    const time = performance.now() / 1000;

    sprites.forEach(sprite => {
        // Perpendicular depth (matches the wall z-buffer) used for sizing and occlusion
        let depth = sprite.distance * Math.cos(sprite.angle);
        if (depth < 0.2) depth = 0.2;

        // Horizontal screen position of the sprite's centre
        const spriteScreenX = (canvas.width / 2) * (1 + (Math.sin(sprite.angle) / Math.tan(player.fov / 2)));

        // Full-cell projected size: a 1-unit-tall object spans this many pixels at this depth
        const cellSize = canvas.height / depth;

        // Per-type look: image, how tall it stands, how high it hovers, how it animates
        let img, config;
        if (sprite.type === 'enemy') {
            const t = sprite.enemyRef.type;
            img = t.sprite; // bespoke procedurally-drawn creature
            config = { heightScale: t.scale, lift: 0.0, bobAmp: 0.03, bobSpeed: 7, swayAmp: 0.02, hover: false };
        } else if (sprite.type === 'weapon') {
            img = weaponSprite;
            config = { heightScale: 0.5, lift: 0.18, bobAmp: 0.05, bobSpeed: 3, swayAmp: 0.0, hover: true };
        } else if (sprite.type === 'potion') {
            img = potionSprite;
            config = { heightScale: 0.45, lift: 0.18, bobAmp: 0.05, bobSpeed: 3, swayAmp: 0.0, hover: true };
        } else if (sprite.type === 'stairsUp') {
            img = stairsUpSprite;
            config = { heightScale: 0.85, lift: 0.0, bobAmp: 0.02, bobSpeed: 2.5, swayAmp: 0.0, hover: true };
        } else { // stairsDown
            img = stairsDownSprite;
            config = { heightScale: 0.85, lift: 0.0, bobAmp: 0.02, bobSpeed: 2.5, swayAmp: 0.0, hover: true };
        }

        // Stable per-sprite phase so nearby objects don't animate in lock-step
        const phase = sprite.x * 12.9898 + sprite.y * 78.233;
        const wave = Math.sin(time * config.bobSpeed + phase);
        // Pickups hover up/down; enemies get an upward walking bounce
        const bob = (config.hover ? wave : Math.abs(wave)) * config.bobAmp * cellSize;
        const sway = config.swayAmp ? wave * cellSize * config.swayAmp : 0;

        // Size, preserving the image's aspect ratio so tall art isn't squished
        const srcW = img.naturalWidth || img.width || 1;
        const srcH = img.naturalHeight || img.height || 1;
        const drawHeight = cellSize * config.heightScale;
        const drawWidth = drawHeight * (srcW / srcH);

        // Anchor the bottom of the sprite to the floor line, then apply hover + bob
        const floorY = canvas.height / 2 + cellSize / 2;
        const bottomY = floorY - config.lift * cellSize - bob;
        const drawStartY = bottomY - drawHeight;
        const drawStartX = spriteScreenX - drawWidth / 2 + sway;
        const drawEndX = drawStartX + drawWidth;

        // Off-screen culling
        if (drawEndX < 0 || drawStartX >= canvas.width || bottomY < 0 || drawStartY >= canvas.height) {
            return;
        }

        if ((img.complete !== false) && srcW > 1) { // Images expose .complete; canvases don't
            // Distance shading for depth and atmosphere
            const brightness = Math.max(0.5, Math.min(1, 1 - depth / 16));
            const shaded = getShadedSprite(img, brightness);
            const shadedH = shaded.height;

            // Draw column-by-column so wall edges can partially occlude the sprite
            const startX = Math.max(0, Math.floor(drawStartX));
            const endX = Math.min(canvas.width - 1, Math.ceil(drawEndX));
            for (let x = startX; x <= endX; x++) {
                if (depth >= zBuffer[x]) continue; // Hidden behind a wall at this column
                let texX = Math.floor(((x - drawStartX) / drawWidth) * shaded.width);
                if (texX < 0) texX = 0;
                if (texX >= shaded.width) texX = shaded.width - 1;
                ctx.drawImage(
                    shaded,
                    texX, 0, 1, shadedH,
                    x, drawStartY, 1, drawHeight
                );
            }

            if (sprite.type === 'enemy') {
                drawEnemyHealth(sprite, drawStartX, drawStartY, drawWidth);
            }
        } else {
            // Fallback colour block, still floor-anchored and occlusion-tested at its centre
            const spriteMiddleX = Math.floor(spriteScreenX);
            if (spriteMiddleX >= 0 && spriteMiddleX < canvas.width && depth < zBuffer[spriteMiddleX]) {
                if (sprite.type === 'enemy') ctx.fillStyle = sprite.enemyRef.type.color;
                else if (sprite.type === 'weapon') ctx.fillStyle = 'yellow';
                else if (sprite.type === 'potion') ctx.fillStyle = 'purple';
                else if (sprite.type === 'stairsUp') ctx.fillStyle = '#46e6ff';
                else ctx.fillStyle = '#ff9d3a';
                ctx.fillRect(drawStartX, drawStartY, drawWidth, drawHeight);
            }
        }
    });
}

// ========================
// 14. Function to Draw Enemy Health Indicators
// ========================

function drawEnemyHealth(sprite, drawStartX, drawStartY, spriteWidth) {
    const healthBarWidth = spriteWidth;
    const healthBarHeight = 5; // Thickness of the health bar

    // Use the enemy attached to this sprite
    const enemy = sprite.enemyRef;

    if (enemy) {
        const healthPercent = Math.max(0, Math.min(1, enemy.health / enemy.maxHealth));

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
// 15. Function to Draw the Sword in the Player's View
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
// 16. Handle Player Input and Movement
// ========================

const keys = {};

// Continuous input from on-screen touch controls (mobile).
// move/turn are joystick axes in [-1, 1]; lookDelta accumulates drag-to-turn (radians).
const touchInput = { move: 0, turn: 0, lookDelta: 0 };

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

    // Joystick forward/back (additive, then clamped to walking speed)
    moveStep += touchInput.move * player.speed;
    if (moveStep > player.speed) moveStep = player.speed;
    if (moveStep < -player.speed) moveStep = -player.speed;
    moveStep *= frameScale; // frame-rate independent

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

    // Keyboard + joystick turning (scaled to frame time); drag-to-look is absolute
    let turn = 0;
    if (keys['ArrowLeft'] || keys['KeyA']) turn -= player.turnSpeed;
    if (keys['ArrowRight'] || keys['KeyD']) turn += player.turnSpeed;
    turn += touchInput.turn * player.turnSpeed;
    player.dir += turn * frameScale;
    player.dir += touchInput.lookDelta;
    touchInput.lookDelta = 0; // Consume accumulated drag each frame

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
// 17. Weapon Pickup Function
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
                if (player.sword) {
                    player.swordLevel += 1; // Increase sword power if the player already has one
                    console.log('Sword power increased to:', player.swordLevel);
                } else {
                    player.sword = true; // Assign the sword to the player
                    player.swordLevel = 1; // Start with power level 1
                    console.log('Sword picked up with power level:', player.swordLevel);
                }
                soundManager.playPickupSound(); // Play pickup sound
            }
        }
    });
}

// ========================
// 18. Health Potion Pickup Function
// ========================

function checkHealthPotionPickup() {
    healthPotions.forEach(potion => {
        if (!potion.pickedUp) {
            const dx = player.x - potion.x;
            const dy = player.y - potion.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 0.5) {
                potion.pickedUp = true;
                player.health += potion.healingAmount;
                player.health = Math.min(player.health, 100); // Cap health at 100
                soundManager.playPickupSound(); // Play pickup sound
                console.log('Health Potion picked up! Health:', player.health);
            }
        }
    });
}

// ========================
// 19. Attack Function
// ========================

function attack() {
    if (gameState !== 'running') return; // ignore during story / end screens

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
        // Calculate damage based on sword level
        const damage = 50 * player.swordLevel;
        hitEnemy.health -= damage;
        console.log(`Hit enemy! Damage: ${damage}. Health remaining: ${hitEnemy.health}`);
        if (hitEnemy.health <= 0) {
            hitEnemy.alive = false;
            score += hitEnemy.type.score; // Score scales with enemy type
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
// 20. Mini-Map Function
// ========================

const miniMapScale = 20; // Scale down the map
const miniMapX = 20; // X position on the canvas
const miniMapY = 20; // Y position on the canvas

// Has the player seen the cell containing world-point (wx, wy)?
function isSeen(wx, wy) {
    const cx = Math.floor(wx), cy = Math.floor(wy);
    return seen[cy] && seen[cy][cx];
}

function drawMiniMap() {
    // Draw the map, but only cells the player has already seen (fog of war)
    for (let y = 0; y < mapHeight; y++) {
        for (let x = 0; x < mapWidth; x++) {
            if (!seen[y][x]) {
                ctx.fillStyle = '#111'; // unknown / unexplored
            } else if (map[y][x] === 1) {
                ctx.fillStyle = 'blue';
            } else {
                ctx.fillStyle = 'lightgrey';
            }
            ctx.fillRect(miniMapX + x * miniMapScale, miniMapY + y * miniMapScale, miniMapScale, miniMapScale);
        }
    }

    // Staircases (only once their cell has been seen)
    if (stairsDown && seen[stairsDown.y][stairsDown.x]) {
        ctx.fillStyle = '#ff9d3a';
        ctx.fillRect(miniMapX + stairsDown.x * miniMapScale, miniMapY + stairsDown.y * miniMapScale, miniMapScale, miniMapScale);
    }
    if (stairsUp && seen[stairsUp.y][stairsUp.x]) {
        ctx.fillStyle = '#46e6ff';
        ctx.fillRect(miniMapX + stairsUp.x * miniMapScale, miniMapY + stairsUp.y * miniMapScale, miniMapScale, miniMapScale);
    }

    // Draw player
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.arc(miniMapX + player.x * miniMapScale, miniMapY + player.y * miniMapScale, 5, 0, 2 * Math.PI);
    ctx.fill();

    // Enemies, weapons and potions only show on cells that have been seen
    enemies.forEach(enemy => {
        if (enemy.alive && isSeen(enemy.x, enemy.y)) {
            ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.arc(miniMapX + enemy.x * miniMapScale, miniMapY + enemy.y * miniMapScale, 5, 0, 2 * Math.PI);
            ctx.fill();
        }
    });

    weapons.forEach(weapon => {
        if (!weapon.pickedUp && isSeen(weapon.x, weapon.y)) {
            ctx.fillStyle = 'yellow';
            ctx.beginPath();
            ctx.arc(miniMapX + weapon.x * miniMapScale, miniMapY + weapon.y * miniMapScale, 5, 0, 2 * Math.PI);
            ctx.fill();
        }
    });

    healthPotions.forEach(potion => {
        if (!potion.pickedUp && isSeen(potion.x, potion.y)) {
            ctx.fillStyle = 'purple';
            ctx.beginPath();
            ctx.arc(miniMapX + potion.x * miniMapScale, miniMapY + potion.y * miniMapScale, 5, 0, 2 * Math.PI);
            ctx.fill();
        }
    });
}

// ========================
// 21. Game Over and Level Complete Functions
// ========================

// Reference to HTML elements
// Assuming that gameover.html and levelcomplete.html are handled via redirection,
// these elements might not be present in index.html. If they are handled via overlays,
// ensure to adjust accordingly.
// For this example, we redirect to separate HTML files.

function showGameOver() {
    if (gameState !== 'running') return; // only trigger once
    gameState = 'gameover';
    musicManager.stop();
    localStorage.setItem('finalScore', score);
    // Reveal the in-game death screen with the floor reached and final score
    const floorEl = document.getElementById('deathFloor');
    if (floorEl) floorEl.textContent = currentLevel;
    const scoreEl = document.getElementById('deathScore');
    if (scoreEl) scoreEl.textContent = score;
    const overlay = document.getElementById('deathOverlay');
    if (overlay) overlay.classList.remove('hidden');
}

function showVictory() {
    if (gameState !== 'running') return; // only trigger once
    gameState = 'victory';
    musicManager.stop();
    localStorage.setItem('finalScore', score);
    // Reveal the in-game epilogue with the final score
    const scoreEl = document.getElementById('epilogueScore');
    if (scoreEl) scoreEl.textContent = score;
    const overlay = document.getElementById('epilogueOverlay');
    if (overlay) overlay.classList.remove('hidden');
}

// ========================
// 21b. Stair Transitions
// ========================

// Trigger a floor change when the player stands on a staircase. `lastStairs`
// prevents instantly re-triggering the staircase you just arrived on.
function checkStairs() {
    if (stairsUp) {
        const d = Math.hypot(player.x - (stairsUp.x + 0.5), player.y - (stairsUp.y + 0.5));
        if (d > 1.0 && lastStairs === 'up') lastStairs = null;
        if (d < 0.4 && lastStairs !== 'up') { goToFloor(currentLevel + 1, 'up'); return; }
    }
    if (stairsDown) {
        const d = Math.hypot(player.x - (stairsDown.x + 0.5), player.y - (stairsDown.y + 0.5));
        if (d > 1.0 && lastStairs === 'down') lastStairs = null;
        if (d < 0.4 && lastStairs !== 'down') { goToFloor(currentLevel - 1, 'down'); return; }
    }
}

// ========================
// 22. Game Loop Function
// ========================

let gameLoopId;
let lastFrameTime = 0;
let frameScale = 1; // movement multiplier normalised to 60 fps (frame-rate independence)

function gameLoop(timestamp) {
    if (!texturesLoaded) {
        requestAnimationFrame(gameLoop);
        return;
    }

    // Delta-time scaling so the game runs at the same speed on any refresh rate
    if (timestamp === undefined) timestamp = performance.now();
    if (!lastFrameTime) lastFrameTime = timestamp;
    const dt = timestamp - lastFrameTime;
    lastFrameTime = timestamp;
    frameScale = Math.min(3, Math.max(0, dt / (1000 / 60))); // clamp to avoid tunneling

    if (gameState === 'running') {
        movePlayer();

        // Update enemies
        enemies.forEach(enemy => enemy.update());

        // Check for weapon and health potion pickups
        checkWeaponPickup();
        checkHealthPotionPickup();

        // Handle sword attack animation
        if (isAttacking) {
            attackFrame += frameScale;
            if (attackFrame >= maxAttackFrames) {
                isAttacking = false; // Reset after animation completes
            }
        }

        // Progression is by finding stairs now, not by clearing the floor
        checkStairs();

        // Victory: the dragon on the top floor has been slain
        if (currentLevel === bossLevel && enemies.length && enemies.every(e => !e.alive)) {
            showVictory();
        }

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw ceiling — alien void above a vaulted hall (deep indigo fading to eerie teal)
        const ceilGrad = ctx.createLinearGradient(0, 0, 0, canvas.height / 2);
        ceilGrad.addColorStop(0, '#070611');
        ceilGrad.addColorStop(0.7, '#160e2a');
        ceilGrad.addColorStop(1, '#22383a');
        ctx.fillStyle = ceilGrad;
        ctx.fillRect(0, 0, canvas.width, canvas.height / 2);

        // Draw floor — mossy alien stone (dark at the horizon, lighter underfoot)
        const floorGrad = ctx.createLinearGradient(0, canvas.height / 2, 0, canvas.height);
        floorGrad.addColorStop(0, '#0e1214');
        floorGrad.addColorStop(1, '#33433a');
        ctx.fillStyle = floorGrad;
        ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);

        // Eerie mist glowing along the horizon line
        const horizon = canvas.height / 2;
        const glow = ctx.createLinearGradient(0, horizon - 28, 0, horizon + 28);
        glow.addColorStop(0, 'rgba(60,120,110,0)');
        glow.addColorStop(0.5, 'rgba(70,140,125,0.16)');
        glow.addColorStop(1, 'rgba(60,120,110,0)');
        ctx.fillStyle = glow;
        ctx.fillRect(0, horizon - 28, canvas.width, 56);

        // Render walls and sprites
        castRays();

        // Draw the sword if picked up
        drawSword();

        // Draw the mini-map
        drawMiniMap();

        // HUD
        const aliveCount = enemies.reduce((c, e) => c + (e.alive ? 1 : 0), 0);
        ctx.fillStyle = 'white';
        ctx.font = '20px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('Floor: ' + currentLevel + ' / ' + maxLevel, 20, 225);
        ctx.fillText('Health: ' + Math.floor(player.health), 20, 250);
        ctx.fillText('Score: ' + score, 20, 275);
        ctx.fillText('Sword Lv: ' + player.swordLevel, 20, 300);
        ctx.fillText('Enemies: ' + aliveCount, 20, 325);

        // Transient banner shown just after entering a floor
        if (floorBanner && performance.now() < floorBanner.until) {
            ctx.save();
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.font = 'bold 32px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(floorBanner.text, canvas.width / 2, canvas.height * 0.22);
            ctx.restore();
        }
    }

    // Continue the game loop
    gameLoopId = requestAnimationFrame(gameLoop);
}

// ========================
// 23. Initialize a New Run (start on Floor 1)
// ========================

function startGame() {
    currentLevel = 1;
    score = 0;
    player.health = 100;
    player.sword = false;
    player.swordLevel = 1;
    playerWeapon = null;
    goToFloor(1, 'start');
}

startGame();

// ========================
// 23b. Story Screens (intro + epilogue)
// ========================

function setupStory() {
    const beginBtn = document.getElementById('beginButton');
    const playAgainBtn = document.getElementById('playAgainButton');
    const storyOverlay = document.getElementById('storyOverlay');

    // Unlock Web Audio on the first user gesture. iOS/WebKit (Safari AND Chrome
    // on iOS) needs an actual buffer played inside the gesture, not just resume().
    function unlockAudio() {
        const ac = soundManager.audioCtx;
        try {
            if (ac.state === 'suspended' && ac.resume) ac.resume();
            if (!unlockAudio.done) {
                const src = ac.createBufferSource();
                src.buffer = ac.createBuffer(1, 1, 22050); // 1-sample silent buffer
                src.connect(ac.destination);
                src.start(0);
                unlockAudio.done = true;
            }
        } catch (e) { /* ignore */ }
    }
    ['pointerdown', 'keydown', 'touchstart', 'touchend'].forEach(function (ev) {
        window.addEventListener(ev, unlockAudio);
    });

    if (beginBtn) {
        beginBtn.addEventListener('click', function () {
            if (storyOverlay) storyOverlay.classList.add('hidden');
            // The tap is a user gesture: unlock audio (incl. iOS), start music, play
            unlockAudio();
            musicManager.start(currentLevel === bossLevel ? 'boss' : 'exploration');
            floorBanner = { text: 'Floor 1', until: performance.now() + 1800 };
            gameState = 'running';
        });
    }

    // Both "Play Again" (epilogue) and "Rise Again" (death) reset via reload,
    // which cleanly rebuilds all floor state and shows the intro again.
    const restartBtn = document.getElementById('restartButton');
    [playAgainBtn, restartBtn].forEach(function (btn) {
        if (btn) btn.addEventListener('click', function () { window.location.reload(); });
    });
}

setupStory();

// ========================
// 24. Start the Game Loop
// ========================

gameLoop();

// ========================
// 25. Handle Page Resize
// ========================

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
// iOS reports new dimensions slightly after orientationchange fires
window.addEventListener('orientationchange', function() {
    resizeCanvas();
    setTimeout(resizeCanvas, 300);
});

// ========================
// 26. On-Screen Touch Controls (Mobile)
// ========================

function setupTouchControls() {
    const controls = document.getElementById('touchControls');
    const joystick = document.getElementById('joystick');
    const thumb = document.getElementById('joystickThumb');
    const lookArea = document.getElementById('lookArea');
    const attackBtn = document.getElementById('attackButton');
    if (!controls || !joystick || !thumb || !lookArea || !attackBtn) return;

    // Only surface the controls on touch-capable devices; desktop keeps keyboard only
    const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
    if (!isTouch) return;
    controls.classList.remove('hidden');

    // --- Virtual joystick: vertical = move, horizontal = turn ---
    const maxRadius = 55; // px of thumb travel mapped to full axis deflection
    let joyId = null;

    function joyUpdate(e) {
        const rect = joystick.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        let dx = e.clientX - cx;
        let dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        if (dist > maxRadius) {
            dx = (dx / dist) * maxRadius;
            dy = (dy / dist) * maxRadius;
        }
        thumb.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)';
        touchInput.turn = dx / maxRadius;   // right = turn right
        touchInput.move = -dy / maxRadius;  // up = move forward
    }
    joystick.addEventListener('pointerdown', function(e) {
        joyId = e.pointerId;
        joystick.setPointerCapture(e.pointerId);
        joyUpdate(e);
        e.preventDefault();
    });
    joystick.addEventListener('pointermove', function(e) {
        if (e.pointerId !== joyId) return;
        joyUpdate(e);
        e.preventDefault();
    });
    function joyEnd(e) {
        if (e.pointerId !== joyId) return;
        joyId = null;
        thumb.style.transform = 'translate(0px, 0px)';
        touchInput.move = 0;
        touchInput.turn = 0;
    }
    joystick.addEventListener('pointerup', joyEnd);
    joystick.addEventListener('pointercancel', joyEnd);

    // --- Drag anywhere on the right to turn/look ---
    const lookSensitivity = 0.005; // radians per pixel dragged
    let lookId = null;
    let lastX = 0;
    lookArea.addEventListener('pointerdown', function(e) {
        lookId = e.pointerId;
        lastX = e.clientX;
        lookArea.setPointerCapture(e.pointerId);
        e.preventDefault();
    });
    lookArea.addEventListener('pointermove', function(e) {
        if (e.pointerId !== lookId) return;
        touchInput.lookDelta += (e.clientX - lastX) * lookSensitivity;
        lastX = e.clientX;
        e.preventDefault();
    });
    function lookEnd(e) {
        if (e.pointerId !== lookId) return;
        lookId = null;
    }
    lookArea.addEventListener('pointerup', lookEnd);
    lookArea.addEventListener('pointercancel', lookEnd);

    // --- Attack button ---
    attackBtn.addEventListener('pointerdown', function(e) {
        e.preventDefault();
        attack();
    });
}

setupTouchControls();
