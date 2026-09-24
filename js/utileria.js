

function validarCorreo(correo) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}

 
function soloLetras(texto) {
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  return regex.test(texto);
}

function validarLongitud(numero, maxLongitud) {
  return String(numero).length <= maxLongitud;
}


function calcularEdad(fechaNacimiento) {
  let nacimiento;
  if (typeof fechaNacimiento === "string") {
    const [anio, mes, dia] = fechaNacimiento.split("-").map(Number);
    nacimiento = new Date(anio, mes - 1, dia);
  } else {
    nacimiento = new Date(fechaNacimiento);
  }

  const hoy = new Date();
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  return edad;
}

function esMayorDeEdad(fechaNacimiento) {
  return calcularEdad(fechaNacimiento) >= 18;
}

function validarPassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;
  return regex.test(password);
}
function formatearTelefono(numero) {
  const soloDigitos = String(numero).replace(/\D/g, "");
  if (soloDigitos.length !== 10) {
    return numero;
  }
  return `(${soloDigitos.slice(0, 3)}) ${soloDigitos.slice(3, 6)}-${soloDigitos.slice(6)}`;
}


function medirFortalezaPassword(password) {
  let puntos = 0;
  if (password.length >= 8) puntos++;
  if (/[a-z]/.test(password)) puntos++;
  if (/[A-Z]/.test(password)) puntos++;
  if (/\d/.test(password)) puntos++;
  if (/[^a-zA-Z0-9]/.test(password)) puntos++;

  if (puntos <= 2) return "débil";
  if (puntos <= 4) return "media";
  return "fuerte";
}