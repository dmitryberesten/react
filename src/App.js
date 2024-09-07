import React from "react";
import "./App.css";

function App() {
  const myName = "Діма";
  const imageUrl = "https://via.placeholder.com/150";
  const imageAlt = "Опис зображення";

  const favoriteSite = {
    name: "Google",
    url: "https://www.google.com/",
  };

  const number1 = 5;
  const number2 = 7;

  const sum = number1 + number2;

  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Привіт, {myName}</h1>
        <p>Ласкаво просимо до нашого сайту!</p>
        <img src={imageUrl} alt={imageAlt} />
        <p>Мій улюблений сайт: <a href={favoriteSite.url}>{favoriteSite.name}</a></p>
        <p>Сума чисел {number1} та {number2} дорівнює {sum}</p>
        <ul>
          {colors.map((color, index) => (
            <li key={index}>{color}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
