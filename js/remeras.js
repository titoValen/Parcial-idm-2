'use strict';

// Ejemplo de datos de remeras actuales y retro
// Remeras actuales: Los equipos que hay son: Arsenal, Barcelona, Dormund, Liverpool, Man City, Man united, Palermo, Roma y Valencia. (Todos los nombres son en minuscula)
// La ruta esta en /img/remeras/actual/
// Estan llamado frente y espalda. Ejemplo: frente_400x400.webp y espalda_400x400.webp. También estan las de 800x800.

const remerasActuales = [
    {
        id: 1,
        equipo: "Arsenal",
        categoria: "actual",
        precio: 45000,
        imagenes: {
            frente_400: "/img/remeras/actual/arsenal actual/frente_400x400.webp",
            frente_800: "/img/remeras/actual/arsenal actual/frente_800x800.webp",
            espalda_400: "/img/remeras/actual/arsenal actual/espalda_400x400.webp",
            espalda_800: "/img/remeras/actual/arsenal actual/espalda_800x800.webp"
        }
    },
    {
        id: 2,
        equipo: "Barcelona",
        categoria: "actual",
        precio: 48000,
        imagenes: {
            frente_400: "/img/remeras/actual/barcelona actual/frente_400x400.webp",
            frente_800: "/img/remeras/actual/barcelona actual/frente_800x800.webp",
            espalda_400: "/img/remeras/actual/barcelona actual/espalda_400x400.webp",
            espalda_800: "/img/remeras/actual/barcelona actual/espalda_800x800.webp"
        }
    },
    {
        id: 3,
        equipo: "Dormund",
        categoria: "actual",
        precio: 44000,
        imagenes: {
            frente_400: "/img/remeras/actual/dormund actual/frente_400x400.webp",
            frente_800: "/img/remeras/actual/dormund actual/frente_800x800.webp",
            espalda_400: "/img/remeras/actual/dormund actual/espalda_400x400.webp",
            espalda_800: "/img/remeras/actual/dormund actual/espalda_800x800.webp"
        }
    },
    {
        id: 4,
        equipo: "Liverpool",
        categoria: "actual",
        precio: 47000,
        imagenes: {
            frente_400: "/img/remeras/actual/liverpool actual/frente_400x400.webp",
            frente_800: "/img/remeras/actual/liverpool actual/frente_800x800.webp",
            espalda_400: "/img/remeras/actual/liverpool actual/espalda_400x400.webp",
            espalda_800: "/img/remeras/actual/liverpool actual/espalda_800x800.webp"
        }
    },
    {
        id: 5,
        equipo: "Man City",
        categoria: "actual",
        precio: 49000,
        imagenes: {
            frente_400: "/img/remeras/actual/man city actual/frente_400x400.webp",
            frente_800: "/img/remeras/actual/man city actual/frente_800x800.webp",
            espalda_400: "/img/remeras/actual/man city actual/espalda_400x400.webp",
            espalda_800: "/img/remeras/actual/man city actual/espalda_800x800.webp"
        }
    },
    {
        id: 6,
        equipo: "Man United",
        categoria: "actual",
        precio: 48500,
        imagenes: {
            frente_400: "/img/remeras/actual/man united actual/frente_400x400.webp",
            frente_800: "/img/remeras/actual/man united actual/frente_800x800.webp",
            espalda_400: "/img/remeras/actual/man united actual/espalda_400x400.webp",
            espalda_800: "/img/remeras/actual/man united actual/espalda_800x800.webp"
        }
    },
    {
        id: 7,
        equipo: "Palermo",
        categoria: "actual",
        precio: 42000,
        imagenes: {
            frente_400: "/img/remeras/actual/palermo actual/frente_400x400.webp",
            frente_800: "/img/remeras/actual/palermo actual/frente_800x800.webp",
            espalda_400: "/img/remeras/actual/palermo actual/espalda_400x400.webp",
            espalda_800: "/img/remeras/actual/palermo actual/espalda_800x800.webp"
        }
    },
    {
        id: 8,
        equipo: "Roma",
        categoria: "actual",
        precio: 43500,
        imagenes: {
            frente_400: "/img/remeras/actual/roma actual/frente_400x400.webp",
            frente_800: "/img/remeras/actual/roma actual/frente_800x800.webp",
            espalda_400: "/img/remeras/actual/roma actual/espalda_400x400.webp",
            espalda_800: "/img/remeras/actual/roma actual/espalda_800x800.webp"
        }
    },
    {
        id: 9,
        equipo: "Valencia",
        categoria: "actual",
        precio: 43000,
        imagenes: {
            frente_400: "/img/remeras/actual/valencia actual/frente_400x400.webp",
            frente_800: "/img/remeras/actual/valencia actual/frente_800x800.webp",
            espalda_400: "/img/remeras/actual/valencia actual/espalda_400x400.webp",
            espalda_800: "/img/remeras/actual/valencia actual/espalda_800x800.webp"
        }
    }
]; 

// Ejemplo de datos de remeras actuales y retro
// Remeras retro: Los equipos que hay son: Barcelona, Chelsea, Fiorentina, Man City, Man United, Milan y Santos. (Todos los nombres son en minuscula)
// La ruta esta en /img/remeras/retro/
// Hay distintos tipos de tamaño que lo clasifique por los nombres de los archivos.

const remerasRetro = [
    {
        id: 10,
        equipo: "Barcelona",
        categoria: "retro",
        precio: 52000,
        imagenes: {
            frente_512: "/img/remeras/retro/barcelona retro/frente_512x683.webp",
            frente_1024: "/img/remeras/retro/barcelona retro/frente_1024x1365.webp",
            espalda_512: "/img/remeras/retro/barcelona retro/espalda_512x683.webp",
            espalda_1024: "/img/remeras/retro/barcelona retro/espalda_1024x1365.webp"
        }
    },
    {
        id: 11,
        equipo: "Chelsea",
        categoria: "retro",
        precio: 50000,
        imagenes: {
            frente_512: "/img/remeras/retro/chealse retro/frente_512x512.webp",
            frente_1024: "/img/remeras/retro/chealse retro/frente_1024x1024.webp",
            espalda_512: "/img/remeras/retro/chealse retro/espalda_512x512.webp",
            espalda_1024: "/img/remeras/retro/chealse retro/espalda_1024x1024.webp"
        }
    },
    {
        id: 12,
        equipo: "Fiorentina",
        categoria: "retro",
        precio: 49000,
        imagenes: {
            frente_512: "/img/remeras/retro/fiorentina retro/frente_512x683.webp",
            frente_1024: "/img/remeras/retro/fiorentina retro/frente_1024x1365.webp",
            espalda_512: "/img/remeras/retro/fiorentina retro/espalda_512x683.webp",
            espalda_1024: "/img/remeras/retro/fiorentina retro/espalda_1024x1365.webp"
        }
    },
    {
        id: 13,
        equipo: "Man City",
        categoria: "retro",
        precio: 51000,
        imagenes: {
            frente_512: "/img/remeras/retro/man city retro/frente_512x512.webp",
            frente_1024: "/img/remeras/retro/man city retro/frente_1024x1024.webp",
            espalda_512: "/img/remeras/retro/man city retro/espalda_512x512.webp",
            espalda_1024: "/img/remeras/retro/man city retro/espalda_1024x1024.webp"
        }
    },
    {
        id: 14,
        equipo: "Man United",
        categoria: "retro",
        precio: 52500,
        imagenes: {
            frente_512: "/img/remeras/retro/man united retro/frente_512x683.webp",
            frente_1024: "/img/remeras/retro/man united retro/frente_1024x1365.webp",
            espalda_512: "/img/remeras/retro/man united retro/espalda_512x683.webp",
            espalda_1024: "/img/remeras/retro/man united retro/espalda_1024x1365.webp"
        }
    },
    {
        id: 15,
        equipo: "Milan",
        categoria: "retro",
        precio: 50500,
        imagenes: {
            frente_512: "/img/remeras/retro/milan retro/frente_512x683.webp",
            frente_1024: "/img/remeras/retro/milan retro/frente_1024x1365.webp",
            espalda_512: "/img/remeras/retro/milan retro/espalda_512x683.webp",
            espalda_1024: "/img/remeras/retro/milan retro/espalda_1024x1365.webp"
        }
    },
    {
        id: 16,
        equipo: "Santos",
        categoria: "retro",
        precio: 48000,
        imagenes: {
            frente_512: "/img/remeras/retro/santos retro/frente_512x512.webp",
            frente_1024: "/img/remeras/retro/santos retro/frente_1024x1024.webp",
            espalda_512: null,
            espalda_1024: null
        }
    }
];
