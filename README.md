# JACK & Números — PWA

Juego educativo convertido en aplicación web instalable (PWA). La lógica y el diseño del archivo original se conservan; se añadieron un manifiesto real, icono, registro de Service Worker y servidor estático opcional.

## Estructura

- `index.html`: aplicación.
- `manifest.webmanifest`: identidad y configuración de instalación.
- `service-worker.js`: caché de recursos y soporte básico sin conexión.
- `icons/icon.svg`: icono de la aplicación.
- `server.js` y `package.json`: servidor Node opcional.
- `img/`: **coloca aquí los recursos gráficos y de video originales**.

## Recursos multimedia necesarios

El HTML original hace referencia a estos archivos:

- `img/1.jpg` hasta `img/10.jpg`
- `img/2.jpg` y `img/3.jpg` también se usan en la introducción
- `img/4.mp4`
- `img/rtruck.jpg`

La carpeta `img` no venía incluida con el archivo HTML que recibí. Copia la carpeta `img` original junto a `index.html` para conservar todas las imágenes y el video. No se han creado sustitutos para no cambiar el contenido del juego.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube `index.html`, `manifest.webmanifest`, `service-worker.js`, `icons/` y la carpeta `img/` con sus recursos.
3. En **Settings → Pages**, selecciona la rama principal y la carpeta raíz (`/`).
4. Abre la URL HTTPS que GitHub Pages genere.

GitHub Pages sirve la aplicación como sitio estático; no necesita `server.js`.

## Probar con Node.js

Requiere Node.js instalado:

```bash
npm start
```

Abre `http://localhost:3000`.

## Instalar en el teléfono o computadora

Abre la aplicación desde HTTPS (GitHub Pages) o desde `localhost`. En un navegador compatible usa **Instalar aplicación** o **Agregar a pantalla de inicio**. La opción exacta depende del navegador y del dispositivo.

## Actualizaciones

Cuando cambies archivos y quieras forzar una nueva versión de caché, cambia el valor de `CACHE_NAME` en `service-worker.js` (por ejemplo, `jack-numeros-v2`).
