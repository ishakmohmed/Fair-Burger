# Fair Burger

### [1] See Live Version Immediately
If you're rushing, you could skip viewing the live app and view the screenshots right away (see point 5 below). If no, keep reading to access the app from your mobile phone.

#### Android Users:

Install Expo Go using this link: https://play.google.com/store/apps/details?id=host.exp.exponent 

Head over to following link and scan the QR code from Expo Go app: https://expo.io/@ishakmohmed/fairburger?release-channel=staging

#### iOS Users:

Install Expo Go using this link: https://apps.apple.com/my/app/expo-go/id982107779 . `UNFORTUNATELY`, before scanning the QR code from the following link, you need to login using the same credentials that was used to develop this app because of Apple's policy which I can't share here due to privacy concerns as this repo is public. If you don't have an Android device, message me so that I can give you the login credentials for Expo Go.

Head over to following link and scan the QR code from Expo Go app: https://expo.io/@ishakmohmed/fairburger?release-channel=staging

### [2] Demo Credentials (also included in login page)
* Email: masteruser@email.com
* Password: Masteruser975

### [3] Introduction
Fair Burger is a full stack mobile application made using React Native. It is cross-platform and runs seamlessly on iOS and Android phones. The backend for this project is built using Node. Fair burger is an app that helps street vendors to manage queues in their stalls. This app is made by keeping burger vendors in mind (street vendors), hence the name Fair Burger. With this app, vendors can add/delete items to menu. Then, they can add orders based on their menu. The orders will be added to queue screen.  Of course, they may delete orders too. At this point, I don't want to bore you with too much of text. You may see the live version (see point 1) or the screenshots of this app (see point 5) if you don't have access to your phone. 

### [4] Technologies Used/Features Implemented
* React Native
* React Navigation
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
![Mohmed Ishak](https://user-images.githubusercontent.com/52876913/136454607-30194fcb-5275-4cf8-be32-a6080c975fd7.png)
![Mohmed Ishak](https://user-images.githubusercontent.com/52876913/136455029-cec58511-a8cd-4bb2-944b-5afc24eb20c9.png)
![Mohmed Ishak](https://user-images.githubusercontent.com/52876913/136455346-cd78dd72-58c5-4c5f-a6a8-0f94d0f46089.png)

### [6] How to Run the Project Locally
If you want to just view the completed, hosted version of this app, refer point 1 above. Otherwise, keep reading. Fork this repository and clone it to your machine. Make sure you've got Node, MongoDB, and Expo CLI installed on your machine. You may Google how to do so as it's very simple and I don't want to pollute my README file and bore you with too much of instructions. In the backend folder, add a .env file and paste the following code:
    
    NODE_ENV=development
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/temporaryDB
    JWT_SECRET_KEY=thisisafakejwtsecretkey
Then install all frontend and backend dependencies for frontend and backend folder individually. In frontend folder, there's a subfolder called ```config``` which has a file named ```settings.js```. Change the development URL to the URL of your local backend. Run the backend server using ```nodemon index.js``` from backend folder. Launch the app from the frontend folder using ```npm start```. A website will be launched. Follow the instructions in that site to view the app on your mobile phone (usually you just need to scan the QR code from your Expo Go app). If the instructions change in future, please paste this phrase to Google search engine and do a super quick research: "How to run an Expo app from my mobile phone".  

### [7] Hosting
* Frontend: Expo
* Backend: Heroku
* Database: MongoDB Atlas
