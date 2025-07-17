# Inv_application

## Requisitos
- Node.js (v18 o superior recomendado)
- npm (gestor de paquetes de Node.js)

## Instalación
1. Clona o descarga este repositorio en tu dispositivo.
2. Abre una terminal en la carpeta `Repositorio`.
3. Instala las dependencias ejecutando:

   ```sh
   npm install
   ```

## Ejecución
1. Inicia el backend (si es necesario):

   ```sh
   node backend.js
   ```

2. Inicia el frontend modular:

   ```sh
   node frontend-modular.js
   ```

3. Abre tu navegador y accede a:

   [http://localhost:3000/main.html](http://localhost:3000/main.html)

Desde el panel principal podrás acceder a todos los módulos: Inventarios, Ventas, Compras, Clientes y Finanzas.

## Estructura de carpetas
- `inventarios/`, `ventas/`, `compras/`, `clientes/`, `finanzas/`: Cada módulo tiene su propio `index.html` y `README.md`.
- `frontend-modular.js`: Servidor para servir todos los módulos.
- `backend.js`: Servidor backend (si aplica).

## Notas
- Si cambias de puerto, actualiza las URLs en los archivos si es necesario.
- Puedes eliminar los archivos html antiguos de la raíz, ya que la navegación es modular.

---

¿Dudas? Contacta al desarrollador responsable del proyecto.