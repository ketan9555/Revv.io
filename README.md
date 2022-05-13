# Revv.io

This is a website clone of https://www.revv.co.in/ , this is a car rental website, built using Html, Css, JavaScript, NodeJS, Express, Mongoose, MongoDB Atlas and AWS EC2, Heroku for storage.

## Documentation for API?

## Sign Up
- Method : POST
- URL : https://revv-backend-deploy.herokuapp.com/register
- req body example : {"email" : "tsk@gmail.com", "number":"1234567891", "user_name": "Satendra" ,"password": "Masai@123"}
- In response you will get a bearer token that you have to use in all requests

## Login
- Method : POST
- URL : https://revv-backend-deploy.herokuapp.com/login
- req body example : {"email" : "sk25@gmail.com", "password": "Masai@123"}
- In response you will get a bearer token that you have to use in all requests


## Get user data
- Method : GET
- URL : https://revv-backend-deploy.herokuapp.com/users/${_id}
- In response you will get user details
- Use token as Bearer token

## Get list of cars availiable in a location
- Method : GET
- URL : https://revv-backend-deploy.herokuapp.com/q/:locationId/:duration
- params : 
    - locationId : ID associated with a location
    - duration : Rent duration in days, used to calculate pricing plans
- In response user will get a list of car details with pricing plans,registered within the location specified.

## Get car details availiable for booking
- Method : GET
- URL : https://revv-backend-deploy.herokuapp.com/q/:locationId/model/:modelId
- params : 
    - locationId : ID associated with a location
    - modelId : ID of the car model selected
- In response user will details about a car of the specified model which is availiable for booking.


## Team Members
- #### [Tejasvini-Patil](https://www.linkedin.com/in/tejasvini-patil)
- #### [Satendra Kumar](www.linkedin.com/in/satendra-yadav-5b8067170/)
- #### [Athul-Ponthen](https://www.linkedin.com/in/athul-ponthen/)
- #### [Mangidkar-Ketan](https://www.linkedin.com/in/mangidkar-ketan)
