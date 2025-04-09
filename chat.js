function enviarMensaje() {
  const input = document.getElementById('chat-input');
  const output = document.getElementById('chat-output');
  const mensaje = input.value.trim();

  if (mensaje !== "") {
    // Mostrar mensaje en pantalla
    const nuevoMensaje = document.createElement('div');
    nuevoMensaje.classList.add('mensaje');
    nuevoMensaje.innerHTML = `<strong>🧑‍🦲 Tú:</strong> ${mensaje}`;
    output.appendChild(nuevoMensaje);

    // Limpiar input
    input.value = "";

    // Scroll automático
    output.scrollTop = output.scrollHeight;

    // Aquí puedes agregar una respuesta automática de Alfred, si quieres
    const respuesta = document.createElement('div');
    respuesta.classList.add('mensaje');
    respuesta.innerText = `🤵 Alfred: Estoy procesando tu mensaje...`;
    output.appendChild(respuesta);
    output.scrollTop = output.scrollHeight;
  }
}
