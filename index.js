// Caso de la vida real: tienda en línea con productos reales de
// Temu (chaqueta, smartwatch, cuaderno pirata y mochila)
// ============================================================
import express from "express";
import path from "path";

const app = express();

// ------------------------------------------------------------
// DATOS: catálogo de 4 productos reales de la tienda en línea Temu
// "tipo" es una etiqueta corta que usamos para filtrar con query. 
// El "precio" es el estimado con promociones que mostraba la página.
// ------------------------------------------------------------
const productos = [
  {
    id: 1,
    producto: "Chaqueta con capucha con cremallera para hombre (otoño-invierno)",
    tipo: "ropa",
    categoria: "Hoodies y sudaderas para hombre",
    precio: 20.12,
    precioAnterior: 34.3,
    descuento: "41%",
    moneda: "USD",
    colores: ["Caqui", "Color marino", "Gris claro", "Negro", "Gris oscuro"],
    tallas: ["M", "L", "XL", "XXL", "XXXL"],
    calificacion: 4.7,
    resenas: 1715,
    ventas: "88,9K+",
    entrega: "10 días hábiles",
    envioGratis: true,
    url: "https://www.temu.com/ec/chaqueta-con-capucha-de-moda-para-hombre--invierno-estilo--y-americano-sudadera-casual-con-cremallera-para-exteriores--y-calido-ideal-para--g-601099663561476.html?refer_page_name=goods&refer_page_id=10032_1793059784847_xsixmishee&refer_page_sn=10032&_x_sessn_id=gwpkjdhybz",
  },
  {
    id: 2,
    producto: "Smartwatch para hombres y mujeres (llamadas inalámbricas, SMS, modos deportivos)",
    tipo: "tecnologia",
    categoria: "Smartwatch y accesorios",
    precio: 6.3,
    precioAnterior: 22.84,
    descuento: "72%",
    moneda: "USD",
    colores: ["Negro", "Dorado", "Plateado", "Rosa"],
    calificacion: 4.7,
    resenas: 2915,
    ventas: "79,8K+",
    vendedor: "ERUN",
    entrega: "11 días hábiles",
    envioGratis: true,
    url: "https://www.temu.com/ec/-smartwatch---para-hombres-como-para-mujeres-regalo-de-san-valentin--inalambricas-sms-multiples--deportivos-control-remoto-de-camara-rastreador-de-actividad-fisica-compatible-con-iphone-y--carga-usb-correa-de-silicona--inteligente-g-606135394363392.html",
  },
  {
    id: 3,
    producto: "Conjunto cuaderno de cuero vintage estilo pirata + 2 bolígrafos de gel",
    tipo: "oficina",
    categoria: "Oficina y escuela",
    precio: 4.01,
    precioAnterior: 12.82,
    descuento: "68%",
    moneda: "USD",
    colores: ["Marrón", "Negro", "Azul", "Verde", "Rojo marrón", "Rojo"],
    incluye: ["Cuaderno pirata vintage", "2 bolígrafos de gel negros y dorados"],
    calificacion: 4.8,
    resenas: 4564,
    ventas: "82,8K+",
    entrega: "10 días hábiles",
    envioGratis: true,
    url: "https://www.temu.com/ec/-conjunto--tres-articulos-un-cuaderno-de-cuero--acabado-mate-y--boligrafos-de-gel-negros-y-dorados-con-un--de---de-tema-pirata-retro--de---esta-equipado-con-un-cierre-metalico-y-encuadernacion--lo-que-lo-convierte-en-un--de-escritura-divertido-y--g-601101315823890.html",
  },
  {
    id: 4,
    producto: "Mochila unisex de gran capacidad, estilo minimalista",
    tipo: "bolsos",
    categoria: "Mochilas para estudiantes",
    precio: 14.23,
    precioAnterior: 48.84,
    descuento: "70%",
    moneda: "USD",
    colores: ["Gris"],
    coloresAgotados: ["Negro"],
    calificacion: 4.8,
    resenas: 131,
    ventas: "4,4K+",
    entrega: "10 días hábiles",
    envioGratis: true,
    url: "https://www.temu.com/ec/mochila-unisex-de-gran-capacidad-de-estilo-minimalista-a---de-material--calidad--y-resistente-a-los-aranazos--un-estilo--y--de-bolso-de--casual-con-multiples-bolsillos-y-compartimentos-adecuada-para-desplazamientos-diarios-y-viajes-para-g-601100046820079.html",
  },
];

// ------------------------------------------------------------
// MIDDLEWARE GLOBAL: leer JSON
// ------------------------------------------------------------
// Aplicación práctica: cuando el cliente agrega un producto al
// carrito, la página envía los datos en formato JSON. Este
// middleware los convierte en un objeto accesible desde req.body.
// Debe ir ANTES de las rutas que lo usan.
app.use(express.json());

// ------------------------------------------------------------
// RUTAS
// ------------------------------------------------------------
// Una ruta es la "vitrina" del servidor: combina un método HTTP
// (GET, POST...) con una URL.
// Aplicación práctica: así como una tienda tiene secciones
// (inicio, ofertas, carrito), el servidor tiene una ruta distinta
// para cada una.

app.get("/", (req, res) => {
  res.send("Bienvenido a la tienda en línea. ¡Mira el catálogo en /tienda!");
});

app.get("/ofertas", (req, res) => {
  res.send("Ofertas del día: hasta 72% de descuento en productos seleccionados");
});

// ------------------------------------------------------------
// RESPONSE (respuesta): lo que el servidor le devuelve al cliente
// ------------------------------------------------------------

// res.send(): devuelve texto simple.
// Aplicación práctica: el aviso de envío que aparece en la tienda.
app.get("/aviso-envio", (req, res) => {
  res.send("Envío gratis en todos los productos. Entrega en 10 a 11 días hábiles");
});

// res.json(): devuelve datos estructurados, ideal para que otra
// aplicación (por ejemplo una app móvil) los consuma.
// Aplicación práctica: la app de compras consulta la chaqueta con
// capucha y recibe su precio, colores, tallas y calificación en JSON.
// Los datos están en el arreglo "productos" del inicio del archivo.
app.get("/chaqueta-temu", (req, res) => {
  res.json(productos[0]);
});