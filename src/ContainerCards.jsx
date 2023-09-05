import { Card } from "./cards";
import "./ContainerCards.css";
var imagenes = [
  "src/assets/image1.jpeg",
  "src/assets/image2.jpeg",
  "src/assets/image3.jpeg",
  "src/assets/image4.jpeg",
  "src/assets/image5.jpeg",
  "src/assets/image6.jpeg",
];

export function ContainerCards() {
  return (
    <div id="container-cards">
      {imagenes.map((img, index) => {
        console.log(img);
        return <Card imagen={img} key={index}></Card> ;
      })}
      {imagenes.map((img, index) => {
        console.log(img);
        return <Card imagen={img} key={index}></Card> ;
      })}
    </div>
  );
}
