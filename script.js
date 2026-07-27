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




// Animated Number Show

function animateNumber(element,value){

let count = 0;

let interval = setInterval(()=>{

element.innerText = count;

count++;

if(count > Number(value)){

clearInterval(interval);

element.innerText=value;

element.style.animation="numberGlow 1s";

}

},10);

}





// Latest Result

let latest = lotteryResults[0];


document.getElementById("drawDate").innerText =
"Draw Date: " + latest.date;



animateNumber(
document.getElementById("firstPrize"),
latest.firstPrize
);


animateNumber(
document.getElementById("threeUp"),
latest.threeUp
);


animateNumber(
document.getElementById("twoUp"),
latest.twoUp
);


animateNumber(
document.getElementById("twoDown"),
latest.twoDown
);





// Number Checker


function checkNumber(){


let number =
document.getElementById("lotteryNumber").value.trim();


let result =
document.getElementById("checkResult");



result.innerHTML="🔍 Checking...";


result.style.color="#ffd700";



setTimeout(()=>{


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


result.innerHTML =
"✨ Congratulations ✨<br><br>"+
messages.join("<br>");

result.style.transform="scale(1.1)";


setTimeout(()=>{

result.style.transform="scale(1)";

},300);



}



else{


result.style.color="#ff6874";


result.innerText=
"❌ Number not found";


}



},800);



}







// History Animation


let historyBox =
document.getElementById("history");



lotteryResults.forEach((draw,index)=>{


historyBox.innerHTML += `

<div class="history-card"
style="animation-delay:${index*0.15}s">


<h3>📅 ${draw.date}</h3>


<p>🥇 1st Prize:
<b>${draw.firstPrize}</b>
</p>


<p>3Up:
<b>${draw.threeUp}</b>
</p>


<p>2Up:
<b>${draw.twoUp}</b>
</p>


<p>2Down:
<b>${draw.twoDown}</b>
</p>


</div>

`;


});







// Statistics Counter Animation


function counter(id,target){


let element =
document.getElementById(id);


let num=0;


let timer=setInterval(()=>{


num++;


element.innerText=num;



if(num>=target){

clearInterval(timer);

}


},100);


}





counter(
"totalDraws",
lotteryResults.length
);






// Most Common Number


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
