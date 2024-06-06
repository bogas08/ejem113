<!DOCTYPE html>
<html>
<head>
  <title>Formulario de Reserva de Aerolínea</title>
  <style>
    label {
      display: block;
      margin-top: 10px;
    }
    input[type="submit"] {
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <h1>Formulario de Reserva de Aerolínea</h1>
  
  <form id="reservaForm">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" required>
    
    <label for="origen">Origen:</label>
    <input type="text" id="origen" required>
    
    <label for="destino">Destino:</label>
    <input type="text" id="destino" required>
    
    <label for="fecha">Fecha de viaje:</label>
    <input type="date" id="fecha" required>
    
    <label for="asientos">Número de asientos:</label>
    <input type="number" id="asientos" required>
    
    <input type="submit" value="Reservar">
  </form>
  
  <script>
    document.getElementById("reservaForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Evita que se envíe el formulario
      
      // Obtiene los valores del formulario
      var nombre = document.getElementById("nombre").value;
      var email = document.getElementById("email").value;
      var origen = document.getElementById("origen").value;
      var destino = document.getElementById("destino").value;
      var fecha = document.getElementById("fecha").value;
      var asientos = document.getElementById("asientos").value;
      
      // Puedes realizar otras validaciones aquí antes de enviar los datos
      
      // Enviar los datos al servidor (aquí se simula una solicitud de AJAX)
      enviarReserva(nombre, email, origen, destino, fecha, asientos);
    });
    
    function enviarReserva(nombre, email, origen, destino, fecha, asientos) {
      // Aquí puedes realizar la lógica de envío de la reserva al servidor
      // Por ejemplo, puedes enviar los datos a través de una solicitud AJAX
      
      // Muestra un mensaje de éxito
      alert("¡Reserva realizada con éxito!");
      
      // Restablece el formulario
      document.getElementById("reservaForm").reset();
    }
  </script>
</body>
</html>
