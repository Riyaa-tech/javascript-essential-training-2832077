/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const bottle = {
  name: "Water-Bottle",
  volume: 1000,
  color: "orange",
  capStatus: false,
  cap: {
    shape: "round",
    color: "red",
  }
  changeStatus: function(capStatus)
    {
      if(capStatus)
      {
        capStatus = !capStatus;
        return "Now the bottle is closed";
      }
      else
      {
        capStatus = !capStatus;
        return "Now the bottle is opened";
      }
    },
};
