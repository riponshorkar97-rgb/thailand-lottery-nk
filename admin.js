// Firebase Import

import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


import { getDatabase, ref, push }
from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";



// Firebase Config

const firebaseConfig = {

apiKey: "YOUR_API_KEY",

authDomain: "YOUR_PROJECT.firebaseapp.com",

databaseURL: "YOUR_DATABASE_URL",

projectId: "YOUR_PROJECT_ID",

storageBucket: "YOUR_PROJECT.appspot.com",

messagingSenderId: "YOUR_SENDER_ID",

appId: "YOUR_APP_ID"

};



// Initialize Firebase

const app = initializeApp(firebaseConfig);


const database = getDatabase(app);





// Add Result Function

window.addResult = function(){


let date = document.getElementById("date").value;

let firstPrize = document.getElementById("firstPrize").value;

let threeUp = document.getElementById("threeUp").value;

let twoUp = document.getElementById("twoUp").value;

let twoDown = document.getElementById("twoDown").value;



if(
!date ||
!firstPrize ||
!threeUp ||
!twoUp ||
!twoDown
){

document.getElementById("message").innerHTML =
"Please fill all fields";

return;

}




push(ref(database,"lotteryResults"),{


date:date,

firstPrize:firstPrize,

threeUp:threeUp,

twoUp:twoUp,

twoDown:twoDown


})

.then(()=>{


document.getElementById("message").innerHTML =
"✅ Result Added Successfully";



document.querySelectorAll("input")
.forEach(input=>input.value="");



})

.catch(error=>{


document.getElementById("message").innerHTML =
"Error: "+error.message;


});


}
