# Frontend TaskMaster

Este frontend se conecta al backend en http://localhost:3001/tasks usando fetch.

## Para probar el frontend:

1. Inicia el backend:
   - Abre una terminal en la carpeta `backend`.
   - Ejecuta: `npm start`

2. Inicia un servidor local en la carpeta `frontend`:
   - Puedes usar la extensión Live Server de VS Code (recomendado).
   - O puedes usar Python:
     - Abre una terminal en la carpeta `frontend`.
     - Ejecuta: `python -m http.server 8080`
   - O puedes usar Node.js:
     - Instala http-server: `npm install -g http-server`
     - Ejecuta: `http-server -p 8080`

3. Abre el navegador en `http://localhost:8080/Diseño.html` (o el puerto que uses).

4. La app debería funcionar y conectarse al backend.

---

Si tienes problemas de CORS, asegúrate de que el backend esté corriendo y que el frontend se sirva desde un servidor local.
