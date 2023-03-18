import App from "../App";
import { useState } from "react";
export default function IslandForm({ select, setCounter, island, counter }) {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const changed1 = (event) => {
    setname(event.target.value);
  };
  const changed2 = (event) => {
    setphone(event.target.value);
  };
  function toConfirm() {
    const confirmed = window.confirm(
      `Are you sure you want to book to ${island.name} with the Name:${name}, phone:${phone}`
    );
    if (confirmed) {
      window.alert("confirmed");
      const newIsland = counter.map((x) => {
        if (x.id == island.id) {
          x.visitors += 1;
        }
        return x;
      });
      setCounter(newIsland);
    } else {
      window.alert("thank you");
    }
  }
  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input value={name} onChange={changed1} placeholder="Type Full Name" />
      <input
        value={phone}
        onChange={changed2}
        type="number"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{5}"
        placeholder="Type Phone Number"
      />
      <button className="book" onClick={toConfirm}>
        Book for today!
      </button>
    </div>
  );
}
