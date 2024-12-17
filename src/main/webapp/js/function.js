export function mostrarImagen(imagen) {
  const urlImagen = imagen.src;
  const imagenVista = document.getElementById("imagenGrandeVista");
  const imagenesGaleria = document.querySelectorAll(".galeria-item");

  imagenVista.src = urlImagen;
  document.getElementById("contenedorImagenGrande").style.display = "block";

  // Ocultar imágenes en la galería
  imagenesGaleria.forEach(item => item.classList.add("imagen-oculta"));
}

export function cerrarImagenGrande() {
  const imagenesGaleria = document.querySelectorAll(".galeria-item");

  document.getElementById("contenedorImagenGrande").style.display = "none";

  // Mostrar nuevamente todas las imágenes
  imagenesGaleria.forEach(item => item.classList.remove("imagen-oculta"));
}

export function manejarFormulario(event) {
  event.preventDefault();

  const correo = document.getElementById("correo").value;
  const nombreCompleto = document.getElementById("nombreCompleto").value;
  const horario = document.querySelector('input[name="horario"]:checked').value;
  const notificaciones = document.getElementById("recibirNotificaciones").checked ? 'Sí' : 'No';

  const tablaDatos = document.getElementById("datosTabla");
  const fila = document.createElement("tr");

  fila.innerHTML = `
    <td>${correo}</td>
    <td>${nombreCompleto}</td>
    <td>${horario}</td>
    <td>${notificaciones}</td>
  `;

  tablaDatos.appendChild(fila);
  document.getElementById("formularioDatos").reset();
}
