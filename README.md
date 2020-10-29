# Alpine Tents

> eCommerce store built with the React, Redux, Express, Node, and MongoDB.

## Usage

### ES Modules

You must have Node v14.6 or greater as the project uses ES6 modules.

### Env Variables

Create a .env file in then root and add the following:

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```
