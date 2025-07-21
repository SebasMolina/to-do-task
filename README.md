# TaskMaster - Documentación del Proyecto

## Estructura actual
- **backend/**: Servidor Node.js + Express para la API de tareas.
- **todo-frontend/**: Aplicación React (nuevo frontend principal).
  - **public/**: Archivos HTML originales migrados como respaldo.
  - **src/**: Código fuente React (App.js, TaskList.js, Home.js, index.js, index.css, App.css).

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


6. **Mejoras visuales y estructura en React**
   - Se creó un archivo de estilos `App.css` personalizado para mejorar la apariencia.
   - Se redujo el tamaño del logo y se alinearon las tareas.
   - Se separó la lista de tareas en el componente `TaskList.js`.
   - Se creó el componente `Home.js` para el formulario de agregar tareas.
   - Se implementó navegación con React Router (`react-router-dom`).
   - Ahora la ruta `/` muestra el formulario para agregar tareas y la ruta `/tareas` muestra la lista de tareas.
   - Se agregó un menú de navegación en el header.
   - Se documentó la necesidad de instalar React Router con `npm install react-router-dom`.


7. **Refinamiento UI/UX y funcionalidades**
   - Se modernizó el formulario de agregar tareas con un diseño más atractivo y responsivo.
   - Se eliminaron elementos innecesarios como el checkbox de las tareas.
   - El botón "Eliminar" de cada tarea fue reemplazado por un ícono de X con tooltip.
   - Las tarjetas de tarea ahora son más grandes, con borde azul destacado y mayor presencia visual.
   - Se mejoró la disposición y el estilo de las tarjetas, mostrándose en un grid de hasta 5 por fila (responsive).
   - Se ajustaron los estilos para una experiencia más limpia y profesional.
   - Se documentó cada cambio importante en este README para seguimiento.

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
   Si es la primera vez que usas navegación, instala React Router:
   ```
   npm install react-router-dom
   ```
3. Abre el navegador en `http://localhost:3000` (o el puerto que indique la terminal).

La app React se conecta automáticamente al backend para mostrar, agregar, marcar y eliminar tareas. Usa el menú para navegar entre agregar tareas y ver la lista.

---

Si tienes problemas de CORS, asegúrate de que ambos servidores estén corriendo y que el frontend se sirva desde React.

---

Este README se irá actualizando con cada cambio importante realizado en el proyecto.
