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
            <h3 class="card-title">${remera.equipo}</h3>
            <p class="card-text">Camiseta ${remera.categoria} ${precioFormateado}</p>
            <button class="btn btn-primary" data-id="${remera.id}">Agregar al carrito</button>
        </div>
    `;
    
    return card;
}

// Función para agrupar remeras en grupos de 3
function agruparRemeras(remeras, porGrupo = 3) {
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
    
    // Agrupar las remeras en grupos de 3
    const grupos = agruparRemeras(remerasActuales, 3);
    
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
    
    // Crear el carousel completo
    const carouselDiv = document.createElement('div');
    carouselDiv.id = 'carouselRetro';
    carouselDiv.className = 'carousel slide';
    
    const carouselInner = document.createElement('div');
    carouselInner.className = 'carousel-inner';
    
    // Agrupar las remeras retro en grupos de 3
    const grupos = agruparRemeras(remerasRetro, 3);
    
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

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    generarCarouselActuales();
    generarCarouselRetro();
    
    // Event listener para los botones de agregar al carrito
    document.addEventListener('click', (e) => {
        if (e.target.matches('.btn-primary[data-id]')) {
            const remeraId = parseInt(e.target.dataset.id);
            console.log(`Agregando remera con ID ${remeraId} al carrito`);
            // Aquí puedes agregar la lógica del carrito
        }
    });
});
