// Thailand Lottery JSON Database

let lotteryResults = [];


// Load Result Data

fetch("result.json")
.then(response => response.json())
.then(data => {

    lotteryResults = data.previous;

    showLatest();
    showHistory();
    showStatistics();

});



// Show Latest Result

function showLatest(){

let latest = lotteryResults[0];

document.getElementById("drawDate").innerText =
"Draw Date: " + latest.date;

document.getElementById("firstPrize").innerText =
latest.firstPrize;

document.getElementById("threeUp").innerText =
latest.threeUp;

document.getElementById("twoUp").innerText =
latest.twoUp;

document.getElementById("twoDown").innerText =
latest.twoDown;

}



// Number Checker

function checkNumber(){

let number =
document.getElementById("lotteryNumber").value.trim();

let result =
document.getElementById("checkResult");


if(!number){

result.style.color="#ff6874";
result.innerText="Please enter a lottery number.";
return;

}


let messages=[];


lotteryResults.forEach(draw=>{


if(number===draw.firstPrize){

messages.push(
"🎉 1st Prize Winner - "+draw.date
);

}


if(number===draw.threeUp){

messages.push(
"🎉 3Up Winner - "+draw.date
);

}


if(number===draw.twoUp){

messages.push(
"🎉 2Up Winner - "+draw.date
);

}


if(number===draw.twoDown){

messages.push(
"🎉 2Down Winner - "+draw.date
);

}


});


if(messages.length>0){

result.style.color="#39d98a";
result.innerHTML=messages.join("<br>");

}

else{

result.style.color="#ff6874";
result.innerText="Number not found.";

}

}




// Show History

function showHistory(){

let historyBox =
document.getElementById("history");


historyBox.innerHTML="";


lotteryResults.forEach(draw=>{


historyBox.innerHTML += `

<div class="history-card">

<h3>${draw.date}</h3>

<p>🥇 1st Prize:
<b>${draw.firstPrize}</b></p>

<p>3Up:
<b>${draw.threeUp}</b></p>

<p>2Up:
<b>${draw.twoUp}</b></p>

<p>2Down:
<b>${draw.twoDown}</b></p>

</div>

`;

});


}




// Statistics

function showStatistics(){


document.getElementById("totalDraws").innerText =
lotteryResults.length;


document.getElementById("common2up").innerText =
mostCommon("twoUp");


document.getElementById("common2down").innerText =
mostCommon("twoDown");


}



function mostCommon(type){

let count={};


lotteryResults.forEach(item=>{

let num=item[type];

count[num]=(count[num]||0)+1;

});


return Object.keys(count).reduce((a,b)=>
count[a]>count[b]?a:b
);

}
