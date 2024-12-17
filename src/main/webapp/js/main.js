import { manejarFormulario, mostrarImagen, cerrarImagenGrande } from './function.js';

document.getElementById("formularioDatos").addEventListener("submit", manejarFormulario);

window.mostrarImagen = mostrarImagen;
window.cerrarImagenGrande = cerrarImagenGrande;
