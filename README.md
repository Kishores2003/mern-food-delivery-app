# EagerEats – MERN Stack-Based Food Delivery Platform

EagerEats is a full-stack food ordering application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It provides a seamless experience for users to browse, order food online, and manage their orders. The platform features secure JWT-based authentication and includes automated testing tools.

---

## Features

- **User Authentication:** Secure sign-up and login using JWT
- **Browse Food Items:** Organized by category on the homepage
- **Cart Management:** Add, update, and delete items
- **Order Placement:** Checkout and place orders easily
- **Order History:** View past orders on the "My Orders" page
- **Testing:** API testing with Jest, UI automation with Selenium WebDriver

---

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Testing Tools:** Jest, Selenium WebDriver, ThunderClient

---

## Project Structure
---

## Setup Instructions

### Prerequisites
- Node.js v14+
- MongoDB v4+
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/eagereats.git
cd eagereats

```
2. **Backend setup**

```bash
cd backend
npm install
npx nodemon index.js
```
3. **Frontend setup**

```bash
cd ../src
npm install
npm start
```


## API Endpoints

1. **Create User** – `POST /api/createuser`  
   Creates a new user with email, name, and password.

2. **Login User** – `POST /api/loginuser`  
   Authenticates a user and returns a JWT token.

3. **Get Food Items** – `POST /api/foodData`  
   Fetches available food items and their categories.

4. **Place Order** – `POST /api/orderData`  
   Creates or updates a user order. (Protected by JWT)

5. **Retrieve Orders** – `POST /api/myorderData`  
   Returns the order history for a user. (Protected by JWT)

## Authentication

- JWT-based authentication is used for protected routes
- Tokens are signed with a secret key and stored in localStorage
- Tokens must be sent in requests via the Authorization header as `Bearer <token>`
- Middleware verifies token validity before allowing access to certain endpoints

## Demo

Watch the demo:  
[![Demo Video](https://img.shields.io/badge/Demo-Video-blue)](https://drive.google.com/file/d/16Y_3upwBoN-SN5J3RE22HqMI_K5K8Yxy/view?usp=drivesdk)

## Future Enhancements

- Persistent cart storage
- Multi-factor authentication
- Improved responsive design for all devices
- Real-time order tracking system
- User profile management
- Advanced search and filters
- Push notifications for users
- Review and rating system for food items

## Authors

- Kishore S
- Sanjay R
- Praveen S
- Rishikeshwaran K R



