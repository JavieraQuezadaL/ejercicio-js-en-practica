document.getElementById('FormContacto').addEventListener('submit', function (event) {
    event.preventDefault();
    const nombreInput = document.getElementById('nombre');
    const nombreValue = nombreInput.value.trim();
    const nombreRegex = /^[a-zA-Z]+$/;

    if (!nombreRegex.test(nombreValue)) {
        mostrarMensajeError('El nombre debe contener solo caracteres alfabéticos (A-Z, a-z).');
        return;
    }


    mostrarMensajeExito('Formulario enviado con éxito.');
});

function mostrarMensajeError(mensaje) {
    const mensajeError = document.createElement('div');
    mensajeError.className = 'error-message';
    mensajeError.textContent = mensaje;

    const form = document.getElementById('FormContacto');
    form.appendChild(mensajeError);
}

function mostrarMensajeExito(mensaje) {
    const mensajeExito = document.createElement('div');
    mensajeExito.className = 'success-message';
    mensajeExito.textContent = mensaje;

    const form = document.getElementById('FormContacto');
    form.appendChild(mensajeExito);
}