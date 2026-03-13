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
    new Producto(5, "Silla gamer", 249.99, "Hogar", 12, "Ergonómica RGB", "Activo"),
    new Producto(6, "Monitor LG 4K", 399.99, "Electrónicos", 10, "Monitor ultrapanorámico 34 pulgadas", "Activo"),
    new Producto(7, "Teclado Mecánico", 159.99, "Electrónicos", 20, "RGB switches Cherry MX Brown", "Activo"),
    new Producto(8, "Auriculares Sony", 299.99, "Electrónicos", 5, "Noise Cancelling WH-1000XM5", "Activo"),
    new Producto(9, "Escritorio Gaming", 499.99, "Hogar", 3, "Escritorio de madera con LED RGB", "Activo"),
    new Producto(10, "Lámpara LED", 79.99, "Hogar", 0, "Lámpara inteligente regulable", "Inactivo"),
    new Producto(11, "Mouse Logitech", 49.99, "Electrónicos", 30, "Mouse inalámbrico con batería larga", "Activo"),
    new Producto(12, "Mousepad Grande", 29.99, "Hogar", 15, "Mousepad XXL para escritorio gaming", "Activo"),
    new Producto(13, "Cable HDMI 2.1", 15.99, "Electrónicos", 50, "Cable HDMI 8K de 2 metros", "Activo"),
    new Producto(14, "Webcam Logitech", 89.99, "Electrónicos", 8, "Webcam Full HD con micrófono", "Activo"),
    new Producto(15, "Hub USB", 39.99, "Electrónicos", 0, "Hub USB 3.0 con 7 puertos", "Inactivo"),
    new Producto(16, "Tablet Samsung", 799.99, "Electrónicos", 12, "Galaxy Tab S8 128GB", "Activo"),
    new Producto(17, "Smartwatch Apple", 399.99, "Electrónicos", 7, "Apple Watch Series 8 45mm", "Activo"),
    new Producto(18, "Cargador Rápido", 24.99, "Electrónicos", 40, "Cargador USB-C 65W PD", "Activo"),
    new Producto(19, "Funda Laptop", 34.99, "Hogar", 18, "Funda neopreno 15.6 pulgadas", "Activo"),
    new Producto(20, "Soporte Monitor", 44.99, "Hogar", 9, "Soporte ajustable para monitor", "Activo"),
    new Producto(21, "Teclado Inalámbrico", 69.99, "Electrónicos", 14, "Teclado inalámbrico compacto", "Activo"),
    new Producto(22, "Cable Ethernet", 9.99, "Electrónicos", 100, "Cable Ethernet Cat6 5 metros", "Activo"),
    new Producto(23, "Micrófono Condenser", 129.99, "Electrónicos", 6, "Micrófono cardioide XLR", "Activo"),
    new Producto(24, "Almohada Ergonómica", 59.99, "Hogar", 22, "Almohada de espuma viscoelástica", "Activo"),
    new Producto(25, "Ventilador Escritorio", 39.99, "Hogar", 0, "Ventilador de escritorio silencioso", "Inactivo"),
    new Producto(26, "Powerbank 20000mAh", 49.99, "Electrónicos", 25, "Batería portátil con carga rápida", "Activo"),
    new Producto(27, "Audífonos Bluetooth", 79.99, "Electrónicos", 11, "Audífonos inalámbricos TWS", "Activo"),
    new Producto(28, "Organizador Escritorio", 34.99, "Hogar", 20, "Organizador de madera con 5 niveles", "Activo"),
    new Producto(29, "Protector Pantalla", 14.99, "Electrónicos", 60, "Protector vidrio templado 27 pulgadas", "Activo"),
    new Producto(30, "Dock Cargador", 89.99, "Electrónicos", 4, "Dock de carga magnético para laptop", "Activo"),
    new Producto(31, "Mochila Gaming", 89.99, "Hogar", 13, "Mochila resistente al agua 17 pulgadas", "Activo"),
    new Producto(32, "Filtro HEPA Aire", 79.99, "Hogar", 8, "Purificador de aire inteligente", "Activo"),
    new Producto(33, "Foco LED Inteligente", 19.99, "Hogar", 0, "Bombilla inteligente RGB WiFi", "Inactivo"),
    new Producto(34, "Router WiFi 6", 159.99, "Electrónicos", 5, "Router ASUS WiFi 6 gigabit", "Activo"),
    new Producto(35, "Cascos Gaming", 119.99, "Electrónicos", 9, "Cascos con sonido envolvente 7.1", "Activo")
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

// VARIABLE PARA ALMACENAR EL TÉRMINO DE BÚSQUEDA (SPRINT 4)
let terminoBusqueda = '';

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

// ===== SPRINT 4: BÚSQUEDA Y FILTRADO DINÁMICO =====

// FUNCIÓN PARA FILTRAR PRODUCTOS POR NOMBRE
function filtrarProductos(termino) {
    terminoBusqueda = termino.toLowerCase().trim();
   
    if (terminoBusqueda === '') {
        // Si está vacío, mostrar todos
        renderizarProductos();
    } else {
        // Filtrar y renderizar
        const productosFiltrados = productos.filter(p =>
            p.nombre.toLowerCase().includes(terminoBusqueda)
        );
       
        renderizarProductosFiltrados(productosFiltrados);
    }
}

// FUNCIÓN PARA RENDERIZAR PRODUCTOS FILTRADOS
function renderizarProductosFiltrados(productosList) {
    const tbody = document.getElementById("tablaProductos");
    const sinProductos = document.getElementById("sinProductos");
    tbody.innerHTML = "";

    if (productosList.length === 0) {
        if (sinProductos) sinProductos.classList.remove("d-none");
        if (sinProductos) sinProductos.innerHTML = `
            <i class="fas fa-search fa-3x text-muted mb-3"></i>
            <p class="text-muted">No hay productos que coincidan con la búsqueda</p>
        `;
        return;
    }

    if (sinProductos) sinProductos.classList.add("d-none");

    productosList.forEach((p, index) => {
        const fila = document.createElement("tr");
       
        // Colorear fila si cantidad es 0
        if (p.cantidad === 0) {
            fila.style.backgroundColor = "#ffe6e6";
            fila.title = "Producto sin stock";
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
                <button class="btn btn-warning btn-sm me-2" onclick="editarProducto(${p.id})" title="Editar producto">
                    <i class="fas fa-edit"></i> Editar
                </button>
                <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${p.id})" title="Eliminar producto">
                    <i class="fas fa-trash"></i> Eliminar
                </button>
            </td>
        `;
        tbody.appendChild(fila);
    });
}

// VALIDACIÓN DE CAMPOS
function validarCampos(nombre, precio, categoria, cantidad, descripcion) {
    // Limpiar nombre y descripción
    const nombreLimpio = nombre.trim();
    const descripcionLimpia = descripcion.trim();
    
    // Validar nombre
    if (!nombreLimpio || nombreLimpio.length < 2) {
        mostrarAlerta('El nombre debe tener al menos 2 caracteres', 'error');
        return false;
    }
    
    // Validar precio
    const precioNum = parseFloat(precio);
    if (isNaN(precioNum) || precioNum <= 0) {
        mostrarAlerta('El precio debe ser un número mayor a 0', 'error');
        return false;
    }
    
    if (precioNum > 999999.99) {
        mostrarAlerta('El precio no puede exceder $999,999.99', 'error');
        return false;
    }
    
    // Validar categoría
    if (!categoria) {
        mostrarAlerta('Selecciona una categoría', 'error');
        return false;
    }
    
    // Validar cantidad
    const cantidadNum = parseInt(cantidad);
    if (isNaN(cantidadNum) || cantidad === null || cantidad === undefined || cantidad === '') {
        mostrarAlerta('La cantidad es obligatoria y debe ser un número', 'error');
        return false;
    }
    
    if (cantidadNum < 0) {
        mostrarAlerta('La cantidad no puede ser negativa', 'error');
        return false;
    }
    
    // Validar descripción
    if (!descripcionLimpia || descripcionLimpia.length < 10) {
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

});

    // LISTENER PARA BÚSQUEDA 
    const campoBusqueda = document.getElementById('busquedaProducto');
    if (campoBusqueda) {
        campoBusqueda.addEventListener('input', function() {
            filtrarProductos(this.value);
        });
    }

 // EVENTO SUBMIT DEL FORMULARIO CREAR
    document.getElementById('formCrear').addEventListener('submit', function(e) {
        e.preventDefault();
       
        const nombre = document.getElementById('nombreCrear').value;
        const precio = parseFloat(document.getElementById('precioCrear').value);
        const categoria = document.getElementById('categoriaCrear').value;
        const cantidad = parseInt(document.getElementById('cantidadCrear').value);
        const descripcion = document.getElementById('descripcionCrear').value;
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
       
        const nombre = document.getElementById('nombreEditar').value;
        const precio = parseFloat(document.getElementById('precioEditar').value);
        const categoria = document.getElementById('categoriaEditar').value;
        const cantidad = parseInt(document.getElementById('cantidadEditar').value);
        const descripcion = document.getElementById('descripcionEditar').value;
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

