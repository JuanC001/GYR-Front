# Proyecto Front End GYR

Este desarrollo se hace con la finalidad de tener una mejor visualización de la nueva plataforma de la empresa. Y poder así llegar a mas personas a traves de la web.
## Requisitos

- [x] Debe contar con nodejs (la version utilizada en el proyecto es 20.16.0)
- [x] Debe contar con un IDE que permita ver los archivos y modificarlos en caso de ser necesario.

## Instalación y descarga

1. Al clonar el repositorio, se tendrá una carpeta con el nombre del proyecto, solo debe acceder a "/GYR-Front" y allí ejecutar el comando `npm install` o `npm ci` para instalar todas las dependecias necesarias del proyecto.
2. Una vez descargado e instalado el repositorio se debe utilizar el comando `npm run dev` en caso de que se quiera generar un ambiente local del proyecto.

## Despliegue del proyecto

Cuando se realiza este tipo de proyectos, lo que se suele utilizar es un backend ejecutado que permita la adicion de este proyecto, aunque este tambien se puede desplegar de manera estatica sin la necesidad de un backend.

### Despliegue estático

Para un despliegue estático se debe generar el build del proyecto esto se realiza de la siguiente manera:
1. Dirijase a la carpeta raíz del proyecto.
2. Ejecute el comando `npm run build`, este comando va a generar una carpeta llamada `dist`.
3. Genere un servidor o máquina virtual.
4. Instale algun servicio http como apache o nginx.
5. Ubique la carpeta dist dentro del servidor en la dirección: `/www/` y extraiga la carpeta allí.
6. Debe configurar la ruta de su servicio sea apache o nginx para que apunten al `index.html` que se encuentra en la carpeta dist.

Nota: en caso de que las rutas no estén funcionando, es porque el servidor no reconoce las rutas que genera react (React-router en este caso) por lo cual se debe hacer la debida configuración en nginx o apache.

### Despliegue dinámico

Para este caso se puede generar un backend o utilizar uno prehecho, como lo es vercel, plataforma que permite subir proyectos de diferentes tipos de tecnologías y no requieres de un backend. Si no:

1. Dirijase a la carpeta raíz del proyecto.
2. Ejecute el comando `npm run build`, este comando va a generar una carpeta llamada `dist`.
2. Se debe contar con un backend y ubicar la carpeta dist en los assets estaticos o publico del proyecto backend.
3. Una vez esto se deben configurar las ruta hacia el index en los archivos estaticos del backend.
4. De esta manera el proyecto quedará listo en un sistema completo (Front-end y back-end)
