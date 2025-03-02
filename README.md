<<<<<<< HEAD
# Compliment_Management_System-Backend-
# Complaint_Management_System-Front-end-
=======
Compliment Management System - Backend Process Documentation 🎉
👉 Overview 🌐
The Compliment Management System uses MySQL as its database to store user and compliment data. This document explains the key processes involved in setting up and using MySQL in the backend, including:

User registration 📝
Login 🔐
Compliment management (Create, Read, Update, Delete) 💬

👉 Setting Up the MySQL Database ⚙️
2.1 Install MySQL 💻
Install MySQL on the development or production environment:
Linux: Use apt-get install mysql-server
macOS: Use brew install mysql
Windows: Download from the official MySQL website.
2.2 Create Database 🗃️
After installation, log in to the MySQL command-line interface and create a database for the system:

This database will store all the data related to users and compliments.

2.3 Define Tables 📊
Users Table: Stores user data such as username, password, and role. This table handles user authentication.
Compliments Table: Stores compliment details like subject, description, status, and links compliments to users through user_id.

👉 Integration with Backend 🔗
3.1 Set up Sequelize (ORM) ⚙️
Sequelize is an Object-Relational Mapping (ORM) tool for Node.js that interacts with MySQL databases in a more manageable way.
It abstracts raw SQL queries, enabling the use of JavaScript to perform database operations.
Sequelize automatically generates SQL queries based on defined models.
3.2 Configure Environment Variables 🔑
Store sensitive information such as database credentials in the .env file for better security.
Common environment variables for MySQL:

Variable	Description
DB_HOST	Hostname of MySQL server (e.g., localhost for local setups)
DB_USER	MySQL user with access rights to the database
DB_PASSWORD	Password associated with the MySQL user
DB_NAME	The name of the MySQL database used by the system

👉 User Registration and Authentication 🧑‍💻🔒
4.1 User Registration Process 📝
During registration:
A new user is created in the users table with a username, password (hashed), and an assigned role (customer or admin).
4.2 User Login 🔐
User authentication:
The system checks if the provided username and password match any entry in the users table.
If successful, a JWT (JSON Web Token) is generated.
The token is used for authenticating further requests that require authorization.

👉 Compliment Management (CRUD Operations) 💬
5.1 Creating Compliments ✍️
When a user (typically a customer) submits a compliment:
The system stores the compliment's details (subject, description) in the compliments table.
The compliment is linked to the user's ID via the user_id.
5.2 Viewing Compliments 👀
Customers can only view their own compliments.
Admins have access to view all compliments and can filter and search for compliments based on specific criteria (e.g., status or subject).
5.3 Updating Compliment Status 🔄
Admins have the ability to change the status of a compliment (e.g., mark it as "closed" once resolved).
5.4 Deleting Compliments 🗑️
Admins can delete compliments if needed (e.g., inappropriate content or duplicates).

👉 Data Integrity and Security 🔐
6.1 Password Hashing 🔒
For security, passwords are never stored in plain text. Instead, passwords are hashed before being stored in the users table.
A strong hashing algorithm like bcrypt is used to ensure that passwords are securely stored.
6.2 Database Relationships 🔗
The users and compliments tables are related via a foreign key.
A user can have multiple compliments, but each compliment belongs to a specific user. This relationship is established through the user_id field in the compliments table.

👉 Authentication and Authorization 🚀
7.1 JWT Authentication 🛡️
After login, the backend generates a JWT token.
This token is used for authenticating requests that require user privileges.
The token is stored in the client's local storage or session storage and is sent in the Authorization header with subsequent API requests.
7.2 Role-based Authorization 🎭
Depending on the user's role (admin or customer), different permissions are granted:
Admins have full access to view, edit, and delete compliments and manage compliment statuses.
Customers can only view and create their own compliments and cannot modify others' compliments.

👉 Error Handling and Validation ⚠️
8.1 Input Validation 📝
The system validates input fields such as:
Username
Password
Compliment description
Validation ensures that inputs meet certain criteria (e.g., no empty fields, strong passwords).
8.2 Database Constraints 📏
Unique Constraints: Ensures that the username is unique when registering a new user.
Foreign Key Constraints: Ensures that every compliment is linked to a valid user.
8.3 Error Responses ⚡
The system returns appropriate error codes and messages for common issues such as invalid credentials, missing data, or access restrictions.

👉 Performance Optimization ⚡
9.1 Indexing 🏷️
Create indexes on frequently queried fields (e.g., username, status) to improve the performance of SELECT queries.
9.2 Query Optimization ⚙️
Optimize SQL queries to reduce unnecessary joins and improve execution time for complex queries.

👉 Monitoring and Logging 📊
10.1 Database Monitoring 📉
Use tools like MySQL Workbench or phpMyAdmin to monitor database performance and detect any slow queries or potential issues.
10.2 Error Logging 📜
Log important actions and errors in the backend (e.g., failed login attempts, database errors) to track issues and troubleshoot effectively.
>>>>>>> 066fe7689646819ad67155893324d0e99b90f7d3
