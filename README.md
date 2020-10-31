# Alpine Tents

> eCommerce store built with the React, Redux, Express, Node, and MongoDB.

## Homepage

![screenshot](https://github.com/nmccooey/alpine-tents/blob/main/screenshots/home.png)

### Shopping Cart

![screenshot](https://github.com/nmccooey/alpine-tents/blob/main/screenshots/cart.png)

### Admin Account (product, user, and order management)

![screenshot](https://github.com/nmccooey/alpine-tents/blob/main/screenshots/admin-users.png)
![screenshot](https://github.com/nmccooey/alpine-tents/blob/main/screenshots/admin-products.png)
![screenshot](https://github.com/nmccooey/alpine-tents/blob/main/screenshots/admin-orders.png)

## Other Features

- Product reviews and ratings
- Product carousel
- Pagination
- Product search feature
- User profile with orders
- Checkout process (shipping, payment method, order confirmation)
- PayPal / credit card integration
- Database seeder (products & users)

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

### Seeding

You can seed the database with some sample users and products as well as delete all the data.

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```
