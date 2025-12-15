# Kong-Posh

Kong-Posh is a full-stack e-commerce web application built using the MERN stack.  
The platform is designed for selling authentic Kashmiri products, product management, cart functionality, and order processing using Cash on Delivery (COD).

This project demonstrates real-world e-commerce workflows, secure authentication, state management using Redux, and RESTful API design.

---

## Tech Stack

**Frontend**
- React.js
- Redux (state management)
- HTML, CSS, JavaScript

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB (Mongoose)

**Authentication**
- JWT (JSON Web Tokens)

**Payment Method**
- Cash on Delivery (COD)

---

## Features

### User Features
- Browse products and view product details
- Add and remove products from cart
- Cart state managed using Redux
- Place orders using Cash on Delivery
- View order history

### Admin Features
- Admin authentication
- Add, update, and delete products
- Manage product categories
- View and manage customer orders

---

## Project Structure
kong-posh/
├── # Frontend
│ ├── store/ # Redux store, reducers, actions
├── kong-posh-backend/ # Node.js & Express backend
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ ├── controllers/
│ └── middleware/
└── README.md

---

## Installation and Setup

### Clone the repository
git clone https://github.com/coderfazil/kong-posh.git

cd kong-posh
### Backend setup
cd kong-posh-backend
npm install

Create a `.env` file in the `kong-posh-backend` folder:
PORT=5000
MONGO_URI=mongodb://localhost:27017/kong-posh

Start the backend server:
node main.js


### Frontend setup
npm install
npm run dev

---

## Deployment
This project is not deployed yet and currently runs in a local development environment.

---

## Learning Outcomes
- Building a full-stack MERN application
- Managing global state using Redux
- Designing RESTful APIs
- Structuring scalable backend architecture

---

## Author
Mohammad Fazil  
GitHub: https://github.com/coderfazil


