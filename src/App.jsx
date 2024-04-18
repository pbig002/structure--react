import "./App.css";
import Player from "./components/Player/Player.jsx";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {/* <li> */}
          <Player initialName="PLayer 1" symbol="X"></Player>
          <Player initialName="PLayer 2" symbol="O"></Player>
          {/* </li> */}
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
