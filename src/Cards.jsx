import "./Cards.css";
export function Card({imagen}) {
  console.log(imagen);
  return (
    <div className="card">
      <img src={imagen} alt="Imagen" />
    </div>
  );
}
