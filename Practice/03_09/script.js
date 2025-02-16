/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  updateName: function (name) {
    this.name = name;
    console.log("Updated name is: ", this.name);
  },
  changeVolume: function (volume) {
    this.volume = volume;
    console.log("Changed volume is: ", this.volume);
  },
  changeColor: function (color) {
    this.color = color;
    console.log("Changed color is: ", this.color);
  },
  updatePockets: function (pocketNum) {
    this.pocketNum = pocketNum;
    console.log("Updated number of pockets is: ", this.pocketNum);
  },
};
