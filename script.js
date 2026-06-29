const yesBtn=document.getElementById("yesBtn");
const confirmBtn=document.getElementById("confirmBtn");

const page1=document.getElementById("page1");
const page2=document.getElementById("page2");
const page3=document.getElementById("page3");

const music=document.getElementById("bgMusic");

yesBtn.onclick=()=>{

music.volume=0;

music.play().then(()=>{

let v=0;

let fade=setInterval(()=>{

v+=0.05;

music.volume=v;

if(v>=1){

clearInterval(fade);

}

},200);

});

page1.classList.add("hidden");

page2.classList.remove("hidden");

};

confirmBtn.onclick=()=>{

const date=document.getElementById("date").value;

const time=document.getElementById("time").value;

const food=document.getElementById("food").value;

page2.classList.add("hidden");

page3.classList.remove("hidden");

document.getElementById("summary").innerHTML=`

📅 ${date}<br><br>

🕒 ${time}<br><br>

🍽 ${food}

`;

};
