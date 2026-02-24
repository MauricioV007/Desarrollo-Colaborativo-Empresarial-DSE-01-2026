// CLASE PRODUCTO
class Producto {
  constructor(id, nombre, categoria, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.stock = stock;
  }
}
// ARRAY DE PRODUCTOS (datos iniciales)
let productos = [
  new Producto(1, "Laptop HP", "Electrónica", 799.99, 5),
  new Producto(2, "Mouse Inalámbrico", "Accesorios", 25.99, 20),
  new Producto(3, "Teclado Mecánico", "Accesorios", 59.99, 15),
];
let contadorId = productos.length + 1;
// FUNCIÓN PARA AGREGAR PRODUCTO
function agregarProducto(nombre, categoria, precio, stock) {
  const nuevoProducto = new Producto(
    contadorId++,
    nombre,
    categoria,
    parseFloat(precio),
    parseInt(stock)
  );
  productos.push(nuevoProducto);
  renderizarProductos();
}
