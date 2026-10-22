import os
from PIL import Image

# ========================================
# CARPETAS
# ========================================

ORIGEN = "imagenes_originales"
DESTINO = "imagenes"


# ========================================
# CREAR CARPETA
# ========================================

os.makedirs(DESTINO, exist_ok=True)


# ========================================
# PROCESAR IMÁGENES
# ========================================

for archivo in os.listdir(ORIGEN):

    # Solo procesar archivos JPG/JPEG
    if not archivo.lower().endswith((".jpg", ".jpeg")):
        continue

    nombre = os.path.splitext(archivo)[0]

    # Ejemplo:
    # Ed1.1
    # Ed6.45

    try:

        parte_recorrido = nombre.split(".")[0]

        numero_recorrido = parte_recorrido.replace(
            "Ed",
            ""
        )

    except:

        print(
            "No se pudo identificar:",
            archivo
        )

        continue


    # ========================================
    # CARPETA DEL RECORRIDO
    # ========================================

    carpeta_recorrido = os.path.join(
        DESTINO,
        "recorrido" + numero_recorrido
    )

    os.makedirs(
        carpeta_recorrido,
        exist_ok=True
    )


    # ========================================
    # ABRIR IMAGEN
    # ========================================

    ruta_origen = os.path.join(
        ORIGEN,
        archivo
    )

    imagen = Image.open(ruta_origen)


    # ========================================
    # REDIMENSIONAR
    # ========================================

    imagen.thumbnail(
        (1920, 1440),
        Image.Resampling.LANCZOS
    )


    # ========================================
    # GUARDAR
    # ========================================

    ruta_destino = os.path.join(
        carpeta_recorrido,
        nombre + ".jpg"
    )

    imagen.convert("RGB").save(
        ruta_destino,
        "JPEG",
        quality=85,
        optimize=True
    )


    print(
        "Procesada:",
        archivo,
        "→",
        ruta_destino
    )


print()
print("================================")
print("PROCESO TERMINADO")
print("================================")