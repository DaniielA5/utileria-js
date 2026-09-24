        const form = document.getElementById("formPrincipal");
        const modal = document.getElementById("modalEdad");
        const inputPassword = document.getElementById("password");
        const barra = document.getElementById("barraFortaleza");
        const textoFortaleza = document.getElementById("textoFortaleza");

        inputPassword.addEventListener("input", function () {
            if (inputPassword.value === "") {
                delete inputPassword.dataset.nivel;
                delete barra.dataset.nivel;
                delete textoFortaleza.dataset.nivel;
                textoFortaleza.textContent = "";
                return;
            }
            const nivel = medirFortalezaPassword(inputPassword.value);
            const clave = nivel === "débil" ? "debil" : nivel;
            inputPassword.dataset.nivel = clave;
            barra.dataset.nivel = clave;
            textoFortaleza.dataset.nivel = clave;
            textoFortaleza.textContent = "Fortaleza: " + nivel;
        });

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const correo = document.getElementById("correo").value;
            const fecha = document.getElementById("fechaNacimiento").value;
            const codigo = document.getElementById("codigoPostal").value;
            const telefono = document.getElementById("telefono").value;
            const password = inputPassword.value;

            const nombreOk = soloLetras(nombre);
            const correoOk = validarCorreo(correo);
            const fechaOk = fecha !== "" && calcularEdad(fecha) >= 0;
            const codigoOk = /^\d+$/.test(codigo) && validarLongitud(codigo, 5);
            const passwordOk = validarPassword(password);

            document.getElementById("errorNombre").textContent = nombreOk ? "" : "Solo letras permitidas";
            document.getElementById("errorCorreo").textContent = correoOk ? "" : "Correo inválido";
            document.getElementById("errorFecha").textContent = fechaOk ? "" : "Fecha inválida";
            document.getElementById("errorCodigo").textContent = codigoOk ? "" : "Solo números, máximo 5 dígitos";
            document.getElementById("errorPassword").textContent = passwordOk ? "" : "Mínimo 8 caracteres con mayúscula, minúscula, número y símbolo";

            if (!(nombreOk && correoOk && fechaOk && codigoOk && passwordOk)) return;

            document.getElementById("nombreResultado").textContent = nombre;
            document.getElementById("edadResultado").textContent = calcularEdad(fecha);
            document.getElementById("mayorEdadResultado").textContent = esMayorDeEdad(fecha) ? "Sí" : "No";
            document.getElementById("telefonoResultado").textContent = formatearTelefono(telefono);

            modal.showModal();
        });

        document.getElementById("cerrarModal").addEventListener("click", function () {
            modal.close();
        });
