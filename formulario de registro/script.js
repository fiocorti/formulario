document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const apellido = document.getElementById("apellido").value;
  const nombre = document.getElementById("nombre").value;
  const dni = document.getElementById("dni").value;
  const fecha = new Date(document.getElementById("fechaNacimiento").value);
  const email = document.getElementById("email").value;

  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido)) {
    alert("Apellido inválido");
    return;
  }

  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
    alert("Nombre inválido");
    return;
  }

  if (!/^\d{8}$/.test(dni)) {
    alert("DNI inválido. Debe tener 8 dígitos.");
    return;
  }

  if (fecha.getFullYear() <= 2006) {
    alert("Debes haber nacido después de 2006.");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Email inválido.");
    return;
  }

  alert("¡Formulario validado correctamente!");
});

document.getElementById("preguntasBtn").addEventListener("click", function() {
  const r1 = prompt("¿Cuál es tu nacionalidad?");
  const r2 = prompt("¿Cuál es tu color favorito?");
  const r3 = prompt("¿Cómo se llama tu mascota?");

  document.getElementById("respuestas").innerHTML = `
    <p><strong>Nacionalidad:</strong> ${r1}</p>
    <p><strong>Color favorito:</strong> ${r2}</p>
    <p><strong>Nombre de mascota:</strong> ${r3}</p>
  `;
});
