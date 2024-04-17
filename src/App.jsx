import "./App.css";
import Player from "./components/Player/Player.jsx";
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
        GAME BOARD
      </div>
    </main>
  );
}

export default App;
