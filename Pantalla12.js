
    const form = document.getElementById("formulario-pago");
    const mensajeDiv = document.getElementById("mensaje-error");

    form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const nombre = document.getElementById("nombre").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const tarjeta = document.getElementById("tarjeta").value.trim();
    const cvc = document.getElementById("cvc").value.trim();
    const caducidad = document.getElementById("caducidad").value;

    mensajeDiv.innerText = "";
    mensajeDiv.className = "";

    if (!nombre || !direccion || !tarjeta || !cvc || !caducidad) {
      mensajeDiv.className = "alert alert-danger";
      mensajeDiv.innerText = "Por favor, complete todos los campos.";
      return;
    }

    if (!direccion.includes("@") || !direccion.includes(".")) {
      mensajeDiv.className = "alert alert-danger";
      mensajeDiv.innerText = "Ingrese un correo electrónico válido.";
      return;
    }

    if (tarjeta.length !== 16 || isNaN(tarjeta)) {
    mensajeDiv.className = "alert alert-danger";
    mensajeDiv.innerText = "El número de tarjeta debe tener exactamente 16 dígitos numéricos.";
    return;
    }

    if (cvc.length !== 3 || isNaN(cvc)) {
      mensajeDiv.className = "alert alert-danger";
      mensajeDiv.innerText = "Ingrese un CVC válido (3 dígitos numéricos).";
      return;
    }

    mensajeDiv.className = "alert alert-success";
    mensajeDiv.innerText = "Pago procesado correctamente. ✅";

    form.reset();
  });

