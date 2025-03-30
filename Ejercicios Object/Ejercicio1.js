// Objeto hotel con el arreglo de habitaciones
const hotel = {
    habitaciones: [0, 0, 0, 0, 0]
  };
  
  // Función para mostrar estado de habitaciones
  function mostrarEstado() {
    let estado = "Estado de habitaciones:\n";
    for (let i = 0; i < hotel.habitaciones.length; i++) {
      estado += `Habitación ${i + 1}: ${hotel.habitaciones[i] === 0 ? "Libre" : "Ocupada"}\n`;
    }
    alert(estado);
  }
  
  // Función para contar habitaciones libres
  function contarHabitacionesLibres() {
    return hotel.habitaciones.filter(habitacion => habitacion === 0).length;
  }
  
  // Función para reservar una habitación
  function reservarHabitacion(num) {
    if (num < 1 || num > 5) {
      alert("Número de habitación inválido. Usa 1-5.");
    } else if (hotel.habitaciones[num - 1] === 1) {
      alert("Habitación ya ocupada.");
    } else {
      hotel.habitaciones[num - 1] = 1;
      alert(`Habitación ${num} reservada con éxito.`);
    }
  }
  
  // Función para liberar una habitación
  function liberarHabitacion(num) {
    if (num < 1 || num > 5) {
      alert("Número de habitación inválido. Usa 1-5.");
    } else if (hotel.habitaciones[num - 1] === 0) {
      alert("Habitación ya está libre.");
    } else {
      hotel.habitaciones[num - 1] = 0;
      alert(`Habitación ${num} liberada con éxito.`);
    }
  }
  
  // Menú principal
  while (true) {
    let opcion = prompt("1. Ver estado\n2. Reservar\n3. Liberar\n4. Salir\nElige una opción:");
  
    if (opcion === "1") {
      mostrarEstado();
      alert(`Habitaciones libres: ${contarHabitacionesLibres()}`);
    } else if (opcion === "2") {
      let num = parseInt(prompt("Ingresa el número de habitación (1-5):"));
      reservarHabitacion(num);
      alert(`Habitaciones libres: ${contarHabitacionesLibres()}`);
    } else if (opcion === "3") {
      let num = parseInt(prompt("Ingresa el número de habitación (1-5):"));
      liberarHabitacion(num);
      alert(`Habitaciones libres: ${contarHabitacionesLibres()}`);
    } else if (opcion === "4") {
      alert("Saliendo...");
      break;
    } else {
      alert("Opción inválida.");
    }
  }  
