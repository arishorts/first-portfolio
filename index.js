const btnEl1 = document.querySelector(".btn1");
const btnEl2 = document.querySelector(".btn2");
const btnEl3 = document.querySelector(".btn3");
const btnEl4 = document.querySelector(".btn4");
const btnEl5 = document.querySelector(".btn5");

btnEl1.addEventListener("mouseover", (event) => {
  rippleevent(btnEl1);
});

btnEl2.addEventListener("mouseover", (event) => {
  rippleevent(btnEl2);
});

btnEl3.addEventListener("mouseover", (event) => {
  rippleevent(btnEl3);
});

btnEl4.addEventListener("mouseover", (event) => {
  rippleevent(btnEl4);
});

btnEl5.addEventListener("mouseover", (event) => {
  rippleevent(btnEl5);
});

function rippleevent(btn) {
  const newposX = event.offsetX;
  const newposY = event.offsetY;
  document.querySelector("html").style.setProperty("--leftPos", newposX + "px");
  document.querySelector("html").style.setProperty("--topPos", newposY + "px");
}
