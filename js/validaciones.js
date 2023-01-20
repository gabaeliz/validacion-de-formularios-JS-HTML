export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput], { input }
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-container--invalid").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    } else {
        input.parentElement.classList.add("input-container--invalid");
    }
};

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
]

const mensajesDeError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacío"
    },
    email: {
        valueMissing: "Este campo no puede estar vacío",
        typeMismatch: "El correo no es válido"
    },
    password: {
        valueMissing: "Este campo no puede estar vacío",
        patterMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacío",
        customError: "Debes de ser mayor de 18 años"
    },
    numero: {
        valueMissing: "Este campo no puede estar vacio",
        patterMismatch: "El formato requerido es XX-XX-XX-XX-XX 10 números"
    },
    direccion: {
        valueMissing: "Este campo no puede estar vacio",
        patterMismatch: "La dirección debe contener entre 10 a 40 caracteres."
    },
    ciudad: {
        valueMissing: "Este campo no puede estar vacio",
        patterMismatch: "La dirección debe contener entre 10 a 40 caracteres."
    },
    estado: {
        valueMissing: "Este campo no puede estar vacio",
        patterMismatch: "La dirección dede cotnener entre 10 a 40 caracteres"
    },
};

const validadores = {
    nacimiento: input => validarNacimiento(input),
};

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if (input.validity[error]) {
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput[error]];
        };
    });
    return mensaje
};

function validarNacimiento(input) {
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    if (!mayordeEdad(fechaCliente)) {
        mensaje = "Lo sentimos, debes tener al menos 18 años para poder registrarte."
    }
    input.setCustomValidity(mensaje);
}

function mayordeEdad(fecha) {
    const fechaActual = new Date();
    const direcenciaFechas = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate(),
    );

    return direcenciaFechas <= fechaActual;
}