# APIREST Prueba Técnica Nelumbo - Microservicio Envio mails

Este proyecto hace parte de Api Rest que maneja la lógica de negocio de un sistema de parqueaderos. Se trata de un microservicio que se encarga unicamente del envio de correos electronicos del administrador al socio utilizando sendgrid.

## Requisitos

Para ejecutar este proyecto, asegúrate de tener instalado:

- **Node.js** v22.8.0
- **MongoDB** para la base de datos

## Instalación

Sigue estos pasos para configurar el proyecto localmente:

1. Clonar el repositorio:

   ```bash
   git clone - enlace -

2. Instalar las dependencias:

npm install

3. Crear un archivo .env en la raíz del proyecto con las siguientes variables de entorno:

CORREO =""
SENDGRID_API_KEY = ""
PORT=""

4. Ejecutar el proyecto 

npm start

## Endpoints

Endpoint Post envio correo electronico

## Estructura del Proyecto

El proyecto sigue la siguiente estructura de carpetas:

/src 
    /controllers 
    /routes
    /services
    /midlewares
    /entities
    /repositories
    /config
/app.js

 Controladores que manejan la lógica de cada entidad /controllers 
 entities - Modelos de las colecciones de MongoDB  
 Definición de las rutas y sus respectivas funciones /routes
 Servicios para validaciones y lógica adicional /services
 Configuraciones del entorno y la base de datos  /config
 Middlewares para validaciones y autenticación /middlewares 
 
  # Archivo principal que inicializa el servidor - app.js