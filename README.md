# AtlastVest

AtlasVest is an innovative micro-investment platform that allows users to invest in both local and global stocks with as low as $1. The platform provides tools to track investments, view analytics, and manage portfolios with ease. Built using HTML, CSS, JavaScript, and Firebase, AtlasVest is constantly evolving to offer a better user experience.


# Table of Contents

1. Features


2. Technology Stack


3. Installation


4. Usage


5. Contributing

6. Features

1. Micro-Investments

Users can invest as low as $1 in a wide variety of local and global stocks.



2. Portfolio Tracking

Track real-time portfolio performance, including profit/loss trends and total investments.



3. Investment Analytics

Gain insights through visual analytics, charts, and reports.



4. Secure Transactions

Built on Firebase for robust authentication and secure database operations.



5. User-Friendly Design

Responsive and intuitive design optimized for all devices.



# Technology Stack

Frontend: HTML, CSS, JavaScript

Backend: Firebase Functions (for future updates)

Database: Firebase Firestore

Authentication: Firebase Authentication


# Installation

Clone the Repository

git clone https://github.com/your-username/atlasvest.git
cd atlasvest

Firebase Setup

1. Log in to your Firebase Console.


2. Create a new project and enable Firestore and Authentication.


3. Copy your Firebase config and replace the placeholders in firebase-config.js:

const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
};
export default firebaseConfig;



Run the Application

Open the index.html file in your browser. No server is required as this is a static web app.



# Usage

1. Register/Login:
Use the registration form to sign up or log in to your account.


2. Add Investments:
Search for stocks and add investments using the input fields.


3. Track Portfolio:
Navigate to the portfolio section to monitor your investment performance.


4. View Analytics:
Explore the analytics page for detailed insights into your investments.


# Contributing

We’re actively developing AtlasVest and welcome contributions from developers!

Steps to Contribute

1. Fork the repository.


2. Create a new branch for your feature or bug fix:

git checkout -b feature-name


3. Make your changes and test thoroughly.


4. Commit your work:

git commit -m "Add your message here"


5. Push to your branch:

git push origin feature-name


6. Open a pull request for review.




