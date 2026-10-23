
document.addEventListener("DOMContentLoaded", function () {
    const btnInformacion = document.getElementById("btn-informacion");
    const btnIniciar = document.getElementById("btn-iniciar");
    const btnRecorridos = document.getElementById("btn-recorridos");

    if (btnInformacion) {
        btnInformacion.addEventListener("click", function () {
            window.location.href = "informacion.html";
        });
    }

    if (btnIniciar) {
        btnIniciar.addEventListener("click", function () {
            window.location.href = "experiencia.html";
        });
    }

    if (btnRecorridos) {
        btnRecorridos.addEventListener("click", function () {
            window.location.href = "recorridos.html";
        });
    }
});
