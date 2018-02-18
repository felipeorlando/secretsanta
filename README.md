# K121 - SecretSanta 🎄

This is as simple manager for CRUD users (admin) and persons, to match each person with a friend, aka SecretSanta game. 🎅

## Requirements

- Node 8.9.4
- Nodemon
- Mongo DB
- Redis

## How to run

**API:**
```
> cd ./api
> npm run dev
```

**CLIENT:**
```
> cd ./client
> npm start
```

**Obs:** 
- Set Mailgun key to API send emails on `api/configs/index.js`
- Set API URL for client on `client/src/config/app.constants.js`

## API Endpoints

**Users:**
```
GET    /users     :: Return all users
GET    /users/:id :: Get an user by _id registered
POST   /users     :: Create an user with params (name, email, password) 
PUT    /users/:id :: Update an user with _id passed params (name, email, password)
DELETE /users/:id :: Delete an user by _id
```

**Persons:**
```
GET    /persons     :: Return all persons
GET    /persons/:id :: Get an person by _id registered
POST   /persons     :: Create an person with params (name, email) 
PUT    /persons/:id :: Update an person with _id passed params (name, email)
DELETE /persons/:id :: Delete an person by _id
```

**Auth:**
```
POST /login :: Returns JWT if params (email, password) matches with a registered user 
POST /check :: Return if a token is valid
```

<h6 align="center">
	<a href="https://github.com/felipeorlando/license/blob/master/MIT.md">MIT</a>
	©
	Felipe Orlando
</h6>
