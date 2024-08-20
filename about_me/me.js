const carousel = document.querySelector(".photo-proof-proffesional");
const leftBtn =  document.querySelector(".carousel-btn-left");
const rightBtn = document.querySelector(".carousel-btn-right");
const changePhoto = document.querySelector(".change-proof-photo");

const imgs = [
  "../assets/icons/tg.svg",
  "../assets/icons/vk.svg",
  "../assets/img/me.png",
];

let imgNum = 0;

setInterval(() => {
  rightBtn.onclick();
}, 10000);

leftBtn.onclick = () => {
  imgNum--;

  if(imgNum < 0){
    imgNum = 2;
  }
  
  changePhoto.src = imgs[imgNum];
};

rightBtn.onclick = () => {
  imgNum++;

  if(imgNum > 2){
    imgNum  = 0;
  }


  changePhoto.src = imgs[imgNum];
};
