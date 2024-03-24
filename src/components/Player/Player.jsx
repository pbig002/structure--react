import { useState } from "react";
export default function Player({ initialName, symbol }) {
  useState();
  const [isEditing, setIsEditing] = useState(false);
  function handleEditingClick() {
    setIsEditing((editing) => !editing);
  }
  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" required defaultValue={name} />;
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditingClick}>
        {isEditing ? "Save" : "Editing"}
      </button>
    </li>
  );
}
