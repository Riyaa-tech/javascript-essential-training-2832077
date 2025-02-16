/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

class stationary {
  constructor (price, color, shape) {
    this.price = price;
    this.color = color;
    this.shape = shape;
  }
}
const book = new stationary (45, "blue", "rectangle");
const pen = new stationary (10, "black", "cylindrical");
const eraser = new stationary (5, "white", "square");

const main = document.querySelector(".maincontent");

const content = `
  <article class = "itemlist">
    <ol>
      <li class = "item">
        <h1>Book</h1>
        <ul>
          <li>${book.price}</li>
          <li>${book.color}</li>
          <li>${book.shape}</li>
        </ul>
      </li>
      <li class = "item">
        <h1>Pen</h1>
        <ul>
          <li>${pen.price}</li>
          <li>${pen.color}</li>
          <li>${pen.shape}</li>
        </ul>
      </li>
      <li class = "item">
        <h1>Eraser</h1>
        <ul>
          <li>${eraser.price}</li>
          <li>${eraser.color}</li>
          <li>${eraser.shape}</li>
        </ul>
      </li>
    </ol>
  </article>
`;

main.innerHTML = content;
