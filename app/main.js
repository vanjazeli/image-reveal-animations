import "../scss/style.scss";
import { gsap } from "gsap";

// Fade animation

class IraFade {
  constructor(element, imageUrl) {
    this.main = { element: element };
    this.main.reveal = document.createElement("div");
    this.main.reveal.className = "reveal";
    this.main.reveal.innerHTML = `<div class="reveal__image" style="background: url('${imageUrl}') no-repeat center center / cover"></div>`;
    this.main.element.appendChild(this.main.reveal);
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
    gsap.killTweensOf(this.main.reveal);
    this.tl = gsap
      .timeline({
        onStart: () => {
          this.main.reveal.style.display = "block";
        },
      })
      .add(
        gsap.fromTo(
          this.main.reveal,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: "power1.out" }
        )
      );
  }
  hideImage() {
    gsap.killTweensOf(this.main.reveal);
    this.tl = gsap.timeline(
      gsap.to(this.main.reveal, {
        opacity: 0,
        duration: 0.3,
        ease: "power1.out",
      })
    );
  }
}

const fadeElements = document.querySelectorAll(".js-ira-fade");
const fadeImages = [
  "./images/1-1.png",
  "./images/1-2.png",
  "./images/1-3.png",
  "./images/1-4.png",
];

fadeElements.forEach((fadeElement, fadeElementIndex) => {
  new IraFade(fadeElement, fadeImages[fadeElementIndex]);
});

// Unfold animation

class IraUnfold {
  constructor(element, imageUrl) {
    this.main = { element: element };
    this.main.reveal = document.createElement("div");
    this.main.reveal.className = "reveal";
    this.main.reveal.innerHTML = `<div class="reveal__inner"><div class="reveal__image" style="background: url('${imageUrl}') no-repeat center center / cover"></div></div>`;
    this.main.reveal.style.overflow = "hidden";
    this.main.element.appendChild(this.main.reveal);
    this.main.inner = this.main.reveal.querySelector(".reveal__inner");
    this.main.inner.style.overflow = "hidden";
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
    gsap.killTweensOf(this.main.inner);
    gsap.killTweensOf(this.main.image);
    this.tl = gsap
      .timeline({
        onStart: () => {
          this.main.reveal.style.display = "block";
        },
      })
      .add(
        gsap.fromTo(
          this.main.inner,
          { x: "-100%" },
          { x: "0%", duration: 0.3, ease: "power4.out" }
        )
      );
  }
  hideImage() {
    gsap.killTweensOf(this.main.inner);
    gsap.killTweensOf(this.main.image);
    this.tl = gsap
      .timeline({
        onComplete: () => {
          this.main.reveal.style.display = "none";
          gsap.set(this.main.inner, { x: "" });
          gsap.set(this.main.image, { x: "" });
        },
      })
      .add("start")
      .add(
        gsap.to(this.main.inner, {
          x: "100%",
          duration: 0.3,
          ease: "power4.out",
        }),
        "start"
      )
      .add(
        gsap.to(this.main.image, {
          x: "-100%",
          duration: 0.3,
          ease: "power4.out",
        }),
        "start"
      );
  }
}

const unfoldElements = document.querySelectorAll(".js-ira-unfold");
const unfoldBackgorunds = [
  "./images/2-1.png",
  "./images/2-2.png",
  "./images/2-3.png",
  "./images/2-4.png",
];

unfoldElements.forEach((unfoldElement, unfoldElementIndex) => {
  new IraUnfold(unfoldElement, unfoldBackgorunds[unfoldElementIndex]);
});
