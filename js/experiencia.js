document.addEventListener("DOMContentLoaded", () => {
    const camara = document.querySelector("#camara");

    const botones = {
        arriba: document.querySelector("#mover-arriba"),
        abajo: document.querySelector("#mover-abajo"),
        izquierda: document.querySelector("#mover-izquierda"),
        derecha: document.querySelector("#mover-derecha")
    };

    if (!camara) {
        console.error("No se encontró la cámara con id='camara'.");
        return;
    }

    const velocidad = 2;
    let direccion = null;
    let ultimoTiempo = 0;

    function detenerMovimiento() {
        direccion = null;
    }

    Object.entries(botones).forEach(([nombre, boton]) => {
        if (!boton) {
            console.warn(`No se encontró el botón: ${nombre}`);
            return;
        }

        boton.addEventListener("pointerdown", (evento) => {
            evento.preventDefault();
            direccion = nombre;
        });

        boton.addEventListener("pointerup", detenerMovimiento);
        boton.addEventListener("pointerleave", detenerMovimiento);
        boton.addEventListener("pointercancel", detenerMovimiento);
    });

    function moverCamara(tiempo) {
        requestAnimationFrame(moverCamara);

        if (!ultimoTiempo) ultimoTiempo = tiempo;

        const delta = Math.min((tiempo - ultimoTiempo) / 1000, 0.05);
        ultimoTiempo = tiempo;

        if (!direccion) return;

        const angulo = camara.object3D.rotation.y;
        let dx = 0;
        let dz = 0;

        if (direccion === "arriba") {
            dx = -Math.sin(angulo);
            dz = -Math.cos(angulo);
        } else if (direccion === "abajo") {
            dx = Math.sin(angulo);
            dz = Math.cos(angulo);
        } else if (direccion === "izquierda") {
            dx = -Math.cos(angulo);
            dz = Math.sin(angulo);
        } else if (direccion === "derecha") {
            dx = Math.cos(angulo);
            dz = -Math.sin(angulo);
        }

        camara.object3D.position.x += dx * velocidad * delta;
        camara.object3D.position.z += dz * velocidad * delta;
    }

    requestAnimationFrame(moverCamara);
});

const btnSalir = document.querySelector("#btn-salir-vr");

if (btnSalir) {
    btnSalir.addEventListener("click", () => {
        window.location.href = "recorridos.html";
    });
}