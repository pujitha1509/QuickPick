# QuickPick - Online Voting System

## Overview

QuickPick is a MERN stack online voting system that allows users to create, share, and participate in polls. Users can register, log in, create new votes, view results in real-time, and manage their own polls.

## Features

- User authentication (register/login/logout)
- Create, view, and delete polls (votes)
- Vote on any poll and see live results
- View all polls or only your own
- Responsive and modern UI
- Secure backend with JWT authentication

## Technologies Used

- **Frontend:** React, Redux, Chart.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcrypt

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/pujitha1509/QuickPick.git
   ```
2. Install dependencies for both server and client:
   ```
   cd server
   npm install
   cd ../client
   npm install
   ```
3. Set up your .env file in the server directory:
   ```
   PORT=4000
   DATABASE='mongodb://localhost/<DATABASE_NAME>'
   SECRET='YourSecretKey'
   ```
4. Start MongoDB locally.
5. Run the backend server:
   ```
   cd server
   npm start
   ```
6. Run the frontend React app:
   ```
   cd client
   npm start
   ```
7. Open your browser at `http://localhost:3000`.
