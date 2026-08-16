# Apartment Complaint Management System

## Project Overview

The Apartment Complaint Management System is a web-based application that allows apartment residents to submit complaints related to common issues such as plumbing, internet, electricity, maintenance, and other apartment services.

The system provides a simple way to submit, store, and manage complaints digitally instead of relying on informal methods such as phone calls or messages.

## Problem Statement

In apartment communities, residents often report maintenance issues through calls, messages, or verbal communication. This can make it difficult to properly record, track, and manage complaints.

This project provides a centralized digital system for handling apartment complaints efficiently.

## Objectives

* Allow residents to submit complaints through a web interface.
* Store complaint information in a database.
* Provide backend APIs for handling complaint data.
* Make complaint management more organized and efficient.
* Demonstrate frontend development, backend development, APIs, and database integration.

## Features

* Complaint submission
* Complaint category selection
* Complaint description
* Resident information
* Complaint data storage
* Backend REST APIs
* Supabase database integration
* Simple and user-friendly interface

## Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* Supabase

### Tools

* Visual Studio Code
* Git
* GitHub

## Project Structure

```text
apartment-complaint-management/
│
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

> The `.env` file contains private Supabase credentials and is not uploaded to GitHub.

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/DeepakPai7/apartment-complaint-management.git
```

### 2. Open the project folder

```bash
cd apartment-complaint-management
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure Supabase

Create a `.env` file in the project root directory.

Add the required Supabase environment variables:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
```

Replace the placeholder values with your own Supabase project credentials.

**Do not upload the `.env` file to GitHub or share your actual Supabase credentials.**

The `.env` file is excluded from GitHub using `.gitignore`.

### 5. Start the server

```bash
node server.js
```

The application can then be accessed using the local address provided by the server.

## Working Flow

```text
Resident
   ↓
Complaint Form
   ↓
Frontend (HTML/CSS/JavaScript)
   ↓
Node.js + Express Backend
   ↓
Supabase Database
   ↓
Complaint Data Stored
```

## Database

Supabase is used as the database for storing complaint information.

The application uses environment variables to connect to Supabase. Sensitive credentials are stored locally in the `.env` file and are not included in the GitHub repository.

## API Testing

The backend APIs can be tested using tools such as Postman.

Screenshots of API testing can be included as part of the project submission to demonstrate that the backend is working correctly.

## Short Explanation

This project implements an Apartment Complaint Management System using a frontend, backend, and database. Residents can submit apartment-related complaints through the web interface. The Node.js and Express backend processes the requests and communicates with Supabase to store complaint data.

The project demonstrates the practical implementation of frontend development, REST APIs, Node.js, Express.js, and database integration.

## Security

Sensitive Supabase credentials are stored in the `.env` file.

The `.gitignore` file prevents the following from being uploaded to GitHub:

```text
.env
node_modules/
```

Therefore, private credentials are not included in the public repository.

## Future Improvements

* User authentication
* Admin dashboard
* Complaint status tracking
* Complaint priority levels
* Search and filtering
* Email or notification alerts
* Image upload for complaints
* Complaint history
* Online deployment

## Author

**Deepak Pai**

GitHub: https://github.com/DeepakPai7
