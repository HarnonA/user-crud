# User CRUD API
With this application is possible to sign in, sign up, list, search, update and remove users.

## Requirements	
* NPM or yarn
* Git

## Technologies	
* React
* Node.js
* Express
* Postgres
* Redux	

## Getting started</h1>	

### Download this repo
```bash
# Download repo with git
$ git clone https://github.com/HarnonA/user-crud.git
```

### Go to the file
```bash
# Change directory
$ cd user-crud
```

### Run the front-end
```bash
# Build and run front-end
$ cd front
$ npm i
$ npm start
```

### Run the back-end
```bash
# Postgres configuration is required
$ sudo -i -u postgres
$ psql
$ CREATE DATABASE db_users;

# Check user and password in the .env file. It may be different in your OS


# Build and run back-end
$ cd back
$ npm i
$ npm start
```

## TODO	
* Docker
