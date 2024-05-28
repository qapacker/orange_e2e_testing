## OrangeHRM Docker Setup
-This repository provides a Docker Compose configuration to set up and run OrangeHRM with MySQL as the database.

## Prerequisites
-Ensure you have the following installed on your machine:

-Docker
-Docker Compose

-Clone the repository from:

https://gitlab.i2cat.net/devops/e2e-testing-front-end.git

# Project Structure
.
├── .env
├── orange
│   └── (OrangeHRM data)
└── db_orange
    └── (MySQL data)

## Environment Variables
Create a .env file in the root of the project with the following content:

makefile

# OrangeHRM Database Configuration
ORANGEHRM_DATABASE_HOST=mysql
ORANGEHRM_DATABASE_USER=root
ORANGEHRM_DATABASE_PASSWORD=aLon65tr0ngPassw0rd!
ORANGEHRM_DATABASE_NAME=orangehrm

# MySQL Configuration
MYSQL_ROOT_PASSWORD=aLon65tr0ngPassw0rd!
MYSQL_DATABASE=orangehrm
Usage
Starting the Containers
To start the OrangeHRM and MySQL containers, run:


docker-compose up -d
This command will pull the required images (if not already available) and start the containers in detached mode.

# Stopping the Containers
To stop the running containers, run:


docker-compose down
Accessing OrangeHRM
Once the containers are up and running, you can access OrangeHRM in your web browser at:

http://localhost:8200
https://localhost:8443