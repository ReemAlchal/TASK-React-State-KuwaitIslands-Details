import React from "react";
import App from "../App";
import IslandList from "./IslandList";
export default function Island({ setIsland, island, counter }) {
  function clicked() {
    setIsland(island);
  }
  return (
    <div onClick={clicked} className="Island">
      <h3>{island.name}</h3>
      {/* YOU HAVE TO CHANGE THE VISITORS COUNT */}
      <p>Visitors {island.visitors}</p>
      <img src={island.img} alt={island.name} />
    </div>
  );
}
