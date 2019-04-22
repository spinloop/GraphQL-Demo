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
