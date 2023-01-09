import "../scss/style.scss";
import { gsap } from "gsap";

class iraFade {
  constructor(element, imageUrl) {
    this.main = { element: element };
    this.main.reveal = document.createElement("div");
    this.main.reveal.className = "reveal";
    this.main.reveal.innerHTML = `<div class="reveal__inner"><div class="reveal__image" style="background: url('${imageUrl}') no-repeat center center / cover"></div></div>`;
    this.main.element.appendChild(this.main.reveal);
    this.main.inner = this.main.reveal.querySelector(".reveal__inner");
    this.main.image = this.main.reveal.querySelector(".reveal__image");
    this.init();
  }
  init() {
    this.events();
  }
  mousePosition(e) {
    let posx = e.pageX;
    let posy = e.pageY;
    if (!e) var e = window.event;
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx =
        e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      posy =
        e.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }
    return { x: posx, y: posy };
  }
  events() {
    this.positionElement = (e) => {
      const mousePosition = this.mousePosition(e);
      this.main.reveal.style.top = mousePosition.y + 30 + "px";
      this.main.reveal.style.left = mousePosition.x + 30 + "px";
    };
    this.mouseEnter = (e) => {
      this.positionElement(e);
      this.showImage();
    };
    this.mouseMove = (e) =>
      requestAnimationFrame(() => {
        this.positionElement(e);
      });
    this.mouseLeave = () => {
      this.hideImage();
    };
    this.main.element.addEventListener("mouseenter", this.mouseEnter);
    this.main.element.addEventListener("mousemove", this.mouseMove);
    this.main.element.addEventListener("mouseleave", this.mouseLeave);
  }
  showImage() {
    this.main.reveal.style.opacity = 1;
  }
  hideImage() {
    this.main.reveal.style.opacity = 0;
  }
}

const fadeElements = document.querySelectorAll(".js-ira-fade");
const fadeBackgorunds = [
  "./images/1-1.png",
  "./images/1-2.png",
  "./images/1-3.png",
  "./images/1-4.png",
];

fadeElements.forEach((fadeElement, fadeElementIndex) => {
  new iraFade(fadeElement, fadeBackgorunds[fadeElementIndex]);
});
