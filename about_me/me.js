const carousel = document.querySelector(".photo-proof-proffesional");

const imgs = [
  "../assets/img/grass.png",
  "../assets/img/leaves.png",
  "../assets/img/me.png",
];

let imgNum = 0;

setInterval(() => {
  carousel.onclick();
}, 3000);

carousel.onclick = () => {
  carousel.innerHTML = `<img src=${imgs[imgNum]} />`;

  imgNum = (imgNum + 1) % imgs.length;
};
