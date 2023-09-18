import React, { useState } from "react";

import "./Cards.css";
export function Card({ imagen }) {
  var imagenTrasera = "src/assets/card-back.jpeg";
  const [flipped, setFlipped] = useState(false);
  const handleClick = () => {
    setFlipped(!flipped);
  };
  console.log(imagen);
  return (
    <div className="card-container">
      <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleClick}>
        <div className="card-front">
          {/* Contenido de la cara frontal */}
          <img src={imagen} alt="Imagen" />
        </div>
        <div className="card-back">
          <img src={imagenTrasera} alt="Imagen trasera" />
        </div>
      </div>
    </div>
  );
}
