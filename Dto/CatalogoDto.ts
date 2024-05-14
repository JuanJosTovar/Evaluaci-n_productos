export interface Catalogo{
    id:number,
    nombre:string,
    descripcion:string,
    precio:number,
    img:string
}

export const productos = [
    {
        id: 1,
        nombre: "iPhone 13 Pro",
        descripcion: "El iPhone 13 Pro es el último modelo de teléfono inteligente de Apple. Con su pantalla Super Retina XDR, potente chip A15 Bionic y sistema de cámara Pro, captura fotos y videos impresionantes en cualquier situación.",
        precio: 999,
        img: "iphone_13_pro.jpg"
    },
    {
        id: 2,
        nombre: "Samsung Galaxy S21 Ultra",
        descripcion: "El Samsung Galaxy S21 Ultra es un teléfono de gama alta con una pantalla Dynamic AMOLED 2X de 6.8 pulgadas, procesador Exynos 2100 (o Snapdragon 888, dependiendo de la región), hasta 16 GB de RAM, y una versátil configuración de cámara cuádruple.",
        precio: 1199,
        img: "samsung_galaxy_s21_ultra.jpg"
    },
    {
        id: 3,
        nombre: "PlayStation 5",
        descripcion: "La PlayStation 5 es la última consola de videojuegos de Sony. Con su potente hardware, incluido un SSD ultrarrápido y una GPU personalizada, ofrece una experiencia de juego inmersiva con gráficos de alta fidelidad y tiempos de carga ultrarrápidos.",
        precio: 499,
        img: "playstation_5.jpg"
    },
    {
        id: 4,
        nombre: "Nintendo Switch",
        descripcion: "La Nintendo Switch es una consola de videojuegos híbrida que se puede usar tanto en modo portátil como en modo de sobremesa. Con una amplia biblioteca de juegos exclusivos de Nintendo y la flexibilidad de jugar en cualquier lugar, es perfecta para jugadores de todas las edades.",
        precio: 299,
        img: "nintendo_switch.jpg"
    }
];
