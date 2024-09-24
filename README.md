# NATOURS Booking API

### Introduction :

Booking API is a project to book tourist places with a guide and show the details of the place. The user creates an account on the site and then he can book a trip with the guides and can see the reviews

### Project Support Features

- Users can perform the following functions: sign up, log in, reset password,forgot the password , update and get current user data and delet current user for their accounts

- Admin can perform the following functions :
  CRUD operation of user ,CRUD operation of Tour and get top 5 ,monthly plan , tour stats ,tour within redius and get distances to tour from point

- Admin and user can perform CRUD operation of Reviews and create new review on tour and get all reviews on tour

### Technologies Used

- [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
- [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
- [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
- [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.
- [MongoDB Atlas](https://www.mongodb) MongoDB Atlas is a Database-as-a-Service (DBaaS) that offers a fully managed cloud-based solution for deploying, scaling, and maintaining MongoDB databases.
- [Mailtrap](https://www.mailtrap.io) Email Platform for Dev Teams — Test, Send, and Control your email infrastructure, all in one place.

### Installation Guide

- Use the package manager npm and Run npm install to install all dependencies : npm install
- You can use my connect string in config.env file to connect with my mongodb atlas.
- sometime you need Vpn so i recommended you using windscripe as extention in chrom
- (optional) you can use compase for brows database collection nicly
- create account in mailtrap and copy username and password and add it to config.env in EMAIL_USERNAME amd EMAIL_PASSWORD

### Usage

- Run npm start to start the application.
- Connect to the API using Postman on port 3000.

### Link API Endpoints with EX:

### https://documenter.getpostman.com/view/27354627/2sA2xb6bLN

### some environment variable you need add in postman :

{{url}} value is : 127.0.0.1:3000 , {{jwt}} value is token you recive when login or signup , {{passwoed}} password for admin is :test1234

### Authors

- [jala zaitoun](https://github.com/jalalzaitoun)

### License

This project is available for use under the MIT License.
