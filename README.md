# Overtaken - A 3d Maze Game

![Game Banner](./docs/Overtaken%20-%20A%203d%20Maze%20Game.png)

**Play the game** - [https://fraher.github.io/3d_maze_game/](https://fraher.github.io/3d_maze_game/)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [How to Play](#how-to-play)
- [Game Controls](#game-controls)
- [Project Structure](#project-structure)
- [Credits](#credits)
- [License](#license)

## Overview

Welcome to the **3D Maze Game**, an immersive browser-based game. The game is a castle of **11 floors**: you start at the bottom and must **explore each floor to find the staircase up**. You can always climb back down the way you came. Each floor introduces a new type of enemy (floor 1 has 1 type, floor 2 has 2, and so on), and enemies persist between visits — they are never refreshed unless you kill them. Reach the top floor to face a massive **alien dragon** in its lair.

## Features

- **A Castle of 11 Floors**: Climb floor by floor by finding the staircase up; descend any time the way you came.
- **Find the Stairs**: Progression is exploration-based — locate the up-staircase rather than clearing the floor.
- **Escalating Enemy Variety**: Each floor introduces another enemy type (floor N has N types), with escalating stats.
- **Persistent Enemies**: Enemies are generated once per floor and never refreshed — survivors stay exactly where you left them when you return.
- **Boss Fight**: The top floor is one large open lair holding a single massive alien dragon.
- **Fog-of-War Mini-Map**: The map only reveals areas you have actually seen as you explore.
- **Weapon System & Power-Ups**: Pick up and wield a sword; collecting more swords increases its power.
- **Health Potions**: Collect potions to restore health during your journey.
- **Sound Effects**: Dynamic sound effects generated using the Web Audio API — no external audio files.
- **Health Indicators**: Monitor both your health and enemy health through visual indicators.
- **Mobile & Responsive**: Play on phone, tablet or desktop, with on-screen touch controls on touch devices.
- **Game Over & Victory Screens**: Clear feedback with options to restart or proceed.

## Demo

![Watch the Game](./docs/game_play2.gif)

## Technologies Used

- **HTML5**: Structuring the game interface.
- **CSS3**: Styling and responsive design.
- **JavaScript (ES6)**: Game logic, raycasting, rendering, and audio management.
- **Web Audio API**: Generating dynamic sound effects.
- **Canvas API**: Rendering the 3D environment and sprites.

## Installation

To get started with the **3D Maze Game**, follow the steps below:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/fraher/3d-maze-game.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd 3d-maze-game
   ```

3. **Run a Local Server**

   Since the game utilizes assets like images, it's recommended to run it on a local server to avoid CORS issues.

   - **Using Python's SimpleHTTPServer**

     ```bash
     # For Python 3.x
     python -m http.server 8000
     ```

     Open your browser and navigate to `http://localhost:8000`.

   - **Using VS Code Live Server Extension**

     - Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
     - Open the project in VS Code.
     - Right-click on `index.html` and select **"Open with Live Server"**.

## How to Play

Embark on a climb through an 11-floor castle. On each floor, explore the maze to **find the staircase up** — you do not need to defeat every enemy to progress, and you can always head back down the stairs you came up. Collect health potions and gather swords to grow stronger, manage your health across floors, and reach the top floor to defeat the alien dragon and achieve victory!

## Game Controls

Master the controls to maneuver through the maze and engage enemies effectively.

- **Movement**
  - **W / Arrow Up**: Move Forward
  - **S / Arrow Down**: Move Backward
  - **A / Arrow Left**: Turn Left
  - **D / Arrow Right**: Turn Right

- **Combat**
  - **Spacebar**: Attack with Sword (must pick up first)
 
- **Pick Up Item**
  - Walk through item to pick it up.

- **Change Floors**
  - Walk onto a glowing **staircase** to use it: the blue (up) stair climbs to the next floor; the orange (down) stair returns you to the previous one.

- **Mobile / Touch**
  - **Left joystick**: move (up/down) and turn (left/right).
  - **Drag on the right** of the screen to turn/look.
  - **Attack button** (bottom-right) to swing your sword.

- **Additional**
  - **Click to Focus**: Click anywhere on the game canvas to focus and enable keyboard controls.

## Project Structure

Here's an overview of the project's file structure:

```
3d-maze-game/
├── index.html
├── gameover.html
├── levelcomplete.html   (legacy, no longer used)
├── game.js
├── styles.css
├── README.md
└── textures/
    ├── wall.png
    ├── wall_128.png
    ├── wall_64.png
    ├── wall_32.png
    ├── wall_16.png
    ├── weapon.png
    ├── sword.png
    ├── potion.png
```

- **index.html**: The main game page where gameplay occurs.
- **gameover.html**: Displayed when the player dies or wins, showing the final score and an option to restart.
- **levelcomplete.html**: Legacy screen from the original level system; no longer used now that floors transition in place (kept for reference).
- **game.js**: Contains all the game logic — raycasting/rendering, player and touch controls, enemy behavior, the floor/stairs system, and the procedurally-drawn creatures, dragon boss, and staircases.
- **styles.css**: Styles for the game, overlays, and on-screen touch controls.
- **textures/**: Wall and item images. Enemies, the dragon, and staircases are drawn procedurally in code (no sprite files); the old `enemy.png` is retained but unused.

## Credits

This README, game,and graphics were 95% generated using GPT-4, GPT-4-turbo, and GPT-o1-mini.

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contribution

Contributions are welcome! If you'd like to enhance the game, fix bugs, or add new features, feel free to open an issue or submit a pull request.

1. **Fork the Repository**
2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m "Add Your Feature"
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request**

---

**Enjoy navigating the 3D mazes and conquering all challenges! Good luck! 🚀**
