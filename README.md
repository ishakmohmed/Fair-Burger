
# Fair Burger

### [1] See Live Version Immediately
If you're rushing, you may view the screenshots right away (see point 5 below). If no, keep reading to access the app from your mobile phone.

Android Users:

Install Expo Go using this link: https://play.google.com/store/apps/details?id=host.exp.exponent 
Head over to following link and scan the QR code from Expo Go app: https://expo.io/@ishakmohmed/fairburger?release-channel=staging

iOS Users:

Head over to following link and scan the QR code from your phone using any preferred way to scan QR codes.

### [2] Demo Credentials (also included in login page)
* Email: masteruser@email.com
* Password: Masteruser975

### [3] Introduction
Fair Burger is a full stack mobile application made using React Native. It is cross-platform and runs seamlessly on iOS and Android phones. The backend for this project is built using Node. Fair burger is an app that helps street vendors to manage queues in their stalls. This app is made by keeping burger vendors in mind (street vendors), hence the name Fair Burger. With this app, vendors can add/delete items to menu. Then, they can add orders based on their menu. The orders will be added to queue screen.  Of course, they may delete orders too. At this point, I don't want to bore you with too much of text. You may see the live version (see point 1) or the screenshots of this app (see point 5) if you don't have access to your phone. 

### [4] Technologies Used/Features Implemented
* React Native
* React Hooks
* Expo 
* Apisauce
* Formik
* Yup
* Node
* Express
* MongoDB
* Mongoose
* Caching
* JWT authentication
* Heroku 

Note: no design library is used. The entire UI of this application is built from the ground up.

### [5] Screenshots
#### Home screen of Fair Burger
![1](https://user-images.githubusercontent.com/52876913/120933155-62339180-c72b-11eb-858a-7ae61097ba74.png)

#### Login screen
![3](https://user-images.githubusercontent.com/52876913/120933274-f00f7c80-c72b-11eb-86d3-5b421099c33d.png)

#### Queue screen
![4](https://user-images.githubusercontent.com/52876913/120933293-06b5d380-c72c-11eb-98d7-9346e0a46bd1.png)

#### Queue screen when loading (animated)
![5](https://user-images.githubusercontent.com/52876913/120933332-3cf35300-c72c-11eb-8586-78ea070e9017.png)

#### Add order screen
![6](https://user-images.githubusercontent.com/52876913/120933342-509eb980-c72c-11eb-8bfa-205273e65d95.png)

#### Add order screen when quantity is increased
![7](https://user-images.githubusercontent.com/52876913/120933374-76c45980-c72c-11eb-8821-4c7b8cb004f6.png)

#### Add menu screen
![8](https://user-images.githubusercontent.com/52876913/120933385-8479df00-c72c-11eb-838c-5627e1d19170.png)

#### Menu screen
![9](https://user-images.githubusercontent.com/52876913/120933406-9bb8cc80-c72c-11eb-9e28-cc7ba494b181.png)

#### Menu screen when an item is deleted or menu is loaded (animated)
![10](https://user-images.githubusercontent.com/52876913/120933420-ad01d900-c72c-11eb-8695-4dbd0e20759a.png)

#### Logout screen (animated)
![11](https://user-images.githubusercontent.com/52876913/120933461-d7ec2d00-c72c-11eb-81a0-ab3fab806f91.png)

### [6] How to Run the project
If you want to just view the completed version of this app, refer point 1 above. Otherwise, keep reading. Fork this repository and clone it to your machine. Make sure you've got Node, MongoDB, and Expo CLI installed on your machine. You may Google how to do so as it's very simple and I don't want to pollute my README file. In the backend folder, add a .env file and paste the following code:
    
    NODE_ENV=development
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/temporaryDB
    JWT_SECRET_KEY=thisisafakejwtsecretkey
Then install all frontend and backend dependencies by typing ```npm i``` in terminal for frontend and backend folder individually. Then, run the backend server by typing ```nodemon index.js``` in the terminal under backend folder. Then, launch the app from the frontend folder in the terminal by typing ```npm start```. A website will be launched. Follow the instructions in that site to view the app on your mobile phone. If the instructions change in future, please paste this phrase to Google search engine and do a super quick research: "How to run an Expo app from my mobile phone".  

### [7] Hosting
* Frontend: Expo
* Backend: Heroku
* Database: MongoDB Atlas
