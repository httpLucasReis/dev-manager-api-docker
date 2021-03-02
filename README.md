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
  * To stop the containers run
  
 ```
  docker-compose down
```

## User routes 


**GET**
  ```json
    /users
  ```

**POST**
  ```json
  /users

  {
	  "username": "ANY USERNAME"
  }
  ```

**PUT**
  ```json
  /users/{id}

  {
	  "username": "ANY USERNAME"
  }
  ```

**DELETE**
  ```json
  /users/{id}
  ```

## Projects routes
  
**GET**
  ```json
  /projects 
  ```

  **OR**  

  ```
  /projects?user_id={ID}&page={NUMBER}
  ```

**POST**
  ```json
  /projects

  {
    "title": "ANY PROJECT NAME",
    "user_id": "USER ID"
  }
  ```

**PUT**
  ```json
  /projects/{ID}

  {
	  "title": "ANY PROJECT NAME"
  }
  ```

**DELETE**
  ```json
  /projects/{ID}
  ```
  
