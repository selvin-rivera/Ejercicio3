function validateInput(value) {
    return !isNaN(value) && value > 0;
}
// Km a m
function convertKmAm() {
    let km = document.getElementById('km').value;
    let result = document.getElementById('kmResult');

    if (validateInput(km)) {
        result.textContent = `${km} Km = ${km * 1000} m`;
    } else {
        warning ("Por favor, ingrese un valor válido en Km.");
    }
}

// m a cm
function convertMaCm() {
    let m = document.getElementById('m').value;
    let result = document.getElementById('mResult');

    if (validateInput(m)) {
        result.textContent = `${m} m = ${m * 100} cm`;
    } else {
        warning ("Por favor, ingrese un valor válido en m.");
    }
}

// ft a pulg
function convertFtaInch() {
    let ft = document.getElementById('ft').value;
    let result = document.getElementById('ftResult');

    if (validateInput(ft)) {
        result.textContent = `${ft} ft = ${ft * 12} pulgadas`;
    } else {
        warning ("Por favor, ingrese un valor válido en ft.");
    }
}

// yarda a pulg
function convertYardaInch() {
    let yard = document.getElementById('yarda').value;
    let result = document.getElementById('yardaResult');

    if (validateInput(yard)) {
        result.textContent = `${yard} yardas = ${yard * 36} pulgadas`;
    } else {
        warning ("Por favor, ingrese un valor válido en yardas.");
    }
}

function warning(mensaje) {
    Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: mensaje
    });
}

function limpiar() {
    document.getElementById("km").value = ""
    document.getElementById("kmResult").textContent = ""
    document.getElementById("m").value = ""
     document.getElementById("mResult").textContent = ""
    document.getElementById("ft").value = ""
     document.getElementById("ftResult").textContent = ""
    document.getElementById("yarda").value = ""
     document.getElementById("yardaResult").textContent = ""
}