let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    mostrarCarrito();
}

function mostrarCarrito() {
    const lista = document.getElementById('lista-carrito');
    lista.innerHTML = '';
    carrito.forEach((item, i) => {
        // const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = ${ item.nombre } - $${ item.precio };
        // li.textContent = ${ item.nombre } - $${ item.precio };
        lista.appendChild(li);
    });
}

function enviarPorWhatsApp() {
    if (carrito.length === 0) {
        alert('¡El carrito está vacío!');
        return;
    }
    let mensaje = '¡Hola! Quiero pedir:\n';
    carrito.forEach(item => {
        mensaje += - ${ item.nombre } ($${ item.precio }) \n;
};

// Reemplaza el número por el tuyo (sin espacios, con código internacional ej: 549XXXXXXXXX para Argentina)
const telefono = '+5493624096688';
const url = https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)};
    window.open(url, '_blank');
		}