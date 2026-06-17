
const cards=[
["apetece","~하고 싶다"],
["seguir","계속하다"],
["elegir","선택하다"]
];

let showing=0, flipped=false;

function flipCard(){
const el=document.getElementById("flashcard");
flipped=!flipped;
el.textContent=flipped?cards[showing][1]:cards[showing][0];
}

const quiz=[
["seguir","yo","sigo"],
["elegir","yo","elijo"],
["ir","vosotros","vais"]
];

let score=0;
let current=0;

function load(){
current=Math.floor(Math.random()*quiz.length);
document.getElementById("question").textContent=
`${quiz[current][0]} → ${quiz[current][1]} 형태`;
}

function check(){
const a=document.getElementById("answer").value.trim().toLowerCase();
if(a===quiz[current][2]){
score++;
document.getElementById("score").textContent=score;
document.getElementById("result").textContent="정답!";
}else{
let wrong=JSON.parse(localStorage.getItem("wrong")||"[]");
wrong.push(quiz[current]);
localStorage.setItem("wrong",JSON.stringify(wrong));
document.getElementById("result").textContent=
`오답! 정답: ${quiz[current][2]}`;
}
document.getElementById("answer").value="";
load();
}

load();
