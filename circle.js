import Point from './Point.js';

export default function(center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      if ((Point.x - Circle.x) * (Point.x = Circle.x) + (Point.y - Circle.y) * (Point.y - Circle.y) <= radius * radius)
      {
          return true;
      }
      else
      {
          return false;
      }
    }
  }
}