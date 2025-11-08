'use strict';

import { remerasActuales, remerasRetro } from './remeras.js';

// Función para crear una card de remera
function crearCard(remera) {
    const card = document.createElement('div');
    card.className = 'card';
    
    // Determinar qué imágenes usar según la categoría
    let imgSmall, imgLarge, imgClass;
    if (remera.categoria === 'actual') {
        imgSmall = remera.imagenes.frente_400;
        imgLarge = remera.imagenes.frente_800;
        imgClass = 'card-img-top img-actual';
    } else if (remera.categoria === 'retro') {
        imgSmall = remera.imagenes.frente_512;
        imgLarge = remera.imagenes.frente_1024;
        imgClass = 'card-img-top img-retro';
    }
    
    // Formatear precio
    const precioFormateado = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0
    }).format(remera.precio);
    
    card.innerHTML = `
        <picture>
            <source media="(min-width: 800px)" srcset="${imgLarge}">
            <img src="${imgSmall}" class="${imgClass}" alt="Camiseta ${remera.equipo}">
        </picture>
        <div class="card-body">
            <h4 class="card-title">${remera.equipo}</h4>
            <p class="card-text">Camiseta ${remera.categoria} ${precioFormateado}</p>
            <button class="btn-personalizado-primary w-100" data-id="${remera.id}">
                <span>Agregar al carrito</span>
            </button>
        </div>
    `;
    
    return card;
}

// Función para obtener el número de cards por grupo según el ancho de pantalla
function getCardsPerSlide() {
    const width = window.innerWidth;
    if (width <= 425) {
        return 1;
    } else if (width <= 1024) {
        return 2;
    } else {
        return 3;
    }
}

// Función para agrupar remeras según el tamaño de pantalla
function agruparRemeras(remeras, porGrupo = null) {
    if (porGrupo === null) {
        porGrupo = getCardsPerSlide();
    }
    const grupos = [];
    for (let i = 0; i < remeras.length; i += porGrupo) {
        grupos.push(remeras.slice(i, i + porGrupo));
    }
    return grupos;
}

// Función para crear un carousel-item con 3 cards
function crearCarouselItem(grupoRemeras, esActivo = false) {
    const carouselItem = document.createElement('div');
    carouselItem.className = `carousel-item${esActivo ? ' active' : ''}`;
    
    const cardsWrapper = document.createElement('div');
    cardsWrapper.className = 'cards-wrapper';
    
    grupoRemeras.forEach(remera => {
        const card = crearCard(remera);
        cardsWrapper.appendChild(card);
    });
    
    carouselItem.appendChild(cardsWrapper);
    return carouselItem;
}

// Función para generar el carousel de remeras actuales
function generarCarouselActuales() {
    const carouselInner = document.querySelector('#carouselExampleIndicators .carousel-inner');
    
    if (!carouselInner) {
        console.error('No se encontró el contenedor del carousel de remeras actuales');
        return;
    }
    
    // Limpiar el contenido existente
    carouselInner.innerHTML = '';
    
    // Agrupar las remeras según el tamaño de pantalla
    const grupos = agruparRemeras(remerasActuales);
    
    // Crear cada carousel-item
    grupos.forEach((grupo, index) => {
        const carouselItem = crearCarouselItem(grupo, index === 0);
        carouselInner.appendChild(carouselItem);
    });
}

// Función para generar el carousel de remeras retro
function generarCarouselRetro() {
    const seccionRetro = document.querySelector('#edicion-retro');
    
    if (!seccionRetro) {
        console.error('No se encontró la sección de edición retro');
        return;
    }
    
    // Eliminar carousel existente si hay uno
    const carouselExistente = document.querySelector('#carouselRetro');
    if (carouselExistente) {
        carouselExistente.remove();
    }
    
    // Crear el carousel completo
    const carouselDiv = document.createElement('div');
    carouselDiv.id = 'carouselRetro';
    carouselDiv.className = 'carousel slide';
    
    const carouselInner = document.createElement('div');
    carouselInner.className = 'carousel-inner';
    
    // Agrupar las remeras retro según el tamaño de pantalla
    const grupos = agruparRemeras(remerasRetro);
    
    // Crear cada carousel-item
    grupos.forEach((grupo, index) => {
        const carouselItem = crearCarouselItem(grupo, index === 0);
        carouselInner.appendChild(carouselItem);
    });
    
    carouselDiv.appendChild(carouselInner);
    
    // Crear botón anterior
    const btnPrev = document.createElement('button');
    btnPrev.className = 'carousel-control-prev';
    btnPrev.type = 'button';
    btnPrev.setAttribute('data-bs-target', '#carouselRetro');
    btnPrev.setAttribute('data-bs-slide', 'prev');
    btnPrev.innerHTML = `
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
    `;
    
    // Crear botón siguiente
    const btnNext = document.createElement('button');
    btnNext.className = 'carousel-control-next';
    btnNext.type = 'button';
    btnNext.setAttribute('data-bs-target', '#carouselRetro');
    btnNext.setAttribute('data-bs-slide', 'next');
    btnNext.innerHTML = `
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
    `;
    
    // Agregar los botones al carousel
    carouselDiv.appendChild(btnPrev);
    carouselDiv.appendChild(btnNext);
    
    seccionRetro.appendChild(carouselDiv);
}

// Función para mostrar modal con información del producto
function mostrarModalCarrito(remeraId) {
    // Buscar la remera en ambos arrays
    const remera = [...remerasActuales, ...remerasRetro].find(r => r.id === remeraId);
    
    if (!remera) {
        console.error('Remera no encontrada');
        return;
    }
    
    // Obtener elementos del modal
    const modalImagen = document.getElementById('modalProductoImagen');
    const modalNombre = document.getElementById('modalProductoNombre');
    const modalCategoria = document.getElementById('modalProductoCategoria');
    const modalPrecio = document.getElementById('modalProductoPrecio');
    
    // Determinar la imagen a mostrar según la categoría
    let imagenSrc;
    if (remera.categoria === 'actual') {
        imagenSrc = remera.imagenes.frente_400;
    } else if (remera.categoria === 'retro') {
        imagenSrc = remera.imagenes.frente_512;
    }
    
    // Formatear precio
    const precioFormateado = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0
    }).format(remera.precio);
    
    // Actualizar contenido del modal
    modalImagen.src = imagenSrc;
    modalImagen.alt = `Camiseta ${remera.equipo}`;
    modalNombre.textContent = remera.equipo;
    modalCategoria.textContent = remera.categoria === 'actual' ? 'Edición Actual' : 'Edición Retro';
    modalPrecio.textContent = precioFormateado;
    
    // Mostrar el modal
    const modal = new bootstrap.Modal(document.getElementById('modalCarrito'));
    modal.show();
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    generarCarouselActuales();
    generarCarouselRetro();
    
    // Event listener para los botones de agregar al carrito
    document.addEventListener('click', (e) => {
        // Verificar si se hizo clic en el botón o en el span interno
        const button = e.target.closest('.btn-personalizado-primary[data-id]');
        if (button) {
            const remeraId = parseInt(button.dataset.id);
            mostrarModalCarrito(remeraId);
        }
    });
    
    // Regenerar carouseles al cambiar el tamaño de la ventana
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            generarCarouselActuales();
            generarCarouselRetro();
        }, 250);
    });
});
