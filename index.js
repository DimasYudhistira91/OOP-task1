// OBJECT LITERALS

// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1
//   },
//   draw: function () {
//     console.log('draw');
//   }
// };

// circle.draw();


// FACTORIES
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1
//   }
// };

// const circle = {
//   radius: 2,
//   location: {
//     x: 2,
//     y: 2
//   }
// };
// circle.draw();

// DIRINGKAS menggunakan factories / constructor:
// Factory Function:

 function createCircle(radius) {
   return {
     radius,
     draw: function() {
       console.log('draw');
     }
   };
 }
 const circle = createCircle(1);
 circle.draw();

//  Constructor Function:
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
const another = new Circle(1);