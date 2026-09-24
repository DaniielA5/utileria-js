const CORREO_REGISTRADO = "camaron00@gmail.com";
const CONTRASENA_REGISTRADA = "Camaron123!";

document.getElementById("formLogin").addEventListener("submit", function (event) {
    event.preventDefault();

    const correo = document.getElementById("loginCorreo").value;
    const password = document.getElementById("loginPassword").value;
    const mensaje = document.getElementById("mensajeLogin");

    const correoOk = validarCorreo(correo);
    const passwordOk = validarPassword(password);

    document.getElementById("errorLoginCorreo").textContent = correoOk ? "" : "Correo inválido";
    document.getElementById("errorLoginPassword").textContent = passwordOk ? "" : "Formato de contraseña inválido";

    if (!(correoOk && passwordOk)) {
        mensaje.textContent = "";
        return;
    }

    const coincide = correo.toLowerCase() === CORREO_REGISTRADO && password === CONTRASENA_REGISTRADA;
    mensaje.textContent = coincide ? "Login exitoso" : "Correo o contraseña incorrectos";
    mensaje.classList.toggle("fallo", !coincide);
});