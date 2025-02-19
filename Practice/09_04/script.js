/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */
const cell = document.querySelector(".cell");
const grid = document.querySelector(".grid");

grid.addEventListener(
  "mouseenter",
  () => {
    grid.classList.add("coloredgrid");
  },
  false
);

grid.addEventListener(
  "mouseleave",
  () => {
    grid.classList.remove("coloredgrid");
  },
  false
);

cell.addEventListener(
  "mouseenter",
  () => {
    cell.classList.add("coloredcell");
  },
  false
);

cell.addEventListener(
  "mouseleave",
  () => {
    cell.classList.remove("coloredcell");
  },
  false
);

cell.addEventListener(
  "click",
  () => {
    cell.classList.toggle("bgcolorset");
  },
  false
);

document.addEventListener(
  "keypress",
  () => {
    if (event.key === 'Enter')
    {
      document.body.style.backgroundColor = (document.body.style.backgroundColor === "white" ? 
                document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "white");
    }
  },
  false
);
