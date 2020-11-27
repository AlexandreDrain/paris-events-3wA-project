import app from "../app/app.js";

export default class Login
{
    constructor() {
        this.view = "views/login.html";
    }

    executeHttpRequest() {
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        var firebaseConfig = {
            apiKey: "AIzaSyC98Dnfh3M5e2urlS-VNfxcVrkxr8-Pj90",
            authDomain: "parisevents-56ebe.firebaseapp.com",
            databaseURL: "https://parisevents-56ebe.firebaseio.com",
            projectId: "parisevents-56ebe",
            storageBucket: "parisevents-56ebe.appspot.com",
            messagingSenderId: "22045580509",
            appId: "1:22045580509:web:9daaa400482a7f21a6cf34",
            measurementId: "G-DM5PZ9D4FG"
        };

        // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        app.dom.listener(".signUpGoogle", "click", (e) => {
            e.preventDefault();
            let provider = new firebase.auth.GoogleAuthProvider();

            // firebase.auth().signInWithPopup(provider).then((user) => {
            firebase.auth().signInWithPopup(provider).then((user) => {
                // vous pouvez récupérer le nom comme ceci :
                alert(user.additionalUserInfo.profile.name);
                // document.querySelector("a#connect").innerHTML = user.additionalUserInfo.profile.name;
            }).catch(function(error) {
                console.log(error);
            });
        });

        app.dom.listener(".signUpGithub", "click", (e) => {
            e.preventDefault();
            let provider = new firebase.auth.GithubAuthProvider();

            firebase.auth().signInWithPopup(provider).then((user) => {   
                // vous pouvez récupérer le nom comme ceci :             
                // alert(user.additionalUserInfo.profile.name || user.additionalUserInfo.profile.login);
                document.querySelector("a#connect").innerHTML = user.additionalUserInfo.profile.name || user.additionalUserInfo.profile.login;
            }).catch(function(error) {
                console.log(error);
            })
        });
    }
}