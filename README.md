Of course. Here is a complete README file for your "Rentify" project, including a detailed description, features, and setup instructions.

-----

# Rentify - Your Modern Real Estate Rental Platform

Welcome to Rentify\! This is a full-stack web application designed to make finding and renting your next home a simple and seamless experience. Built with a modern technology stack, Rentify provides a feature-rich, interactive, and secure platform for users to browse property listings, book visits, and manage their favorite properties.

This project was built to showcase a complete end-to-end rental application, from the user interface to the backend server and database.

## Features

  * **User Authentication**: Secure login and registration powered by Auth0, ensuring that user data and actions are protected.
  * **Interactive Property Map**: A dynamic map view using Leaflet that allows users to see property locations visually.
  * **Detailed Property Listings**: Users can browse a wide range of properties, with detailed descriptions, pricing, and high-quality images.
  * **Advanced Search & Filtering**: Easily find the perfect home by filtering properties based on location or other criteria.
  * **Favorites System**: Logged-in users can save their favorite properties to a personal list for easy access later.
  * **Booking System**: Schedule property visits directly through the platform with an easy-to-use date picker.
  * **Image Uploads**: Users can add new property listings with image uploads handled by Cloudinary.
  * **Fully Responsive Design**: The entire application is built to be accessible and functional on all devices, from desktops to mobile phones.

-----

## Technology Stack

This project is divided into two main parts: a client-side frontend and a server-side backend.

  * **Client (Frontend)**:

      * **Framework**: React.js
      * **Build Tool**: Vite
      * **Routing**: React Router
      * **Authentication**: Auth0 React SDK
      * **API Communication**: Axios
      * **UI & Styling**: Mantine UI, Framer Motion, CSS
      * **Mapping**: React Leaflet

  * **Server (Backend)**:

      * **Framework**: Node.js with Express.js
      * **Database**: MongoDB
      * **ORM**: Prisma
      * **Authentication**: `express-oauth2-jwt-bearer` for token validation

-----

## Getting Started

To get a local copy up and running, follow these simple steps.

### **Prerequisites**

  * Node.js (v16 or later)
  * npm (or yarn)
  * A free MongoDB Atlas account
  * A free Auth0 account

### **1. Setup the Backend Server**

First, navigate into the `server` directory:

```bash
cd server
```

Install the necessary dependencies:

```bash
npm install
```

Create a `.env` file in the `server` directory and add your MongoDB connection string. Make sure to URL-encode your password if it contains special characters.

```
DATABASE_URL="mongodb+srv://<USER>:<PASSWORD>@<YOUR_CLUSTER_URL>/Rentify?retryWrites=true&w=majority"
```

Push the database schema to your MongoDB Atlas cluster:

```bash
npx prisma db push
```

Finally, start the backend server:

```bash
npm start
```

The server should now be running on `http://localhost:8000`.

### **2. Setup the Frontend Client**

Open a new terminal and navigate into the `client` directory:

```bash
cd client
```

Install the necessary dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Your React application should now be running on `http://localhost:5173`.

### **3. Configure Auth0**

The final step is to configure your Auth0 application settings to allow your local environment to handle logins.

1.  Go to your **Auth0 Dashboard**.
2.  Navigate to your application's **Settings**.
3.  Add `http://localhost:5173` to the following fields:
      * **Allowed Callback URLs**
      * **Allowed Logout URLs**
      * **Allowed Web Origins**
4.  Save your changes.
