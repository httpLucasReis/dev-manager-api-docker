# Dev Manager api with Docker

### How to install?
  * First, clone this repository with this command

```
  git clone https://github.com/httpLucasReis/dev-manager-api-docker.git 
```
  
  * Now, you need install docker. [Download here](https://www.docker.com/get-started)
  * Create a file called .env in the source folder and set this variables

```env
# POSTGRES
  DB_HOST=postgres-dev-manager-api
  DB_USER=postgres
  DB_PASS=postgres
  DB_NAME=devmanager
  DB_URL=postgres://postgres:postgres@postgres-dev-manager-api:5432/devmanager
```
  * run this command 
```
  docker-compose up
```

  *  Enjoy my API
  * To stop the containers rub
  
 ```
  docker-compose down
```
 
  
