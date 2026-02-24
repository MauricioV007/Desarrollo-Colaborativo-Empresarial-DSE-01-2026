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

// RENDERIZAR PRODUCTOS EN EL DOM
function renderizarProductos() {
  const tbody = document.getElementById("tablaProductos");
  const sinProductos = document.getElementById("sinProductos");
  tbody.innerHTML = "";

  if (productos.length === 0) {
    sinProductos.classList.remove("d-none");
    return;
  }

  sinProductos.classList.add("d-none");

  productos.forEach((p, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${index + 1}</td>
      <td>${p.nombre}</td>
      <td>${p.categoria}</td>
      <td>$${parseFloat(p.precio).toFixed(2)}</td>
      <td>${p.stock}</td>
    `;
    tbody.appendChild(fila);
  });
}

// VALIDACIÓN DE CAMPOS
function validarCampos(nombre, categoria, precio, stock) {
  if (!nombre || !categoria || !precio || !stock) {
    return "Todos los campos son obligatorios.";
  }
  if (isNaN(precio) || parseFloat(precio) <= 0) {
    return "El precio debe ser un número mayor a 0.";
  }
  if (isNaN(stock) || parseInt(stock) < 0) {
    return "El stock debe ser un número igual o mayor a 0.";
  }
  return null;
}

// EVENTO SUBMIT DEL FORMULARIO
document.getElementById("formProducto").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const categoria = document.getElementById("categoria").value.trim();
  const precio = document.getElementById("precio").value.trim();
  const stock = document.getElementById("stock").value.trim();
  const mensajeError = document.getElementById("mensajeError");

  const error = validarCampos(nombre, categoria, precio, stock);

  if (error) {
    mensajeError.textContent = error;
    mensajeError.classList.remove("d-none");
    return;
  }

  mensajeError.classList.add("d-none");
  agregarProducto(nombre, categoria, precio, stock);
  this.reset();
});

// Renderizar productos al cargar la página
renderizarProductos();



