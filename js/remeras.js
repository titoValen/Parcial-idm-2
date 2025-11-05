'use strict';

const remerasActuales = [
    {
        id: 1,
        equipo: "Arsenal",
        categoria: "actual",
        precio: 45000,
        imagenes: {
            frente_400: "/img/remeras/actual/arsenal_actual/frente_400x400.webp",
            frente_800: "/img/remeras/actual/arsenal_actual/frente_800x800.webp",
            espalda_400: "/img/remeras/actual/arsenal_actual/espalda_400x400.webp",
            espalda_800: "/img/remeras/actual/arsenal_actual/espalda_800x800.webp"
        }
    },
    {
        id: 2,
        equipo: "Barcelona",
        categoria: "actual",
        precio: 48000,
        imagenes: {
            frente_400: "/img/remeras/actual/barcelona_actual/frente_400x400.webp",
            frente_800: "/img/remeras/actual/barcelona_actual/frente_800x800.webp",
            espalda_400: "/img/remeras/actual/barcelona_actual/espalda_400x400.webp",
            espalda_800: "/img/remeras/actual/barcelona_actual/espalda_800x800.webp"
        }
    },
    {
        id: 3,
        equipo: "Dormund",
        categoria: "actual",
        precio: 44000,
        imagenes: {
            frente_400: "/img/remeras/actual/dormund_actual/frente_400x400.webp",
            frente_800: "/img/remeras/actual/dormund_actual/frente_800x800.webp",
            espalda_400: "/img/remeras/actual/dormund_actual/espalda_400x400.webp",
            espalda_800: "/img/remeras/actual/dormund_actual/espalda_800x800.webp"
        }
    },
    {
        id: 4,
        equipo: "Liverpool",
        categoria: "actual",
        precio: 47000,
        imagenes: {
            frente_400: "/img/remeras/actual/liverpool_actual/frente_400x400.webp",
            frente_800: "/img/remeras/actual/liverpool_actual/frente_800x800.webp",
            espalda_400: "/img/remeras/actual/liverpool_actual/espalda_400x400.webp",
            espalda_800: "/img/remeras/actual/liverpool_actual/espalda_800x800.webp"
        }
    },
    {
        id: 5,
        equipo: "Man City",
        categoria: "actual",
        precio: 49000,
        imagenes: {
            frente_400: "/img/remeras/actual/man_city_actual/frente_400x400.webp",
            frente_800: "/img/remeras/actual/man_city_actual/frente_800x800.webp",
            espalda_400: "/img/remeras/actual/man_city_actual/espalda_400x400.webp",
            espalda_800: "/img/remeras/actual/man_city_actual/espalda_800x800.webp"
        }
    },
    {
        id: 6,
        equipo: "Man United",
        categoria: "actual",
        precio: 48500,
        imagenes: {
            frente_400: "/img/remeras/actual/man_united_actual/frente_400x400.webp",
            frente_800: "/img/remeras/actual/man_united_actual/frente_800x800.webp",
            espalda_400: "/img/remeras/actual/man_united_actual/espalda_400x400.webp",
            espalda_800: "/img/remeras/actual/man_united_actual/espalda_800x800.webp"
        }
    },
    {
        id: 7,
        equipo: "Palermo",
        categoria: "actual",
        precio: 42000,
        imagenes: {
            frente_400: "/img/remeras/actual/palermo_actual/frente_400x400.webp",
            frente_800: "/img/remeras/actual/palermo_actual/frente_800x800.webp",
            espalda_400: "/img/remeras/actual/palermo_actual/espalda_400x400.webp",
            espalda_800: "/img/remeras/actual/palermo_actual/espalda_800x800.webp"
        }
    },
    {
        id: 8,
        equipo: "Roma",
        categoria: "actual",
        precio: 43500,
        imagenes: {
            frente_400: "/img/remeras/actual/roma_actual/frente_400x400.webp",
            frente_800: "/img/remeras/actual/roma_actual/frente_800x800.webp",
            espalda_400: "/img/remeras/actual/roma_actual/espalda_400x400.webp",
            espalda_800: "/img/remeras/actual/roma_actual/espalda_800x800.webp"
        }
    },
    {
        id: 9,
        equipo: "Valencia",
        categoria: "actual",
        precio: 43000,
        imagenes: {
            frente_400: "/img/remeras/actual/valencia_actual/frente_400x400.webp",
            frente_800: "/img/remeras/actual/valencia_actual/frente_800x800.webp",
            espalda_400: "/img/remeras/actual/valencia_actual/espalda_400x400.webp",
            espalda_800: "/img/remeras/actual/valencia_actual/espalda_800x800.webp"
        }
    }
]; 

const remerasRetro = [
    {
        id: 10,
        equipo: "Barcelona",
        categoria: "retro",
        precio: 52000,
        imagenes: {
            frente_512: "/img/remeras/retro/barcelona_retro/frente_512x683.webp",
            frente_1024: "/img/remeras/retro/barcelona_retro/frente_1024x1365.webp",
            espalda_512: "/img/remeras/retro/barcelona_retro/espalda_512x683.webp",
            espalda_1024: "/img/remeras/retro/barcelona_retro/espalda_1024x1365.webp"
        }
    },
    {
        id: 11,
        equipo: "Chelsea",
        categoria: "retro",
        precio: 50000,
        imagenes: {
            frente_512: "/img/remeras/retro/chealse_retro/frente_512x512.webp",
            frente_1024: "/img/remeras/retro/chealse_retro/frente_1024x1024.webp",
            espalda_512: "/img/remeras/retro/chealse_retro/espalda_512x512.webp",
            espalda_1024: "/img/remeras/retro/chealse_retro/espalda_1024x1024.webp"
        }
    },
    {
        id: 12,
        equipo: "Fiorentina",
        categoria: "retro",
        precio: 49000,
        imagenes: {
            frente_512: "/img/remeras/retro/fiorentina_retro/frente_512x683.webp",
            frente_1024: "/img/remeras/retro/fiorentina_retro/frente_1024x1365.webp",
            espalda_512: "/img/remeras/retro/fiorentina_retro/espalda_512x683.webp",
            espalda_1024: "/img/remeras/retro/fiorentina_retro/espalda_1024x1365.webp"
        }
    },
    {
        id: 13,
        equipo: "Man City",
        categoria: "retro",
        precio: 51000,
        imagenes: {
            frente_512: "/img/remeras/retro/man_city_retro/frente_512x512.webp",
            frente_1024: "/img/remeras/retro/man_city_retro/frente_1024x1024.webp",
            espalda_512: "/img/remeras/retro/man_city_retro/espalda_512x512.webp",
            espalda_1024: "/img/remeras/retro/man_city_retro/espalda_1024x1024.webp"
        }
    },
    {
        id: 14,
        equipo: "Man United",
        categoria: "retro",
        precio: 52500,
        imagenes: {
            frente_512: "/img/remeras/retro/man_united_retro/frente_512x683.webp",
            frente_1024: "/img/remeras/retro/man_united_retro/frente_1024x1365.webp",
            espalda_512: "/img/remeras/retro/man_united_retro/espalda_512x683.webp",
            espalda_1024: "/img/remeras/retro/man_united_retro/espalda_1024x1365.webp"
        }
    },
    {
        id: 15,
        equipo: "Milan",
        categoria: "retro",
        precio: 50500,
        imagenes: {
            frente_512: "/img/remeras/retro/milan_retro/frente_512x683.webp",
            frente_1024: "/img/remeras/retro/milan_retro/frente_1024x1365.webp",
            espalda_512: "/img/remeras/retro/milan_retro/espalda_512x683.webp",
            espalda_1024: "/img/remeras/retro/milan_retro/espalda_1024x1365.webp"
        }
    },
    {
        id: 16,
        equipo: "Santos",
        categoria: "retro",
        precio: 48000,
        imagenes: {
            frente_512: "/img/remeras/retro/santos_retro/frente_512x512.webp",
            frente_1024: "/img/remeras/retro/santos_retro/frente_1024x1024.webp",
            espalda_512: null,
            espalda_1024: null
        }
    }
];

export { remerasActuales, remerasRetro };