/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class electronic_gadgets {
  constructor (date, model, batteryCapacity, dataStorge)
  {
    this.date = date,
    this.model = model,
    this.batteryCapacity = batteryCapacity,
    this.dataStorage = dataStorage,
  },

  findAge: function ()
  {
    let now = new Date();
    let launch = new Date(this.date);
    let elapsed = now - launch;
    let yearsSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24 * 7 * 52));
    return yearsSinceAcquired;
 
}

const mobile = new electronic_gadgets (
  "December 5, 2018 15:00:00 PST",
  "Samsung",
  7,
  32,
)

console.log("Mobile object: ", mobile);
console.log("Date of launch: ",mobile.date);
console.log("Model: ", mobile.model);
console.log("Battery capacity(in hours): ", mobile.batteryCapacity);
console.log("Data Storage(in GB): ", mobile.dataStorage);
console.log("Device age: ", mobile.findAge());

const laptop = new electronic_gadgets (
  "March 25, 2021 15:00:00 PST",
  "HP",
  4, 
  500,
)

console.log("\nLaptop object: ", laptop);
console.log("Date of launch: ",laptop.date);
console.log("Model: ", laptop.model);
console.log("Battery capacity(in hours): ", laptop.batteryCapacity);
console.log("Data Storage(in GB): ", laptop.dataStorage);
console.log("Device age: ", laptop.findAge());
