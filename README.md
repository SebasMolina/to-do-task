# TaskMaster - Documentación del Proyecto

## Estructura
- **frontend/**: Carpeta con el frontend (Diseño.html, lista tareas.html)
- **backend/**: Carpeta con el backend en Node.js + Express

## Pasos realizados

1. **Reorganización del proyecto**
   - Se crearon las carpetas `frontend` y `backend`.
   - Se movieron los archivos del frontend a la carpeta `frontend`.
   - El backend permanece en la carpeta `backend`.

2. **Conexión entre frontend y backend**
   - El frontend (`Diseño.html`) realiza peticiones fetch al backend (`http://localhost:3001/tasks`).
   - El backend responde con la lista de tareas y permite agregar, marcar como completada y eliminar tareas.

## Próximos pasos

- Probar la app usando un servidor local para el frontend (por ejemplo, Live Server o Python SimpleHTTPServer).
- Documentar cómo iniciar ambos servidores y acceder a la app.

---

Se irá actualizando este README con cada cambio importante realizado en el proyecto.
