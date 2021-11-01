import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const filterRedFruits = fruits.filter((fruit) => {
    return fruit.color === "red";
  });

  const totalPrice = fruits.reduce((valorAnterior, valorAtual) => {
    return valorAtual.price + valorAnterior;
  }, 0);

  return (
    <div className="App">
      <header className="App-header">
        <span>Preço total = {totalPrice}</span>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit.name}</li>
          ))}
        </ul>
        <button
          style={{
            backgroundColor: "rebeccapurple",
            color: "white",
            border: "none",
            borderRadius: "12px",
            width: "200px",
            height: "40px",
            cursor: "pointer",
          }}
          onClick={() => {
            setFruits(filterRedFruits);
          }}
        >
          Mostrar frutas vermelhas
        </button>
      </header>
    </div>
  );
}

export default App;
