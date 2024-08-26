## Vibez

Vibez is a real-time chat web application designed for seamless and instant messaging. Whether you want to connect with friends or collaborate with a team, Vibez offers a smooth and intuitive platform for all your communication needs.

![Screenshot (321)](https://github.com/user-attachments/assets/506b031f-d444-4f72-832f-62a79f5a4625)


# Tech Stack

  • Frontend: React.js, TailwindCSS, Daisy UI
  
  • Backend: Node.js, Express.js
  
  • Database: MongoDB
  
  • Real-Time Communication: Socket.io
  
  • Global State Management: Zustand
  
  • Authentication: JWT (JSON Web Tokens)

# Features

  • Real-Time Messaging: Instantly send and receive messages in real-time with Socket.io.
  
  • User Authentication: Secure account creation and login with JWT.
  
  • Online User Status: Track online users with Socket.io and React Context.
  
  • Responsive UI: Designed with TailwindCSS and Daisy UI for a sleek, modern interface.
  
  • Error Handling: Robust error management on both the server and client sides.
  
  • Global State Management: Efficient state management using Zustand.

# Setup Instructions

  1.Clone the repository:

    git clone https://github.com/Himani2615/vibez.git
    cd vibez

 2.Install dependencies:

  • Install root-level dependencies:

    npm install

  • Navigate to the frontend directory and install dependencies:

    cd frontend
    npm install

  • Navigate to the backend directory and install dependencies:

    cd backend
    npm install

3.Environment Variables:

  In the root directory, create a .env file and add the following:

    PORT=your_port_number
    MONGO_DB_URL=your_mongodb_connection_string
    JWT_SECRET_KEY=your_jwt_secret
    NODE_ENV=development

4.Running the App:

  • To start the backend server:

    cd backend
    npm run server
    
• To start the frontend server:

    cd frontend
    npm start

The app should now be running on your specified PORT.

# Usage

  Create an Account: Sign up to create an account.
  
  Start Messaging: Log in and start chatting with your friends or team members instantly.

# Contributing

  We welcome contributions from the community! If you have ideas or improvements, feel free to submit a pull request.
