
# TaskMaster - Documentación del Proyecto

## Estructura actual
- **backend/**: Servidor Node.js + Express para la API de tareas.
- **todo-frontend/**: Aplicación React (nuevo frontend principal).
  - **public/**: Archivos HTML originales migrados como respaldo.
  - **src/**: Código fuente React (App.js, index.js, index.css).

## Historia y pasos realizados

1. **Creación del backend**
   - Se creó la carpeta `backend` con Express y CORS.
   - Se implementaron endpoints REST para listar, agregar, marcar y eliminar tareas.

2. **Primer frontend (HTML + Tailwind)**
   - Se diseñó la UI en `Diseño.html` y se conectó al backend usando fetch.
   - Se documentó el paso a paso para correr ambos servidores.

3. **Reorganización del proyecto**
   - Se crearon carpetas `frontend` y `backend`.
   - Se migraron los archivos HTML originales a `frontend/`.

4. **Migración a React**
   - Se creó la carpeta `todo-frontend` usando Create React App.
   - Se migró la lógica y el diseño de `Diseño.html` a `src/App.js` en React.
   - Se adaptó el fetch para consumir la API del backend.
   - Los archivos HTML originales se respaldaron en `public/`.
   - Se agregó documentación y scripts para correr el frontend React.

5. **Control de versiones y limpieza**
   - Se creó `.gitignore` para excluir `node_modules` y otros archivos temporales.
   - Se eliminaron archivos y carpetas obsoletos.

## Cómo ejecutar el proyecto

### Backend
1. Ve a la carpeta `backend`.
2. Ejecuta:
   ```
   npm install
   npm start
   ```
3. El backend debe mostrar: `Backend running on http://localhost:3001`

### Frontend (React)
1. Ve a la carpeta `todo-frontend`.
2. Ejecuta:
   ```
   npm install
   npm start
   ```
3. Abre el navegador en `http://localhost:3000` (o el puerto que indique la terminal).

La app React se conecta automáticamente al backend para mostrar, agregar, marcar y eliminar tareas.

---

Si tienes problemas de CORS, asegúrate de que ambos servidores estén corriendo y que el frontend se sirva desde React.

---

Este README se irá actualizando con cada cambio importante realizado en el proyecto.
