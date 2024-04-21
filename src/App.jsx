import "./App.css";
import { useState } from "react";
import Player from "./components/Player/Player.jsx";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import Log from "./components/Log/Lop.jsx";
function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurn, setGameTurn] = useState([]);
  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurn((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updateTurn = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];
      return updateTurn;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {/* <li> */}
          <Player
            initialName="PLayer 1"
            symbol="X"
            isActive={activePlayer === "X"}
          ></Player>
          <Player
            initialName="PLayer 2"
            symbol="O"
            isActive={activePlayer === "O"}
          ></Player>
          {/* </li> */}
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
        <Lop></Lop>
      </div>
    </main>
  );
}

export default App;
