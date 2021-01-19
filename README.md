# Chat Lush
A Real Time Chat Application built using Node.js, Express, Mongoose, Socket.io, Passport, & Redis.

## Demo<a name="demo"></a>
#### [Chat Lush](http://chat-lush.herokuapp.com/)

## Features<a name="features"></a>
+ Uses Express as the application Framework.
+ Manages Sessions using [express-session](https://github.com/expressjs/session) package.
+ Authenticates via username and password using [Passport](https://github.com/jaredhanson/passport).
+ Passwords are hashed using [bcrypt-nodejs](https://github.com/shaneGirish/bcrypt-nodejs) package.
+ Social Authentication via Facebook and Twitter using [Passport](https://github.com/jaredhanson/passport).
+ Real-time communication between a client and a server using [Socket.io](https://github.com/socketio/socket.io).
+ Uses [MongoDB](https://github.com/mongodb/mongo), [Mongoose](https://github.com/Automattic/mongoose) and [MongoLab(mLab)](https://mlab.com/) for storing and querying data.
+ Stores session in a [MongoDB](https://github.com/mongodb/mongo) using [connect-mongo](https://github.com/kcbanner/connect-mongo); a MongoDB-based session store.
+ Uses [Redis](https://github.com/antirez/redis) as an Adapter for [Socket.io](https://github.com/socketio/socket.io).


#### MongoDB & MongoDBAtlas
You need to create a database on MongoDBAtlas, then create a database user, get the `MongoDB URI`, and assign it to `dbURI`.


#### Session
The session needs a random string to make sure the session id in the browser is random. That random string is used to encrypt the session id in the browser, _Why?_ To prevent session id guessing.


### Database<a name="database"></a>
Mongoose is used to interact with a MongoDB that's hosted by MongoLab. 

#### Schemas
There are two schemas; users and rooms. 

Each user has a username, passowrd, social Id, and picture. If the user is logged via username and password, then social Id has to be null, and the if logged in via a social account, then the password will be null.

Each room has a title, and array of connections. Each item in the connections array represents a user connected through a unique socket; object composed of _{userId + socketId}_. Both of them together are unique.

### Models<a name="models"></a>
Each model wraps Mongoose Model object, overrides and provides some methods. There are two models; User and Room.

### Session<a name="session"></a>
Session in Express applications are best managed using [express-session](https://github.com/expressjs/session) package. Session data are stored locally on your computer, while it's stored in the database on the production environment. Session data will be deleted upon logging out.

### User Authentication<a name="auth"></a>
User can login using either a username and password, or login via a social account. User authentication is done using [Passport](https://github.com/jaredhanson/passport). Passport has extensive, and step-by-step [documentation](http://passportjs.org/docs/) on how to implement each way of authentication.

### Sockets<a name="sockets"></a>
Having an active connection opened between the client and the server so client can send and receive data. This allows real-time communication using TCP sockets. This is made possible by [Socket.io](https://github.com/socketio/socket.io).

The client starts by connecting to the server through a socket(maybe also assigned to a specific namespace). Once connections is successful, client and server can emit and listen to events. 

There are two namespaces used; `/rooms` and `/chatroom`.

### Logger<a name="logger"></a>
On Heroku, you can monitor the logs by clicking on _More -> View Logs_ on the top left of your application dashboard.
