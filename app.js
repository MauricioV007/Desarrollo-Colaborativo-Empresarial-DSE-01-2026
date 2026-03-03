// CLASE PRODUCTO
class Producto {
    constructor(id, nombre, precio, categoria, descripcion, estado) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.estado = estado;
    }
}

// ARRAY DE PRODUCTOS (datos iniciales)
const productos = [
    new Producto(1, "Laptop Gaming", 1299.99, "Electrónicos", "Gaming laptop con RTX 3060", "Activo"),
    new Producto(2, "iPhone 14 Pro", 999.00, "Electrónicos", "128GB Deep Purple", "Activo"),
    new Producto(3, "Mesa de comedor", 299.99, "Hogar", "Madera maciza 6 sillas", "Activo"),
    new Producto(4, "Cafetera Nespresso", 149.99, "Hogar", "Modelo Vertuo", "Inactivo"),
    new Producto(5, "Silla gamer", 249.99, "Hogar", "Ergonómica RGB", "Activo")
];

let contadorId = productos.length + 1;

//Array categorias

const categorias = [
    "Electrónicos",
    "Ropa", 
    "Hogar",
    "Deportes",
    "Libros"
];

// FUNCIÓN PARA AGREGAR PRODUCTO ACTUALIZADO!!!! (2.0)
function agregarProducto(nombre, precio, categoria, descripcion, estado) {
    const id = productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1;
    const nuevoProducto = new Producto(id, nombre, precio, categoria, descripcion, estado);
    productos.push(nuevoProducto);
    renderizarProductos();
    mostrarAlerta('Producto agregado correctamente', 'success');
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

// VALIDACIÓN DE CAMPOS ACTUALIZADA (2.0)
function validarCampos(nombre, precio, categoria, descripcion, estado) {
    if (!nombre || nombre.trim().length < 2) {
        mostrarAlerta('El nombre debe tener al menos 2 caracteres', 'error');
        return false;
    }
    if (!precio || precio <= 0) {
        mostrarAlerta('El precio debe ser mayor a 0', 'error');
        return false;
    }
    if (!categoria) {
        mostrarAlerta('Selecciona una categoría', 'error');
        return false;
    }
    if (!descripcion || descripcion.trim().length < 10) {
        mostrarAlerta('La descripción debe tener al menos 10 caracteres', 'error');
        return false;
    }
    return true;
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



