# Image Processing API  Project #

## Introduction ##
MyName : Samar Mohamed Ibrahim .

This is a simple REST API allowing users to  access and resize images using the Sharp Node.js image processing module.

## Getting Started ##

### Installing dependencies ###

After cloning the repo, To install all dependencies , you must inatall npm usting this command in terminal:

    npm install

### Running the server ###

To Run the server use the following command in terminal 
notice(the app will then be available on port 3000 by default):

    npm run start


### Scripts ###

#### Transpiling typescript to javascript ####

    npm run build


#### Testing ####

A jasmine testing suite can be used to validate the endpoint and  the images resizing .

    npm run test

#### Formatting ####

The code can be automatically formatted using prettier.

    npm run prettier

#### Linting ####

The code can be automatically linted using ESlint. 

    npm run lint

---
## How to use ##
After Running the Server , 
The endpoint is `api/images` to access and resize images where  are avalible images in  images folder .
The endpoint requires three query params:
    - filename : the filename  of one of the images available in the  images   folder  , note (the file name must be without extension).
    - height : it should be a positive integer.
    - it should be a positive integer  .

An example of a correct endpoint : 

http://localhost:3000/api/images?filename=santamonica&height=400&width=400