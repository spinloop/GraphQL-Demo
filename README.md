# GraphQL-Demo

clone repo

run `npm install`

run `npm run seed` to seed the db with dev records

install nodemon globally via `npm install nodemon -g`

start dev server via `nodemon app`

local GraphiQL:
`http://localhost:4000/graphql`

sample query:
```
{
  books {
    name
    author {
      name
    }
  }
}
```

local client:
`http://localhost:3000/`

### Running Locally ###

cd into /server and run `nodemon app`
cd into /client and run `npm run start`

### Daily Development with Docker

1. Install Docker
  - If you're using a mac you can download Docker [here](https://docs.docker.com/v17.12/docker-for-mac/install/).
2. Open the Docker app
  - make sure Docker is running.
3. cd into root directory
4. Run `docker-compose build` to build the Docker containers
5. Run `docker-compose up` to run the app locally.
6. Visit `http://localhost:3000/`
