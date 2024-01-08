let show = document.querySelector(".Show");
show.onclick = () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

let Close = document.querySelector(".close");
Close.onclick = () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
var Swiper = new Swiper(".swiper", {
  effect: "cards",
  grabCursor: true,
  initialSlide: 2,
  loop: true,
  rotate: true,
  mousewheel: {
  invert: false,
},
});