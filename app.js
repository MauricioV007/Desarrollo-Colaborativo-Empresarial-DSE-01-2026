// CLASE PRODUCTO
class Producto {
    constructor(id, nombre, precio, categoria, cantidad, descripcion, estado) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.cantidad = cantidad;
        this.descripcion = descripcion;
        this.estado = estado;
    }
}

// ARRAY DE PRODUCTOS (datos iniciales)
let productos = [
    new Producto(1, "Laptop Gaming", 1299.99, "Electrónicos", 15, "Gaming laptop con RTX 3060", "Activo"),
    new Producto(2, "iPhone 14 Pro", 999.00, "Electrónicos", 25, "128GB Deep Purple", "Activo"),
    new Producto(3, "Mesa de comedor", 299.99, "Hogar", 8, "Madera maciza 6 sillas", "Activo"),
    new Producto(4, "Cafetera Nespresso", 149.99, "Hogar", 0, "Modelo Vertuo", "Inactivo"),
    new Producto(5, "Silla gamer", 249.99, "Hogar", 12, "Ergonómica RGB", "Activo")
];

// Array categorias
const categorias = [
    "Electrónicos",
    "Ropa",
    "Hogar",
    "Deportes",
    "Libros"
];

let idEditando = null;

// FUNCIÓN PARA AJUSTAR ESTADO SEGÚN CANTIDAD
function ajustarEstado(cantidad, estadoManual, cantidadAnterior = null) {
    // Si cantidad es 0, forzar Inactivo
    if (cantidad === 0 || cantidad === "0") {
        return "Inactivo";
    }
   
    // Si cantidad > 0 y la cantidad anterior era 0, cambiar automáticamente a Activo
    if (cantidadAnterior === 0 && cantidad > 0) {
        return "Activo";
    }
   
    // Si cantidad > 0, usar el estado manual seleccionado
    return estadoManual;
}

// FUNCIÓN PARA MOSTRAR ALERTAS
function mostrarAlerta(mensaje, tipo) {
    const iconos = {
        'success': 'success',
        'error': 'error',
        'warning': 'warning',
        'info': 'info'
    };
   
    Swal.fire({
        icon: iconos[tipo] || 'info',
        title: mensaje,
        showConfirmButton: false,
        timer: 2000,
        toast: true,
        position: 'top-end'
    });
}

// FUNCIÓN PARA AGREGAR PRODUCTO
function agregarProducto(nombre, precio, categoria, cantidad, descripcion, estadoManual) {
    // Ajustar estado según cantidad
    const estado = ajustarEstado(cantidad, estadoManual);
   
    const id = productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1;
    const nuevoProducto = new Producto(id, nombre, precio, categoria, cantidad, descripcion, estado);
    productos.push(nuevoProducto);
    renderizarProductos();
   
    if (cantidad === 0) {
        mostrarAlerta('Producto agregado con estado Inactivo (cantidad = 0)', 'warning');
    } else {
        mostrarAlerta('Producto agregado correctamente', 'success');
    }
}

// FUNCIÓN PARA ACTUALIZAR PRODUCTO
function actualizarProducto(id, nombre, precio, categoria, cantidad, descripcion, estadoManual) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        const cantidadAnterior = producto.cantidad;
       
        // Ajustar estado según cantidad
        const estado = ajustarEstado(cantidad, estadoManual, cantidadAnterior);
       
        producto.nombre = nombre;
        producto.precio = precio;
        producto.categoria = categoria;
        producto.cantidad = cantidad;
        producto.descripcion = descripcion;
        producto.estado = estado;
       
        renderizarProductos();
       
        // Mensajes informativos
        if (cantidad === 0) {
            mostrarAlerta('Producto actualizado con estado Inactivo (cantidad = 0)', 'warning');
        } else if (cantidadAnterior === 0 && cantidad > 0) {
            mostrarAlerta('Producto actualizado y activado (cantidad > 0)', 'success');
        } else {
            mostrarAlerta('Producto actualizado correctamente', 'success');
        }
    }
}

// RENDERIZAR PRODUCTOS EN EL DOM
function renderizarProductos() {
    const tbody = document.getElementById("tablaProductos");
    const sinProductos = document.getElementById("sinProductos");
    tbody.innerHTML = "";


    if (productos.length === 0) {
        if (sinProductos) sinProductos.classList.remove("d-none");
        return;
    }

    if (sinProductos) sinProductos.classList.add("d-none");

    productos.forEach((p, index) => {
        const fila = document.createElement("tr");
       
        // Colorear fila si cantidad es 0
        if (p.cantidad === 0) {
            fila.style.backgroundColor = "#ffe6e6";
        }
       
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${p.nombre}</td>
            <td>$${parseFloat(p.precio).toFixed(2)}</td>
            <td><span class="badge bg-primary">${p.categoria}</span></td>
            <td><strong>${p.cantidad}</strong></td>
            <td>${p.descripcion.substring(0, 30)}...</td>
            <td><span class="badge ${p.estado === 'Activo' ? 'bg-success' : 'bg-danger'}">${p.estado}</span></td>
            <td>
                <button class="btn btn-warning btn-sm me-2" onclick="editarProducto(${p.id})">
                    <i class="fas fa-edit"></i> Editar
                </button>
                <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${p.id})">
                    <i class="fas fa-trash"></i> Eliminar
                </button>
            </td>
        `;
        tbody.appendChild(fila);
    });
}

// FUNCIÓN PARA MOSTRAR SECCIÓN
function mostrarSeccion(seccion, elemento) {
    // Ocultar todas las secciones
    document.querySelectorAll('.seccion').forEach(s => s.classList.remove('activa'));
   
    // Mostrar sección seleccionada
    const seccionElemento = document.getElementById('seccion' + seccion.charAt(0).toUpperCase() + seccion.slice(1));
    if (seccionElemento) {
        seccionElemento.classList.add('activa');
    }
   
    // Actualizar menú activo
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    if (elemento) {
        elemento.classList.add('active');
    }
   
    // Renderizar productos si es listado
    if (seccion === 'listado') {
        renderizarProductos();
    }
}

// FUNCIÓN PARA EDITAR PRODUCTO
function editarProducto(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        // Cargar datos en formulario de editar
        document.getElementById('nombreEditar').value = producto.nombre;
        document.getElementById('precioEditar').value = producto.precio;
        document.getElementById('categoriaEditar').value = producto.categoria;
        document.getElementById('cantidadEditar').value = producto.cantidad;
        document.getElementById('descripcionEditar').value = producto.descripcion;
        document.getElementById('estadoEditar').value = producto.estado;
       
        // Deshabilitar select de estado si cantidad es 0
        const selectEstado = document.getElementById('estadoEditar');
        if (producto.cantidad === 0) {
            selectEstado.disabled = true;
        } else {
            selectEstado.disabled = false;
        }
       
        // Guardar ID
        idEditando = id;
       
        // Mostrar sección de editar
        mostrarSeccion('editar');
    }
}

// FUNCIÓN PARA CANCELAR EDICIÓN
function cancelarEdicion() {
    idEditando = null;
    document.getElementById('formEditar').reset();
    // Habilitar el select de estado al cancelar
    document.getElementById('estadoEditar').disabled = false;
    mostrarSeccion('listado');
}

// FUNCIÓN PARA ELIMINAR PRODUCTO
function eliminarProducto(id) {
    Swal.fire({
        title: '¿Eliminar producto?',
        text: 'Esta acción no se puede deshacer',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6'
    }).then((result) => {
        if (result.isConfirmed) {
            productos = productos.filter(p => p.id !== id);
            renderizarProductos();
            mostrarAlerta('Producto eliminado correctamente', 'success');
        }
    });
}

// VALIDACIÓN DE CAMPOS
function validarCampos(nombre, precio, categoria, cantidad, descripcion) {
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
    if (cantidad === null || cantidad === undefined || cantidad === '') {
        mostrarAlerta('La cantidad es obligatoria', 'error');
        return false;
    }
    if (cantidad < 0) {
        mostrarAlerta('La cantidad no puede ser negativa', 'error');
        return false;
    }
    if (!descripcion || descripcion.trim().length < 10) {
        mostrarAlerta('La descripción debe tener al menos 10 caracteres', 'error');
        return false;
    }
    return true;
}

// INICIALIZACIÓN AL CARGAR EL DOM
document.addEventListener('DOMContentLoaded', function() {
    // Llenar select de categorías en AMBOS formularios
    const selectCategoriaCrear = document.getElementById('categoriaCrear');
    const selectCategoriaEditar = document.getElementById('categoriaEditar');
   
    categorias.forEach(cat => {
        const optionCrear = document.createElement('option');
        optionCrear.value = cat;
        optionCrear.textContent = cat;
        selectCategoriaCrear.appendChild(optionCrear);
       
        const optionEditar = document.createElement('option');
        optionEditar.value = cat;
        optionEditar.textContent = cat;
        selectCategoriaEditar.appendChild(optionEditar);
    });

    // Renderizar productos al cargar
    renderizarProductos();

    // LISTENERS PARA ACTUALIZAR ESTADO AUTOMÁTICAMENTE CUANDO CAMBIA CANTIDAD
   
    // En formulario CREAR
    document.getElementById('cantidadCrear').addEventListener('input', function() {
        const cantidad = parseInt(this.value) || 0;
        const selectEstado = document.getElementById('estadoCrear');
       
        if (cantidad === 0) {
            selectEstado.value = 'Inactivo';
            selectEstado.disabled = true; // Deshabilitar si cantidad es 0
        } else {
            selectEstado.disabled = false;
            // Si estaba en Inactivo por cantidad 0, cambiar a Activo
            if (selectEstado.value === 'Inactivo') {
                selectEstado.value = 'Activo';
            }
        }
    });
   
    // En formulario EDITAR
    document.getElementById('cantidadEditar').addEventListener('input', function() {
        const cantidad = parseInt(this.value) || 0;
        const selectEstado = document.getElementById('estadoEditar');
       
        if (cantidad === 0) {
            selectEstado.value = 'Inactivo';
            selectEstado.disabled = true; // Deshabilitar si cantidad es 0
        } else {
            selectEstado.disabled = false;
            // Si estaba en Inactivo, cambiar a Activo cuando aumenta cantidad
            if (selectEstado.value === 'Inactivo') {
                selectEstado.value = 'Activo';
            }
        }
    });

    // EVENTO SUBMIT DEL FORMULARIO CREAR
    document.getElementById('formCrear').addEventListener('submit', function(e) {
        e.preventDefault();
       
        const nombre = document.getElementById('nombreCrear').value.trim();
        const precio = parseFloat(document.getElementById('precioCrear').value);
        const categoria = document.getElementById('categoriaCrear').value;
        const cantidad = parseInt(document.getElementById('cantidadCrear').value);
        const descripcion = document.getElementById('descripcionCrear').value.trim();
        const estado = document.getElementById('estadoCrear').value;
       
        if (!validarCampos(nombre, precio, categoria, cantidad, descripcion)) {
            return;
        }
       
        agregarProducto(nombre, precio, categoria, cantidad, descripcion, estado);
       
        // Limpiar formulario
        this.reset();
    });
    // EVENTO SUBMIT DEL FORMULARIO EDITAR
    document.getElementById('formEditar').addEventListener('submit', function(e) {
        e.preventDefault();
       
        // Habilitar el select de estado temporalmente para poder leer su valor
        const selectEstado = document.getElementById('estadoEditar');
        const wasDisabled = selectEstado.disabled;
        selectEstado.disabled = false;
       
        const nombre = document.getElementById('nombreEditar').value.trim();
        const precio = parseFloat(document.getElementById('precioEditar').value);
        const categoria = document.getElementById('categoriaEditar').value;
        const cantidad = parseInt(document.getElementById('cantidadEditar').value);
        const descripcion = document.getElementById('descripcionEditar').value.trim();
        const estado = selectEstado.value;
       
        // Restaurar el estado deshabilitado si era necesario
        if (wasDisabled) selectEstado.disabled = true;
       
        if (!validarCampos(nombre, precio, categoria, cantidad, descripcion)) {
            return;
        }
       
        if (idEditando !== null) {
            actualizarProducto(idEditando, nombre, precio, categoria, cantidad, descripcion, estado);
            idEditando = null;
            this.reset();
            selectEstado.disabled = false; // Habilitar al limpiar
            mostrarSeccion('listado');
        }
    });
});