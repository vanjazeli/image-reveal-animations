import "../scss/style.scss";
import Ira from "./ira";

const boringElements = document.querySelectorAll(".js-ira-boring");
const boringImages = [
  "./images/1-1.png",
  "./images/1-2.png",
  "./images/1-3.png",
  "./images/1-4.png",
];

boringElements.forEach((boringElement, boringElementIndex) => {
  new Ira(boringElement, boringImages[boringElementIndex], "boring");
});

const fadeElements = document.querySelectorAll(".js-ira-fade");
const fadeImages = [
  "./images/2-1.png",
  "./images/2-2.png",
  "./images/2-3.png",
  "./images/2-4.png",
];

fadeElements.forEach((fadeElement, fadeElementIndex) => {
  new Ira(fadeElement, fadeImages[fadeElementIndex], "fade");
});

const unfoldElements = document.querySelectorAll(".js-ira-unfold");
const unfoldBackgorunds = [
  "./images/3-1.png",
  "./images/3-2.png",
  "./images/3-3.png",
  "./images/3-4.png",
];

unfoldElements.forEach((unfoldElement, unfoldElementIndex) => {
  new Ira(unfoldElement, unfoldBackgorunds[unfoldElementIndex], "unfold");
});

const slideElements = document.querySelectorAll(".js-ira-slide");
const slideBackgrounds = [
  "./images/4-1.png",
  "./images/4-2.png",
  "./images/4-3.png",
  "./images/4-4.png",
];

slideElements.forEach((slideElement, slideElementIndex) => {
  new Ira(slideElement, slideBackgrounds[slideElementIndex], "slide");
});

const cornerElements = document.querySelectorAll(".js-ira-corner");
const cornerBackgrounds = [
  "./images/5-1.png",
  "./images/5-2.png",
  "./images/5-3.png",
  "./images/5-4.png",
];

cornerElements.forEach((cornerElement, cornerElementIndex) => {
  new Ira(cornerElement, cornerBackgrounds[cornerElementIndex], "corner");
});

const spiralElements = document.querySelectorAll(".js-ira-spiral");
const spiralBackgrounds = [
  "./images/6-1.png",
  "./images/6-2.png",
  "./images/6-3.png",
  "./images/6-4.png",
];

spiralElements.forEach((spiralElement, spiralElementIndex) => {
  new Ira(spiralElement, spiralBackgrounds[spiralElementIndex], "spiral");
});

// const skewElements = document.querySelectorAll(".js-ira-skew");
// const skewBackgrounds = [
//   "./images/7-1.png",
//   "./images/7-2.png",
//   "./images/7-3.png",
//   "./images/7-4.png",
// ];

// newElements.forEach((skewElement, skewElementIndex) => {
//   new Ira(skewElem);
// });
