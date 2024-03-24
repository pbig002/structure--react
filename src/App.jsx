import "./App.css";
import Player from "./components/Player/Player.jsx";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {/* <li> */}
          <Player name="PLayer 1" symbol="X"></Player>
          <Player name="PLayer 2" symbol="O"></Player>
          {/* </li> */}
        </ol>
        GAME BOaRD
      </div>
    </main>
  );
}

export default App;
