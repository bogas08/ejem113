document.querySelector('button').addEventListener('click', function() {
    var origen = document.getElementById('origen').value;
    var destino = document.getElementById('destino').value;
    var fecha = document.getElementById('fecha').value;
    var cantidad = document.getElementById('cantidad').value;

    var vuelosDisponibles = getVuelosDisponibles(origen, destino, fecha, cantidad);
    mostrarResultados(vuelosDisponibles);
});

function getVuelosDisponibles(origen, destino, fecha, cantidad) {
    // Ejemplo de vuelos disponibles (puedes reemplazarlos con tu lógica de datos)
    var vuelos = [
        function getVuelosDisponibles(origen, destino, fecha, cantidad) {
            var vuelos = [
                // Vuelos desde La Paz
                { origen: 'La Paz', destino: 'Santa Cruz', horaPartida: '05:00 AM', horaLlegada: '06:30 AM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Aero Connect', avion: 'Boeing 737' },
                { origen: 'La Paz', destino: 'Santa Cruz', horaPartida: '13:00 PM', horaLlegada: '14:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Aero Connect', avion: 'Boeing 737' },
                { origen: 'La Paz', destino: 'Santa Cruz', horaPartida: '21:00 PM', horaLlegada: '22:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Aero Connect', avion: 'Boeing 737' },
                // Más vuelos desde La Paz
                { origen: 'La Paz', destino: 'Cochabamba', horaPartida: '05:00 AM', horaLlegada: '06:30 AM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Air Bolivia', avion: 'Airbus A320' },
                { origen: 'La Paz', destino: 'Cochabamba', horaPartida: '13:00 PM', horaLlegada: '14:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Air Bolivia', avion: 'Airbus A320' },
                { origen: 'La Paz', destino: 'Cochabamba', horaPartida: '21:00 PM', horaLlegada: '22:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Air Bolivia', avion: 'Airbus A320' },
                // Vuelos desde Santa Cruz
                { origen: 'Santa Cruz', destino: 'La Paz', horaPartida: '05:00 AM', horaLlegada: '06:30 AM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Aero Connect', avion: 'Boeing 737' },
                { origen: 'Santa Cruz', destino: 'La Paz', horaPartida: '13:00 PM', horaLlegada: '14:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Aero Connect', avion: 'Boeing 737' },
                { origen: 'Santa Cruz', destino: 'La Paz', horaPartida: '21:00 PM', horaLlegada: '22:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Aero Connect', avion: 'Boeing 737' },
                // Más vuelos desde Santa Cruz
                { origen: 'Santa Cruz', destino: 'Cochabamba', horaPartida: '05:00 AM', horaLlegada: '06:30 AM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Boliviana de Aviación', avion: 'Boeing 767' },
                { origen: 'Santa Cruz', destino: 'Cochabamba', horaPartida: '13:00 PM', horaLlegada: '14:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Boliviana de Aviación', avion: 'Boeing 767' },
                { origen: 'Santa Cruz', destino: 'Cochabamba', horaPartida: '21:00 PM', horaLlegada: '22:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Boliviana de Aviación', avion: 'Boeing 767' },
                // Vuelos desde Cochabamba
                { origen: 'Cochabamba', destino: 'La Paz', horaPartida: '05:00 AM', horaLlegada: '06:30 AM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Air Bolivia', avion: 'Airbus A320' },
                { origen: 'Cochabamba', destino: 'La Paz', horaPartida: '13:00 PM', horaLlegada: '14:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Air Bolivia', avion: 'Airbus A320' },
                { origen: 'Cochabamba', destino: 'La Paz', horaPartida: '21:00 PM', horaLlegada: '22:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Air Bolivia', avion: 'Airbus A320' },
                // Más vuelos desde Cochabamba
                { origen: 'Cochabamba', destino: 'Santa Cruz', horaPartida: '05:00 AM', horaLlegada: '06:30 AM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Boliviana de Aviación', avion: 'Boeing 767' },
                { origen: 'Cochabamba', destino: 'Santa Cruz', horaPartida: '13:00 PM', horaLlegada: '14:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Boliviana de Aviación', avion: 'Boeing 767' },
                { origen: 'Cochabamba', destino: 'Santa Cruz', horaPartida: '21:00 PM', horaLlegada: '22:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Boliviana de Aviación', avion: 'Boeing 767' },
                // Vuelos desde Sucre
                { origen: 'Sucre', destino: 'La Paz', horaPartida: '05:00 AM', horaLlegada: '06:30 AM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Air Bolivia', avion: 'Airbus A320' },
                { origen: 'Sucre', destino: 'La Paz', horaPartida: '13:00 PM', horaLlegada: '14:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Air Bolivia', avion: 'Airbus A320' },
                { origen: 'Sucre', destino: 'La Paz', horaPartida: '21:00 PM', horaLlegada: '22:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Air Bolivia', avion: 'Airbus A320' },
                // Más vuelos desde Sucre
                { origen: 'Sucre', destino: 'Cochabamba', horaPartida: '05:00 AM', horaLlegada: '06:30 AM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Amaszonas', avion: 'Embraer 190' },
                { origen: 'Sucre', destino: 'Cochabamba', horaPartida: '13:00 PM', horaLlegada: '14:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Amaszonas', avion: 'Embraer 190' },
                { origen: 'Sucre', destino: 'Cochabamba', horaPartida: '21:00 PM', horaLlegada: '22:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Amaszonas', avion: 'Embraer 190' },
                // Vuelos desde Potosí
                { origen: 'Potosí', destino: 'La Paz', horaPartida: '05:00 AM', horaLlegada: '06:30 AM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Amaszonas', avion: 'Embraer 190' },
                { origen: 'Potosí', destino: 'La Paz', horaPartida: '13:00 PM', horaLlegada: '14:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Amaszonas', avion: 'Embraer 190' },
                { origen: 'Potosí', destino: 'La Paz', horaPartida: '21:00 PM', horaLlegada: '22:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Amaszonas', avion: 'Embraer 190' },
                // Más vuelos desde Potosí
                { origen: 'Potosí', destino: 'Cochabamba', horaPartida: '05:00 AM', horaLlegada: '06:30 AM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'EcoJet', avion: 'Boeing 737' },
                { origen: 'Potosí', destino: 'Cochabamba', horaPartida: '13:00 PM', horaLlegada: '14:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'EcoJet', avion: 'Boeing 737' },
                { origen: 'Potosí', destino: 'Cochabamba', horaPartida: '21:00 PM', horaLlegada: '22:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'EcoJet', avion: 'Boeing 737' },
                // Vuelos desde Tarija
                { origen: 'Tarija', destino: 'La Paz', horaPartida: '05:00 AM', horaLlegada: '06:30 AM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Amaszonas', avion: 'Embraer 190' },
                { origen: 'Tarija', destino: 'La Paz', horaPartida: '13:00 PM', horaLlegada: '14:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Amaszonas', avion: 'Embraer 190' },
                { origen: 'Tarija', destino: 'La Paz', horaPartida: '21:00 PM', horaLlegada: '22:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Amaszonas', avion: 'Embraer 190' },
                // Más vuelos desde Tarija
                { origen: 'Tarija', destino: 'Santa Cruz', horaPartida: '05:00 AM', horaLlegada: '06:30 AM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Boliviana de Aviación', avion: 'Boeing 767' },
                { origen: 'Tarija', destino: 'Santa Cruz', horaPartida: '13:00 PM', horaLlegada: '14:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Boliviana de Aviación', avion: 'Boeing 767' },
                { origen: 'Tarija', destino: 'Santa Cruz', horaPartida: '21:00 PM', horaLlegada: '22:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Boliviana de Aviación', avion: 'Boeing 767' },
                // Vuelos desde Trinidad
                { origen: 'Trinidad', destino: 'La Paz', horaPartida: '05:00 AM', horaLlegada: '06:30 AM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Amaszonas', avion: 'Embraer 190' },
                { origen: 'Trinidad', destino: 'La Paz', horaPartida: '13:00 PM', horaLlegada: '14:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Amaszonas', avion: 'Embraer 190' },
                { origen: 'Trinidad', destino: 'La Paz', horaPartida: '21:00 PM', horaLlegada: '22:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Amaszonas', avion: 'Embraer 190' },
                // Más vuelos desde Trinidad
                { origen: 'Trinidad', destino: 'Santa Cruz', horaPartida: '05:00 AM', horaLlegada: '06:30 AM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Boliviana de Aviación', avion: 'Boeing 767' },
                { origen: 'Trinidad', destino: 'Santa Cruz', horaPartida: '13:00 PM', horaLlegada: '14:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Boliviana de Aviación', avion: 'Boeing 767' },
                { origen: 'Trinidad', destino: 'Santa Cruz', horaPartida: '21:00 PM', horaLlegada: '22:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Boliviana de Aviación', avion: 'Boeing 767' },
                // Vuelos desde Cobija
                { origen: 'Cobija', destino: 'La Paz', horaPartida: '05:00 AM', horaLlegada: '06:30 AM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Amaszonas', avion: 'Embraer 190' },
                { origen: 'Cobija', destino: 'La Paz', horaPartida: '13:00 PM', horaLlegada: '14:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Amaszonas', avion: 'Embraer 190' },
                { origen: 'Cobija', destino: 'La Paz', horaPartida: '21:00 PM', horaLlegada: '22:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Amaszonas', avion: 'Embraer 190' },
                // Más vuelos desde Cobija
                { origen: 'Cobija', destino: 'Santa Cruz', horaPartida: '05:00 AM', horaLlegada: '06:30 AM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Boliviana de Aviación', avion: 'Boeing 767' },
                { origen: 'Cobija', destino: 'Santa Cruz', horaPartida: '13:00 PM', horaLlegada: '14:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Boliviana de Aviación', avion: 'Boeing 767' },
                { origen: 'Cobija', destino: 'Santa Cruz', horaPartida: '21:00 PM', horaLlegada: '22:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Boliviana de Aviación', avion: 'Boeing 767' },
                // Vuelos desde Riberalta
                { origen: 'Riberalta', destino: 'La Paz', horaPartida: '05:00 AM', horaLlegada: '06:30 AM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'EcoJet', avion: 'Boeing 737' },
                { origen: 'Riberalta', destino: 'La Paz', horaPartida: '13:00 PM', horaLlegada: '14:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'EcoJet', avion: 'Boeing 737' },
                { origen: 'Riberalta', destino: 'La Paz', horaPartida: '21:00 PM', horaLlegada: '22:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'EcoJet', avion: 'Boeing 737' },
                // Más vuelos desde Riberalta
                { origen: 'Riberalta', destino: 'Santa Cruz', horaPartida: '05:00 AM', horaLlegada: '06:30 AM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'EcoJet', avion: 'Boeing 737' },
                { origen: 'Riberalta', destino: 'Santa Cruz', horaPartida: '13:00 PM', horaLlegada: '14:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'EcoJet', avion: 'Boeing 737' },
                { origen: 'Riberalta', destino: 'Santa Cruz', horaPartida: '21:00 PM', horaLlegada: '22:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'EcoJet', avion: 'Boeing 737' },
                // Vuelos desde Villazón
                { origen: 'Villazón', destino: 'La Paz', horaPartida: '05:00 AM', horaLlegada: '06:30 AM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Air Bolivia', avion: 'Airbus A320' },
                { origen: 'Villazón', destino: 'La Paz', horaPartida: '13:00 PM', horaLlegada: '14:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Air Bolivia', avion: 'Airbus A320' },
                { origen: 'Villazón', destino: 'La Paz', horaPartida: '21:00 PM', horaLlegada: '22:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Air Bolivia', avion: 'Airbus A320' },
                // Más vuelos desde Villazón
                { origen: 'Villazón', destino: 'Cochabamba', horaPartida: '05:00 AM', horaLlegada: '06:30 AM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Air Bolivia', avion: 'Airbus A320' },
                { origen: 'Villazón', destino: 'Cochabamba', horaPartida: '13:00 PM', horaLlegada: '14:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Air Bolivia', avion: 'Airbus A320' },
                { origen: 'Villazón', destino: 'Cochabamba', horaPartida: '21:00 PM', horaLlegada: '22:30 PM', cabina: 'Económica', duracion: '1h 30m', aerolinea: 'Air Bolivia', avion: 'Airbus A320' },
               
        
        // Agrega más vuelos según tus necesidades
    ];

    // Filtra los vuelos según los criterios seleccionados
    var vuelosFiltrados = vuelos.filter(function(vuelo) {
        return vuelo.origen === origen && vuelo.destino === destino;
    });

    return vuelosFiltrados;
},

function mostrarResultados(vuelos) {
    var resultadosDiv = document.createElement('div');
    resultadosDiv.id = 'resultados';

    if (vuelos.length === 0) {
        resultadosDiv.innerHTML = 'No se encontraron vuelos disponibles.';
    } else {
        vuelos.forEach(function(vuelo) {
            var vueloDiv = document.createElement('div');
            vueloDiv.classList.add('vuelo');

            var horaPartidaP = document.createElement('p');
            horaPartidaP.textContent = 'Hora de partida: ' + vuelo.horaPartida;
            vueloDiv.appendChild(horaPartidaP);

            var horaLlegadaP = document.createElement('p');
            horaLlegadaP.textContent = 'Hora de llegada: ' + vuelo.horaLlegada;
            vueloDiv.appendChild(horaLlegadaP);

            var cabinaP = document.createElement('p');
            cabinaP.textContent = 'Cabina: ' + vuelo.cabina;
            vueloDiv.appendChild(cabinaP);

            var duracionP = document.createElement('p');
            duracionP.textContent = 'Duración del vuelo: ' + vuelo.duracion;
            vueloDiv.appendChild(duracionP);

            var aerolineaP = document.createElement('p');
            aerolineaP.textContent = 'Aerolínea: ' + vuelo.aerolinea;
            vueloDiv.appendChild(aerolineaP);

            var avionP = document.createElement('p');
            avionP.textContent = 'Avión: ' + vuelo.avion;
            vueloDiv.appendChild(avionP);

            resultadosDiv.appendChild(vueloDiv);
        });
    }

    var main = document.querySelector('main');
    var resultadosAnteriores = document.getElementById('resultados');
    if (resultadosAnteriores) {
        main.removeChild(resultadosAnteriores);
    }
    main.appendChild(resultadosDiv);
}]}
