
# Dicemaster Game

Welcome to **Dicemaster**, an exciting dice game built using **Vite** and **React.js**! In this game, you will choose a number box and roll a dice. If the number you selected matches the dice roll, your score will increase by that number. If not, you'll lose 1 point from your current score.

## Features

- **Vite + React.js for Game Logic**: The core functionality, including random number generation, score updates, and game logic, is powered by Vite and React.js.
- **Score Persistence**: High scores are saved using **local storage** so you can keep track of your progress across sessions.
- **Interactive UI**: A sleek, responsive interface built with **Material UI**. Includes elements like buttons to reset the score and view game rules.
- **Game Rules**: A dedicated button to display instructions on how to play the game.

## How to Play

1. **Choose a Number Box**: At the start of the game, you will be presented with several number boxes. Choose one.
2. **Roll the Dice**: Once you've selected a number, click the roll button to roll the dice.
3. **Score Update**:
   - If the dice shows the same number as the one you chose, your score will increase by that number.
   - If not, you will lose 1 point.
4. **Reset**: You can reset your score at any time by clicking the **Reset** button.
5. **View Rules**: Need help understanding how to play? Click on the **Rules** button to view the instructions.

## Live Deployment

You can play the game directly from the live deployment here: [Dicemaster Game - Live Demo](https://dicemaster1.netlify.app/)

## Getting Started

### Prerequisites

To get the game up and running locally, you'll need to have **Node.js** installed on your machine.

1. Install [Node.js](https://nodejs.org/) if you haven't already.
2. Clone the repository:

```bash
git clone https://github.com/Sonalika262/DiceMaster.git
cd DiceMaster
```

3. Install dependencies using npm (or yarn):

```bash
npm install
# or if you prefer yarn:
# yarn install
```

4. Start the development server:

```bash
npm run dev
```

The game will be live at `http://localhost:3000` in your browser.

## Technologies Used

- **Vite**: For fast and modern development setup.
- **React.js**: For building the game logic and components.
- **Material UI**: For a responsive and modern user interface.
- **Local Storage**: To store and persist high scores across game sessions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the React.js, Vite, and Material UI communities for their incredible libraries that made this game possible!
- Special thanks to the open-source community for all the helpful resources.

---

Enjoy the game and may the dice be in your favor!
