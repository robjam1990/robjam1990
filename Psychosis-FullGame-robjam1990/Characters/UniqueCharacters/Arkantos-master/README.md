# Arkantos


## Description

Arkantos is a simple and easy to use library for creating and managing a RESTful API in Node.js. It is built on top of Express.js and Mongoose.js. It is designed to be simple and easy to use, while still providing a lot of flexibility and power.

## Installation

To install Arkantos, simply run:
```
npm install arkantos
```

## Usage

To use Arkantos, you need to create a new instance of the `Arkantos` class and pass in the configuration options. Here is an example of how to create a new instance of Arkantos:

```javascript
const Arkantos = require('arkantos');

const arkantos = new Arkantos({
  port: 3000,
  database: {
	url: 'mongodb://localhost:27017/my-database',
  },
  models: {
	User: {
	  schema: {
		name: String,
		email: String,
	  },
	},
  },
  routes: {
	'/users': {
	  model: 'User',
	  },
	  hooks: {
		pre: {
		  save(next) {
			console.log('Saving user...');
			next();
		  },
		},
	  },
	},
  },
});
```

In this example, we are creating a new instance of Arkantos and passing in the configuration options. We are setting the port to 3000, the database URL to `mongodb://localhost:27017/my-database`, defining a `User` model with a `name` and `email` field, and defining a route for `/users` that uses the `User` model.

Once you have created a new instance of Arkantos, you can start the server by calling the `start` method:

```javascript
arkantos.start();
```

This will start the server and listen for incoming requests on the specified port.

## Configuration

The following configuration options are available when creating a new instance of Arkantos:
- `port` (number): The port that the server should listen on. Default is `3000`.
- `database` (object): The configuration options for the database connection. The following options are available:
  - `url` (string): The URL of the database to connect to. Required.
	- `options` (object): Additional options to pass to the Mongoose connection. Default is `{ useNewUrlParser: true, useUnifiedTopology: true }`.
	- `models` (object): The models to define for the database. Each key should be the name of the model, and the value should be an object with the following options:
	  - `schema` (object): The schema definition for the model. Required.
	  - `options` (object): Additional options to pass to the Mongoose model. Default is `{}`.
		- `methods` (object): Additional methods to add to the model. Default is `{}`.
		- `statics` (object): Additional static methods to add to the model. Default is `{}`.
		- `virtuals` (object): Additional virtual fields to add to the model. Default is `{}`.
		- `indexes` (array): Additional indexes to add to the model. Default is `[]`.
		- `hooks` (object): Additional hooks to add to the model. Default is `{}`.
		- `plugins` (array): Additional plugins to add to the model. Default is `[]`.
	


## Models

Arkantos uses Mongoose.js to define and interact with models. When defining a model, you need to provide a schema definition. You can also provide additional options, methods, statics, virtuals, indexes, hooks, and plugins for the model.

Here is an example of how to define a `User` model with a `name` and `email` field:

```javascript
const arkantos = new Arkantos({
  models: {
	User: {
	  schema: {
		name: String,
		email: String,
	  },
	},
  },
});
```

This will define a `User` model with a `name` and `email` field. You can then use this model to interact with the database.

## Routes

Arkantos uses Express.js to define and handle routes. When defining a route, you need to provide the path of the route and the model that the route should use.

Here is an example of how to define a route for `/users` that uses the `User` model:

```javascript
const arkantos = new Arkantos({
  routes: {
	'/users': {
	  model: 'User',
	},
  },
});
```
	
This will define a route for `/users` that uses the `User` model. You can then use this route to interact with the `User` model.

## Methods

Arkantos provides a number of methods that you can use to interact with the database and models. These methods are available on the `Arkantos` instance and can be called directly.

Here are some of the methods that are available:
- `create(modelName, data)`: Create a new document in the database.
- `find(modelName, query)`: Find documents in the database that match the query.
- `findOne(modelName, query)`: Find a single document in the database that matches the query.
- `findById(modelName, id)`: Find a document in the database by ID.
- `update(modelName, id, data)`: Update a document in the database by ID.
- `delete(modelName, id)`: Delete a document in the database by ID.
- `count(modelName, query)`: Count the number of documents in the database that match the query.
- `aggregate(modelName, pipeline)`: Perform an aggregation query on the database.
- `distinct(modelName, field, query)`: Get the distinct values of a field in the database that match the query.
- `populate(modelName, id, path)`: Populate a field in a document by ID.
- `add(modelName, id, path, data)`: Add an item to a field in a document by ID.
- `remove(modelName, id, path, data)`: Remove an item from a field in a document by ID.
- `upload(modelName, id, field, file)`: Upload a file to a field in a document by ID.
- `download(modelName, id, field)`: Download a file from a field in a document by ID.
- `send(res, data)`: Send a response to the client.
- `error(res, error)`: Send an error response to the client.
- `validate(modelName, data)`: Validate data against the schema of a model.
- `sanitize(modelName, data)`: Sanitize data against the schema of a model.
- `authenticate(req, res, next)`: Authenticate a request using a JWT token.
- `authorize(req, res, next)`: Authorize a request using a JWT token.
- `hash(password)`: Hash a password using bcrypt.
- `compare(password, hash)`: Compare a password to a hash using bcrypt.
- `sign(payload, secret, options)`: Sign a payload using a JWT token.
- `verify(token, secret, options)`: Verify a JWT token.
- `decode(token)`: Decode a JWT token.
- `generate(length)`: Generate a random string of a given length.
- `sendEmail(to, subject, text, html)`: Send an email using Nodemailer.
- `uploadFile(file, options)`: Upload a file using Multer.
- `downloadFile(file, options)`: Download a file using Express.
- `sendFile(res, file, options)`: Send a file to the client using Express.
- `errorHandler(err, req, res, next)`: Handle errors in Express middleware.

## Middleware

Arkantos provides a number of middleware functions that you can use to authenticate and authorize requests, validate and sanitize data, and handle errors. These middleware functions are available on the `Arkantos` instance and can be used in Express routes.

Here are some of the middleware functions that are available:
- `authenticate`: Authenticate a request using a JWT token.
- `authorize`: Authorize a request using a JWT token.
- `validate`: Validate data against the schema of a model.

Here is an example of how to use the `authenticate` middleware function in an Express route:

```javascript
app.get('/users', arkantos.authenticate, (req, res) => {
  arkantos.send(res, req.user);
});
```

This will authenticate the request using a JWT token and then send the user data to the client.

## Hooks

Arkantos provides a number of hooks that you can use to add custom logic to models. These hooks are available on the `Arkantos` instance and can be added to models when defining them.

Here are some of the hooks that are available:
- `pre`: Run custom logic before a Mongoose method is called.
- `post`: Run custom logic after a Mongoose method is called.
- `error`: Run custom logic when an error occurs.
- `validate`: Run custom logic when data is validated.
- `sanitize`: Run custom logic when data is sanitized.
- `authenticate`: Run custom logic when a request is authenticated.
- `authorize`: Run custom logic when a request is authorized.
- `hash`: Run custom logic when a password is hashed.
- `compare`: Run custom logic when a password is compared.
- `sign`: Run custom logic when a JWT token is signed.
- `verify`: Run custom logic when a JWT token is verified.
- `decode`: Run custom logic when a JWT token is decoded.
- `generate`: Run custom logic when a random string is generated.
- `sendEmail`: Run custom logic when an email is sent.
- `uploadFile`: Run custom logic when a file is uploaded.
- `downloadFile`: Run custom logic when a file is downloaded.

Here is an example of how to add a `pre` hook to a `User` model:

```javascript
const arkantos = new Arkantos({
  models: {
	User: {
	  schema: {
		name: String,
		email: String,
	  },
	  hooks: {
		pre: {
		  save(next) {
			console.log('Saving user...');
			next();
		  },
		},
	  },
	},
  },
});
```

This will add a `pre` hook to the `User` model that logs a message before a document is saved.

