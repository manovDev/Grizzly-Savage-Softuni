
# Grizzly-Savage-Softuni React

### Deployed app version - [here](https://grizzly-savage.firebaseapp.com/)
### Deployed app version 2 - [here](https://grizzly-savage.web.app/)

## Table of Contents
- Description
- Project Architecture - Basic Overview (important directories)
- Tools Required
- Running the App
- Authors

## Description

Grizzly Savage is eCommerce website / brand where you can find the best hiking/camping equipment. (SoftUni React project)
The users can can search products by name, product id and filter by category and brand.
If the user is logged in, he can place orders and view them and their details.
There is also profile page where he can edit some of his account information.

When the user add a product to the cart he can access it from the cart icon in the nav bar and the orders from the profile icon in the nav bar.

The admin users have access to the dashboard where they can create, edit and delete products, orders, categories, brands and more...

* The admin functionality is still under development

## Project Architecture - Basic Overview (important directories)

```
  client
  ├── build
  ├── public
  ├── src
  │       ├── actions
  │       ├── components
  │       ├── constants
  |       ├── contexts
  |       ├── hooks
  |       ├── reducers
  |       ├── services
  |       ├── App.js
  |       ├── App.css
  |       ├── env.js
  |       ├── firebase.js
  |       ├── index.css
  |       ├── index.js
  |       ├── store.js
  |       ├── firebase.json
  │
  server
  ├── src
  |       ├── config
  |       ├── controllers
  |       ├── middlewares
  |       ├── models
  |       ├── services
  |       ├── router.js
  |       ├── server.js
```

### Tools Required

You would require the following tools to run the project:

* A text editor or an IDE (like Visual Studio Code)

## Running the App

Steps and commands for running the app:

* Steps:
  ```
  Open two terminals
  
    [Client]
      In the first terminal type `cd client`
      Run `npm install` to install client side dependencies
      After the installation is finished type `npm start`
      
    [Server]
      In the second terminal type `cd server`
      Run `npm install` to install server side dependencies
      After the installation is finished type `nodemon './src/server.js'`
  ```

## Authors

#### Ivo Manov
* [GitHub]

[//]: # (HyperLinks)

[GitHub Repository]: https://github.com/manovDev/Grizzly-Savage-Softuni
[GitHub]: https://github.com/manovDev
