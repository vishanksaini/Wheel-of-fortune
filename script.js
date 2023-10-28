
let wheelme = document.querySelector(".wheel");
let spinBtn = document.querySelector(".spnbtn");
let randomNum=Math.floor(Math.random()*3600);
console.log(randomNum);

spinBtn.onclick=()=>{
  wheelme.style.transform=`rotate(${randomNum}deg)`;
}


