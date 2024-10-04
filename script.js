function mostrarImagen(element) {
    const img = element.querySelector('img');
    img.style.display = 'block';
}

function ocultarImagen(element) {
    const img = element.querySelector('img');
    img.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    // Manejo del envío del formulario
    const combinedForm = document.getElementById('combined-form');
    if (combinedForm) {
        combinedForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el envío del formulario

            const name = document.getElementById('name').value;
            const eventSelection = document.getElementById('event').value;

            // Mostrar el mensaje de confirmación
            const confirmationMessage = document.getElementById('confirmation-message');
            confirmationMessage.innerHTML = `¡Gracias por registrarte, ${name}! Te has inscrito en el evento: ${eventSelection}`;
            confirmationMessage.style.display = 'block';

            // Opcional: Ocultar el mensaje después de unos segundos
            setTimeout(() => {
                confirmationMessage.style.display = 'none';
            }, 5000);
        });
    }

    // Agregar eventos de mouseover y mouseout a las tarjetas de eventos
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
        card.addEventListener('mouseover', mostrarImagen);
        card.addEventListener('mouseout', ocultarImagen);
    });
});
