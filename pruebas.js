import {productoss, productosManagement } from "./producto.js";
let p1 = new productoss("pollo", 'pollo sofia', 20);
let p2 = new productoss('galletas', 'galletas mabel', 50);
let p3 = new productoss("pollo", 'pollo imba', 50);
let manager = new productosManagement();
manager.addproductos(p1);
manager.addproductos(p2);
//manager.addproductos(p3);
// manager.removeproductos(p1);
manager.updateproductos(p1, p3);
console.log(manager.showproductos());
 