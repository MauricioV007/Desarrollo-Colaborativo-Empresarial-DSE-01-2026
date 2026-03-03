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

let idEditando = null;

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
      <td><span class="badge bg-primary">${p.categoria}</span></td>
      <td>$${parseFloat(p.precio).toFixed(2)}</td>
      <td>${p.descripcion.substring(0, 30)}...</td>
      <td><span class="badge ${p.estado === 'Activo' ? 'bg-success' : 'bg-danger'}">${p.estado}</span></td>
      <td>
        <button class="btn btn-warning btn-sm me-2" onclick="editarProducto(${p.id})">
          <i class="fas fa-edit"></i>
        </button>
      </td>
    `;
    tbody.appendChild(fila);
  });
}

 // Se agregó funcion de Agregar Productos
function editarProducto(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        document.getElementById('nombre').value = producto.nombre;
        document.getElementById('precio').value = producto.precio;
        document.getElementById('categoria').value = producto.categoria;
        document.getElementById('descripcion').value = producto.descripcion;
        document.getElementById('estado').value = producto.estado;
        document.getElementById('btnSubmit').textContent = 'Actualizar Producto';
        idEditando = id;
        mostrarSeccion('crear');
    }
}

// FUNCION DE MOSTRAR SECCIÓN ACTUALIZADA

function mostrarSeccion(seccion) {
    // Ocultar todas las secciones
    document.querySelectorAll('.seccion').forEach(s => s.classList.remove('activa'));
    // Mostrar sección seleccionada
    document.getElementById('seccion' + seccion.charAt(0).toUpperCase() + seccion.slice(1)).classList.add('activa');
    // Actualizar menú activo
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
}

function eliminarProducto(id) {
    Swal.fire({
        title: '¿Eliminar producto?',
        text: 'Esta acción no se puede deshacer',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            productos = productos.filter(p => p.id !== id);
            renderizarProductos();
            mostrarAlerta('Producto eliminado correctamente', 'success');
        }
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


document.addEventListener('DOMContentLoaded', function() {

    // Llenar select de categorías
    categorias.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        document.getElementById('categoria').appendChild(option);
    });

    // Renderizar productos al cargar
    renderizarProductos();

});

// EVENTO SUBMIT DEL FORMULARIO
document.getElementById('formProducto').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value.trim();
    const precio = parseFloat(document.getElementById('precio').value);
    const categoria = document.getElementById('categoria').value;
    const descripcion = document.getElementById('descripcion').value.trim();
    const estado = document.getElementById('estado').value;
    
    if (!validarCampos(nombre, precio, categoria, descripcion, estado)) {
        return;
    }
    
    if (idEditando === null) {
        // AGREGAR nuevo producto
        agregarProducto(nombre, precio, categoria, descripcion, estado);
    } else {
        // ACTUALIZAR producto
        actualizarProducto(idEditando, nombre, precio, categoria, descripcion, estado);
        idEditando = null;
        document.getElementById('btnSubmit').innerHTML = '<i class="fas fa-plus"></i> Agregar Producto';
    }

    
    this.reset();
});


// Renderizar productos al cargar la página
renderizarProductos();



