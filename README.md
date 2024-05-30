## OrangeHRM Docker Setup
-This repository provides a Docker Compose configuration to set up and run OrangeHRM with MySQL as the database.

## Prerequisites
-Ensure you have the following installed on your machine:

-Docker
-Docker Compose

-Clone the repository from:

```console
-git clone https://gitlab.i2cat.net/devops/e2e-testing-front-end.git

```
# Project Structure
```markdown
.
├── .env
├── orange
│   └── (OrangeHRM data)
└── db_orange
    └── (MySQL data)
```

## Environment Variables
Create a .env file in the root of the project with the following content:

```console
 touch .env
```

## OrangeHRM Database Configuration .env

```markdown
ORANGEHRM_DATABASE_HOST=mysql
ORANGEHRM_DATABASE_USER=root
ORANGEHRM_DATABASE_PASSWORD=aLon65tr0ngPassw0rd!
ORANGEHRM_DATABASE_NAME=orangehrm

```

## MySQL Configuration .env

```markdown
MYSQL_ROOT_PASSWORD=aLon65tr0ngPassw0rd!
MYSQL_DATABASE=orangehrm
```

### Archivo de ejemplo de variables de entorno para Cypress

El archivo `cypress.env.example.json` proporciona un ejemplo de cómo configurar las variables de entorno necesarias 
para ejecutar tus pruebas en Cypress. 
Es importante **no** incluir información sensible, como contraseñas reales, en este archivo.
Este archivo actúa como una plantilla para que los desarrolladores configuren sus propias variables de entorno locales.
Debes copiar este archivo y renombrarlo como `cypress.env.json` para que Cypress pueda leerlo durante la ejecución de las pruebas.
```json
{
  "username": "your_username",
  "password": "your_password"
}
```

## Usage
Starting the Containers
To start the OrangeHRM and MySQL containers, run:


```console
docker-compose up -d
```
This command will pull the required images (if not already available) and start the containers in detached mode.

## Stopping the Containers
To stop the running containers, run:


```console
docker-compose down
```

## Accessing OrangeHRM
Once the containers are up and running, you can access OrangeHRM in your web browser at:

http://localhost:8200
https://localhost:8443