// Thailand Lottery Database

let lotteryResults = [

{
date:"2026-07-16",
firstPrize:"639214",
threeUp:"214",
twoUp:"14",
twoDown:"71"
},

{
date:"2026-07-01",
firstPrize:"751495",
threeUp:"495",
twoUp:"95",
twoDown:"62"
},

{
date:"2026-06-16",
firstPrize:"287184",
threeUp:"184",
twoUp:"84",
twoDown:"48"
},

{
date:"2026-06-01",
firstPrize:"173770",
threeUp:"770",
twoUp:"70",
twoDown:"95"
},

{
date:"2026-05-16",
firstPrize:"107387",
threeUp:"387",
twoUp:"87",
twoDown:"38"
}

];



// Show Latest Result

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

let historyBox =
document.getElementById("history");


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




// Statistics


document.getElementById("totalDraws").innerText =
lotteryResults.length;



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


document.getElementById("common2up").innerText =
mostCommon("twoUp");


document.getElementById("common2down").innerText =
mostCommon("twoDown");
