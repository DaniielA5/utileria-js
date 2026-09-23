

function validarCorreo(correo) {
    const regex = /^[^\@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

 
function soloLetras(texto) {
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  return regex.test(texto);
}

function validarLongitud(valor, maxLongitud) {
    return String(valor).length <= maxLongitud;
}


function calcularEdad(fechaNamiento) {
    const nacimiento =new Date (fechaNamiento);
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
        
    }
    return edad; 
}

function esMayorEdad(fechaNamiento) {
    return calcularEdad(fechaNamiento) >= 18;
}


function validarContrasena(contrasena){
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;
    return regex.test(contrasena);
}

function formatearTelefono(numero){ 
    const soloDigitos =String(numero).replace(/\D/g, "");
    if (soloDigitos.length !== 10){
        return numero;
    }
    return `(${soloDigitos.slice(0,3)}) ${soloDigitos.slice(3,6)}-${soloDigitos.slice(6)}`;
}


function medirFortalezaContrasena(contrasena) {
    let puntos =0 ;
    if (contrasena.length >= 8 ) puntos++;
    if (/[a-z]/.test(contrasena)) puntos++;
    if (/[A-Z]/.test(contrasena)) puntos++;
    if (/\d/.test(contrasena)) puntos++ ;
    if (/[^a-zA-Z0-9]/.test(contrasena)) puntos++;

    if (puntos <= 2) return "debil";
    if (puntos <= 4) return "media";
    return "fuerte";
}