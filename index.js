const btnEl1 = document.querySelector(".btn1");
const btnEl2 = document.querySelector(".btn2");
const btnEl3 = document.querySelector(".btn3");
const btnEl4 = document.querySelector(".btn4");
const btnEl5 = document.querySelector(".btn5");

btnEl1.addEventListener("mouseover", (event) => {
  const newposX = event.offsetX;
  const newposY = event.offsetY;

  document.querySelector("html").style.setProperty("--leftPos", newposX + "px");
  document.querySelector("html").style.setProperty("--topPos", newposY + "px");
});

btnEl2.addEventListener("mouseover", (event) => {
  const newposX = event.offsetX;
  const newposY = event.offsetY;

  document.querySelector("html").style.setProperty("--leftPos", newposX + "px");
  document.querySelector("html").style.setProperty("--topPos", newposY + "px");
});

btnEl3.addEventListener("mouseover", (event) => {
  const newposX = event.offsetX;
  const newposY = event.offsetY;

  document.querySelector("html").style.setProperty("--leftPos", newposX + "px");
  document.querySelector("html").style.setProperty("--topPos", newposY + "px");
});

btnEl4.addEventListener("mouseover", (event) => {
  const newposX = event.offsetX;
  const newposY = event.offsetY;

  document.querySelector("html").style.setProperty("--leftPos", newposX + "px");
  document.querySelector("html").style.setProperty("--topPos", newposY + "px");
});

btnEl5.addEventListener("mouseover", (event) => {
  const newposX = event.offsetX;
  const newposY = event.offsetY;

  document.querySelector("html").style.setProperty("--leftPos", newposX + "px");
  document.querySelector("html").style.setProperty("--topPos", newposY + "px");
});
