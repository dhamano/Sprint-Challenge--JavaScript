// 1. Copy and paste your prototype in here and refactor into class syntax.
/*
function CuboidMaker(atts) {
  this.length = atts.length;
  this.width = atts.width;
  this.height = atts.width;
}
CuboidMaker.prototype.getVolume = function() { return this.length * this.width * this.height; };
CuboidMaker.prototype.getSurfaceArea = function() { return 2 * (this.length * this.width + this.length * this.height + this.width * this.height); };
//*/
class CuboidMaker {
  /**
   * 
   * @constructor
   * @param {Object} atts
   * @param {number} atts.length
   * @param {number} atts.width
   * @param {number} atts.height
   * 
   */
  constructor(atts) {
    this.length = atts.length;
    this.width = atts.width;
    this.height = atts.width;
  }
  volume() { return this.length * this.width * this.height; };
  surfaceArea() { return 2 * (this.length * this.width + this.length * this.height + this.width * this.height); };
}

const cuboid = new CuboidMaker({ length: 4, width: 5, height: 5 });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
// Find out the formulas for volume and surface area for cubes and create those methods
// using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  /**
   * 
   * @param {Object} sideLength
   * @param {number} sideLength.sideLength
   * 
   */
  constructor(sideLength) {
    console.log(sideLength);
    if(typeof(sideLength) === "object") {
      super({ length: sideLength.sideLength, width: sideLength.sideLength, height: sideLength.sideLength });
    } else {
      super({ length: sideLength, width: sideLength, height: sideLength });
    }
  }
  cubeVolume() { return Math.pow(this.length, 3); };
  cubeSurfaceArea() { return 6*Math.pow(this.length, 2); };
}

const cube = new CubeMaker(5);
const cube2 = new CubeMaker({sideLength: 5});
console.log(cube);
console.log(cube2);
console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());