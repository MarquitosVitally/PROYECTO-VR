// ========================================
// MENÚ PRINCIPAL
// ========================================

const menuPrincipal = document.getElementById("menu-principal");

const btnIniciar = document.getElementById("btn-iniciar");

const btnInformacion = document.getElementById("btn-informacion");


// ========================================
// INICIAR EXPERIENCIA
// ========================================

btnIniciar.addEventListener("click", function () {

    menuPrincipal.style.display = "none";

    mostrarImagen();

});


// ========================================
// INFORMACIÓN
// ========================================

btnInformacion.addEventListener("click", function () {

    alert(
        "PROYECTO DE REALIDAD VIRTUAL\n\n" +
        "Esta aplicación presenta un recorrido " +
        "virtual interactivo desarrollado con " +
        "HTML, CSS, JavaScript y A-Frame."
    );

});


// ========================================
// RECORRIDOS
// ========================================

const recorridos = {

    1: [
        "Ed1.1.jpg",
        "Ed1.2.jpg",
        "Ed1.3.jpg",
        "Ed1.4.jpg",
        "Ed1.5.jpg"
    ],

    2: [
        "Ed2.1.jpg",
        "Ed2.2.jpg",
        "Ed2.3.jpg",
        "Ed2.4.jpg"
    ],

    3: [
        "Ed3.1.jpg",
        "Ed3.2.jpg",
        "Ed3.3.jpg",
        "Ed3.4.jpg",
        "Ed3.5.jpg",
        "Ed3.6.jpg"
    ],

    4: [
        "Ed4.1.jpg",
        "Ed4.2.jpg",
        "Ed4.3.jpg",
        "Ed4.4.jpg",
        "Ed4.5.jpg"
    ],

    5: [
        "Ed5.1.jpg",
        "Ed5.2.jpg",
        "Ed5.3.jpg",
        "Ed5.4.jpg",
        "Ed5.5.jpg",
        "Ed5.6.jpg",
        "Ed5.7.jpg",
        "Ed5.8.jpg",
        "Ed5.9.jpg",
        "Ed5.10.jpg"
    ],

    6: [
        "Ed6.1.jpg",
        "Ed6.2.jpg",
        "Ed6.3.jpg",
        "Ed6.4.jpg",
        "Ed6.5.jpg",
        "Ed6.6.jpg",
        "Ed6.7.jpg",
        "Ed6.8.jpg",
        "Ed6.9.jpg",
        "Ed6.10.jpg",
        "Ed6.11.jpg",
        "Ed6.12.jpg",
        "Ed6.13.jpg",
        "Ed6.14.jpg",
        "Ed6.15.jpg",
        "Ed6.16.jpg",
        "Ed6.17.jpg",
        "Ed6.18.jpg",
        "Ed6.19.jpg",
        "Ed6.20.jpg",
        "Ed6.21.jpg",
        "Ed6.22.jpg",
        "Ed6.23.jpg",
        "Ed6.24.jpg",
        "Ed6.25.jpg",
        "Ed6.26.jpg",
        "Ed6.27.jpg",
        "Ed6.28.jpg",
        "Ed6.29.jpg",
        "Ed6.30.jpg",
        "Ed6.31.jpg",
        "Ed6.32.jpg",
        "Ed6.33.jpg",
        "Ed6.34.jpg",
        "Ed6.35.jpg",
        "Ed6.36.jpg",
        "Ed6.37.jpg",
        "Ed6.38.jpg",
        "Ed6.39.jpg",
        "Ed6.40.jpg",
        "Ed6.41.jpg",
        "Ed6.42.jpg",
        "Ed6.43.jpg",
        "Ed6.44.jpg",
        "Ed6.45.jpg"
    ]

};


// ========================================
// VARIABLES DEL RECORRIDO
// ========================================

let recorridoActual = 1;

let imagenActual = 0;

const botonesMenuRecorridos =
    document.querySelectorAll(
        "#menu-recorridos button"
    );

botonesMenuRecorridos.forEach(function (boton) {

    boton.addEventListener("click", function () {

        recorridoActual =
            parseInt(
                boton.getAttribute(
                    "data-recorrido-menu"
                )
            );

        imagenActual = 0;

        botonesMenuRecorridos.forEach(
            function (otroBoton) {

                otroBoton.classList.remove(
                    "seleccionado"
                );

            }
        );

        boton.classList.add("seleccionado");

        mostrarImagen();

    });

});
// ========================================
// ELEMENTOS DEL RECORRIDO
// ========================================

const imagenRecorrido =
    document.getElementById("imagen-recorrido");

const btnAnterior =
    document.getElementById("btn-anterior");

const btnSiguiente =
    document.getElementById("btn-siguiente");

const contadorImagen =
    document.getElementById("contador-imagen");

const nombreRecorrido =
    document.getElementById("nombre-recorrido");


// ========================================
// ELEMENTOS DE INFORMACIÓN
// ========================================

const tituloImagen =
    document.getElementById("titulo-imagen");

const descripcionImagen =
    document.getElementById("descripcion-imagen");

const panelInformacion =
    document.getElementById("panel-informacion");

const btnCerrarInfo =
    document.getElementById("btn-cerrar-info");


// ========================================
// ELEMENTOS VR
// ========================================

const btnVrAnterior =
    document.getElementById("btn-vr-anterior");

const btnVrSiguiente =
    document.getElementById("btn-vr-siguiente");

const textoRecorridoVr =
    document.getElementById("texto-recorrido-vr");


// ========================================
// INFORMACIÓN DE LAS IMÁGENES
// ========================================

const informacion = {

    1: [

        {
            titulo: "Ed1.1",
            descripcion:
                "Información correspondiente a la primera ubicación del recorrido 1."
        },

        {
            titulo: "Ed1.2",
            descripcion:
                "Información correspondiente a la segunda ubicación del recorrido 1."
        },

        {
            titulo: "Ed1.3",
            descripcion:
                "Información correspondiente a la tercera ubicación del recorrido 1."
        },

        {
            titulo: "Ed1.4",
            descripcion:
                "Información correspondiente a la cuarta ubicación del recorrido 1."
        },

        {
            titulo: "Ed1.5",
            descripcion:
                "Información correspondiente a la quinta ubicación del recorrido 1."
        }

    ],


    2: [

        {
            titulo: "Ed2.1",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed2.2",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed2.3",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed2.4",
            descripcion:
                "Información correspondiente a esta ubicación."
        }

    ],


    3: [

        {
            titulo: "Ed3.1",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed3.2",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed3.3",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed3.4",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed3.5",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed3.6",
            descripcion:
                "Información correspondiente a esta ubicación."
        }

    ],


    4: [

        {
            titulo: "Ed4.1",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed4.2",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed4.3",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed4.4",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed4.5",
            descripcion:
                "Información correspondiente a esta ubicación."
        }

    ],


    5: [

        {
            titulo: "Ed5.1",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed5.2",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed5.3",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed5.4",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed5.5",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed5.6",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed5.7",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed5.8",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed5.9",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed5.10",
            descripcion:
                "Información correspondiente a esta ubicación."
        }

    ],


    6: [

        {
            titulo: "Ed6.1",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.2",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.3",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.4",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.5",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.6",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.7",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.8",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.9",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.10",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.11",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.12",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.13",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.14",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.15",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.16",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.17",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.18",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.19",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.20",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.21",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.22",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.23",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.24",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.25",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.26",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.27",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.28",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.29",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.30",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.31",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.32",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.33",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.34",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.35",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.36",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.37",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.38",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.39",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.40",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.41",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.42",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.43",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.44",
            descripcion:
                "Información correspondiente a esta ubicación."
        },

        {
            titulo: "Ed6.45",
            descripcion:
                "Información correspondiente a esta ubicación."
        }

    ]

};


// ========================================
// MOSTRAR IMAGEN ACTUAL
// ========================================

function mostrarImagen() {

    // Verificar que exista el recorrido
    if (!recorridos[recorridoActual]) {
        console.error(
            "El recorrido " + recorridoActual + " no existe."
        );
        return;
    }


    // Obtener imagen actual
    const imagen =
        recorridos[recorridoActual][imagenActual];


    // Verificar que exista la imagen
    if (!imagen) {
        console.error(
            "La imagen no existe para el recorrido " +
            recorridoActual
        );
        return;
    }


    // ========================================
    // RUTA DE LA IMAGEN
    // ========================================

    const ruta =
        "imagenes/recorrido" +
        recorridoActual +
        "/" +
        imagen;


    // ========================================
    // ANIMACIÓN DE SALIDA
    // ========================================

    imagenRecorrido.setAttribute(
        "animation__fadeout",
        "property: material.opacity; from: 1; to: 0; dur: 250"
    );


    // ========================================
    // CAMBIAR IMAGEN
    // ========================================

    setTimeout(function () {

        imagenRecorrido.setAttribute(
            "src",
            ruta
        );


        // ========================================
        // ANIMACIÓN DE ENTRADA
        // ========================================

        imagenRecorrido.setAttribute(
            "animation__fadein",
            "property: material.opacity; from: 0; to: 1; dur: 500"
        );

    }, 250);


    // ========================================
    // ACTUALIZAR CONTADOR HTML
    // ========================================

    contadorImagen.textContent =
        "Imagen " +
        (imagenActual + 1) +
        " / " +
        recorridos[recorridoActual].length;


    // ========================================
    // ACTUALIZAR NOMBRE DEL RECORRIDO
    // ========================================

    nombreRecorrido.textContent =
        "RECORRIDO " +
        recorridoActual;


    // ========================================
    // ACTUALIZAR TEXTO 3D
    // ========================================

    textoRecorridoVr.setAttribute(
        "value",
        "Recorrido " +
        recorridoActual +
        " • Imagen " +
        (imagenActual + 1) +
        " / " +
        recorridos[recorridoActual].length
    );


    // ========================================
    // ACTUALIZAR INFORMACIÓN
    // ========================================

    if (
        informacion[recorridoActual] &&
        informacion[recorridoActual][imagenActual]
    ) {

        const datos =
            informacion[recorridoActual][imagenActual];


        tituloImagen.textContent =
            datos.titulo;


        descripcionImagen.textContent =
            datos.descripcion;

    } else {

        // Información por defecto
        tituloImagen.textContent =
            imagen.replace(".jpg", "");


        descripcionImagen.textContent =
            "Información correspondiente a esta ubicación.";

    }

}


// ========================================
// IR A LA SIGUIENTE IMAGEN
// ========================================

function siguienteImagen() {

    // Todavía quedan imágenes
    if (
        imagenActual <
        recorridos[recorridoActual].length - 1
    ) {

        imagenActual++;

    }

    // Terminó el recorrido actual
    else if (recorridoActual < 6) {

        recorridoActual++;

        imagenActual = 0;

    }

    // Llegó al final de todos los recorridos
    else {

        alert(
            "Has llegado al final del recorrido virtual."
        );

        return;
    }


    // Mostrar nueva imagen
    mostrarImagen();

}


// ========================================
// IR A LA IMAGEN ANTERIOR
// ========================================

function anteriorImagen() {

    // Hay una imagen anterior
    if (imagenActual > 0) {

        imagenActual--;

    }

    // Regresar al recorrido anterior
    else if (recorridoActual > 1) {

        recorridoActual--;

        imagenActual =
            recorridos[recorridoActual].length - 1;

    }

    // Ya está en el inicio
    else {

        return;
    }


    // Mostrar nueva imagen
    mostrarImagen();

}


// ========================================
// BOTÓN SIGUIENTE HTML
// ========================================

btnSiguiente.addEventListener(
    "click",
    siguienteImagen
);


// ========================================
// BOTÓN ANTERIOR HTML
// ========================================

btnAnterior.addEventListener(
    "click",
    anteriorImagen
);


// ========================================
// SELECTOR DE RECORRIDOS
// ========================================

const botonesRecorridos =
    document.querySelectorAll(
        "#selector-recorridos button"
    );


botonesRecorridos.forEach(function (boton) {

    boton.addEventListener(
        "click",
        function () {

            const nuevoRecorrido =
                parseInt(
                    boton.getAttribute(
                        "data-recorrido"
                    )
                );


            // Verificar recorrido
            if (!recorridos[nuevoRecorrido]) {

                console.error(
                    "El recorrido " +
                    nuevoRecorrido +
                    " no existe."
                );

                return;
            }


            // Cambiar recorrido
            recorridoActual =
                nuevoRecorrido;


            // Regresar a la primera imagen
            imagenActual = 0;


            // Mostrar imagen
            mostrarImagen();

        }
    );

});


// ========================================
// ABRIR PANEL DE INFORMACIÓN
// ========================================

imagenRecorrido.addEventListener(
    "click",
    function () {

        panelInformacion.style.display =
            "block";

    }
);


// ========================================
// CERRAR PANEL DE INFORMACIÓN
// ========================================

btnCerrarInfo.addEventListener(
    "click",
    function () {

        panelInformacion.style.display =
            "none";

    }
);


// ========================================
// BOTÓN ANTERIOR DENTRO DE VR
// ========================================

btnVrAnterior.addEventListener(
    "click",
    function () {

        anteriorImagen();

    }
);


// ========================================
// BOTÓN SIGUIENTE DENTRO DE VR
// ========================================

btnVrSiguiente.addEventListener(
    "click",
    function () {

        siguienteImagen();

    }
);


// ========================================
// CONFIGURAR BOTONES VR
// ========================================

function configurarBotonVR(boton) {

    // Cuando el cursor pasa encima
    boton.addEventListener(
        "mouseenter",
        function () {

            boton.setAttribute(
                "color",
                "#4090ff"
            );


            boton.setAttribute(
                "scale",
                "1.15 1.15 1.15"
            );

        }
    );


    // Cuando el cursor sale
    boton.addEventListener(
        "mouseleave",
        function () {

            boton.setAttribute(
                "color",
                "#1677ff"
            );


            boton.setAttribute(
                "scale",
                "1 1 1"
            );

        }
    );

}


// ========================================
// ACTIVAR EFECTOS DE BOTONES VR
// ========================================

configurarBotonVR(
    btnVrAnterior
);

configurarBotonVR(
    btnVrSiguiente
);

const puntoAvance =
    document.getElementById("punto-avance");
    
    
puntoAvance.addEventListener("click", function () {

    if (
        imagenActual <
        recorridos[recorridoActual].length - 1
    ) {

        imagenActual++;

    }

    else if (recorridoActual < 6) {

        recorridoActual++;

        imagenActual = 0;

    }

    else {

        alert(
            "Has llegado al final del recorrido."
        );

        return;

    }

    mostrarImagen();

});

puntoAvance.addEventListener(
    "mouseenter",
    function () {

        puntoAvance.setAttribute(
            "scale",
            "1.3 1.3 1.3"
        );

    }
);

puntoAvance.addEventListener(
    "mouseleave",
    function () {

        puntoAvance.setAttribute(
            "scale",
            "1 1 1"
        );

    }
);
// ========================================
// INICIAR CON LA PRIMERA IMAGEN
// ========================================

mostrarImagen();