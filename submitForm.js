document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional
    
    const nombre = document.getElementById('name').value;
    const telefono = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Crea un objeto con los datos que se enviarán
    const clienteData = {
        nombre: nombre,
        telefono: telefono,
        email: email
    };

    // Envía la solicitud POST
    fetch('http://localhost:8080/api/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(clienteData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Cliente guardado exitosamente');
        console.log(data); // Muestra los datos devueltos por el backend
    })
    .catch(error => {
        alert('Error al guardar el cliente');
        console.error(error);
    });
});
