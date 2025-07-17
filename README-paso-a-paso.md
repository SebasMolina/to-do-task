# Guía paso a paso para ejecutar TaskMaster

## 1. Iniciar el backend
- Ve a la carpeta `backend`.
- Ejecuta en la terminal:
  ```
npm install
npm start
  ```
- El backend debe mostrar: `Backend running on http://localhost:3001`

## 2. Iniciar el frontend
- Ve a la carpeta `frontend`.
- Usa alguna de estas opciones para iniciar un servidor local:
  - **Live Server** (VS Code): Haz clic derecho en `Diseño.html` y selecciona "Open with Live Server".
  - **Python**:
    ```
    python -m http.server 8080
    ```
  - **Node.js (http-server)**:
    ```
    npm install -g http-server
    http-server -p 8080
    ```
- Abre el navegador en `http://localhost:8080/Diseño.html` (o el puerto que uses).

## 3. Usar la app
- Agrega, elimina y marca tareas como completadas.
- El frontend se conecta automáticamente al backend en `http://localhost:3001/tasks`.

---

Si tienes problemas de CORS, asegúrate de que ambos servidores estén corriendo y que el frontend se sirva desde un servidor local.
