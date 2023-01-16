import "../scss/style.scss";
import { gsap } from "gsap";

// Boring animation

class IraBoring {
  constructor(element, imageUrl) {
    this.main = { element: element };
    this.main.reveal = document.createElement("div");
    this.main.reveal.className = "reveal";
    this.main.reveal.style.display = "none";
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
    gsap.set(this.main.reveal, { display: "block" });
  }
  hideImage() {
    gsap.set(this.main.reveal, { display: "none" });
  }
}

const boringElements = document.querySelectorAll(".js-ira-boring");
const boringImages = [
  "./images/1-1.png",
  "./images/1-2.png",
  "./images/1-3.png",
  "./images/1-4.png",
];

boringElements.forEach((boringElement, boringElementIndex) => {
  new IraBoring(boringElement, boringImages[boringElementIndex]);
});

// Fade animation

class IraFade {
  constructor(element, imageUrl) {
    this.main = { element: element };
    this.main.reveal = document.createElement("div");
    this.main.reveal.className = "reveal";
    this.main.reveal.style.display = "none";
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
  "./images/2-1.png",
  "./images/2-2.png",
  "./images/2-3.png",
  "./images/2-4.png",
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
    this.main.reveal.style.display = "none";
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
  "./images/3-1.png",
  "./images/3-2.png",
  "./images/3-3.png",
  "./images/3-4.png",
];

unfoldElements.forEach((unfoldElement, unfoldElementIndex) => {
  new IraUnfold(unfoldElement, unfoldBackgorunds[unfoldElementIndex]);
});

// Slide animation

class IraSlide {
  constructor(element, imageUrl) {
    this.main = { element: element };
    this.main.reveal = document.createElement("div");
    this.main.reveal.className = "reveal";
    this.main.reveal.innerHTML = `<div class="reveal__inner"><div class="reveal__image" style="background: url('${imageUrl}') no-repeat center center / cover"></div></div>`;
    this.main.reveal.style.overflow = "hidden";
    this.main.reveal.style.display = "none";
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
    gsap.killTweensOf(this.main.reveal);
    gsap.killTweensOf(this.main.image);
    this.tl = gsap
      .timeline()
      .add("start")
      .add(gsap.set(this.main.reveal, { display: "block" }), "start")
      .add("animation")
      .add(
        gsap.fromTo(
          this.main.inner,
          { x: 50, y: "100%", rotate: 50 },
          { x: 0, y: 0, rotate: 0, duration: 0.3, ease: "power2.out" }
        ),
        "animation"
      )
      .add(
        gsap.fromTo(
          this.main.image,
          { x: -50, y: "-100", rotate: -50 },
          { x: 0, y: 0, rotate: 0, duration: 0.3, ease: "power2.out" }
        ),
        "animation"
      )
      .add(
        gsap.fromTo(
          this.main.image,
          { scale: 1.8 },
          { scale: 1, duration: 0.5 }
        ),
        "animation"
      );
  }
  hideImage() {
    gsap.killTweensOf(this.main.reveal);
    gsap.killTweensOf(this.main.image);
    this.tl = gsap
      .timeline()
      .add("animation")
      .add(
        gsap.fromTo(
          this.main.inner,
          { x: 0, y: 0, rotate: 0 },
          { x: 80, y: -200, rotate: -30, duration: 0.3, ease: "power2.out" }
        ),
        "animation"
      )
      .add(
        gsap.fromTo(
          this.main.image,
          { x: 0, y: 0, rotate: 0, scale: 1 },
          {
            x: -80,
            y: 200,
            rotate: 30,
            duration: 0.3,
            scale: 2,
            ease: "power2.out",
          }
        ),
        "animation"
      )
      .add("end")
      .add(gsap.set(this.main.reveal, { display: "none", delay: 0.3 }), "end")
      .add(
        gsap.set(this.main.inner, { x: "", y: "", rotate: "", delay: 0.3 }),
        "end"
      )
      .add(
        gsap.set(this.main.image, {
          x: "",
          y: "",
          rotate: "",
          scale: "",
          delay: 0.3,
        }),
        "end"
      );
  }
}

const slideElements = document.querySelectorAll(".js-ira-slide");
const slideBackgrounds = [
  "./images/4-1.png",
  "./images/4-2.png",
  "./images/4-3.png",
  "./images/4-4.png",
];

slideElements.forEach((slideElement, slideElementIndex) => {
  new IraSlide(slideElement, slideBackgrounds[slideElementIndex]);
});

// Corner animation

class IraCorner {
  constructor(element, imageUrl) {
    this.main = { element: element };
    this.main.reveal = document.createElement("div");
    this.main.reveal.className = "reveal";
    this.main.reveal.innerHTML = `<div class="reveal__inner"><div class="reveal__image" style="background: url('${imageUrl}') no-repeat center center / cover"></div></div>`;
    this.main.reveal.style.overflow = "hidden";
    this.main.reveal.style.display = "none";
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
    gsap.killTweensOf(this.main.reveal);
    gsap.killTweensOf(this.main.image);
    this.tl = gsap
      .timeline()
      .add("start")
      .add(gsap.set(this.main.reveal, { display: "block" }), "start")
      .add("animation")
      .add(
        gsap.fromTo(
          this.main.inner,
          { x: "100%", y: "-100%" },
          { x: "0", y: "0", duration: 0.3, ease: "power2.out" }
        ),
        "animation"
      )
      .add(
        gsap.fromTo(
          this.main.image,
          { x: "-100%", y: "100%" },
          { x: "0", y: "0", duration: 0.3, ease: "power2.out" }
        ),
        "animation"
      )
      .add(
        gsap.fromTo(
          this.main.image,
          { scale: 1.8 },
          { scale: 1, duration: 0.5 }
        ),
        "animation"
      );
  }
  hideImage() {
    gsap.killTweensOf(this.main.reveal);
    gsap.killTweensOf(this.main.image);
    this.tl = gsap
      .timeline()
      .add("animation")
      .add(
        gsap.fromTo(
          this.main.inner,
          {
            x: "0",
            y: "0",
          },
          {
            x: "-100%",
            y: "100%",
            duration: 0.3,
            ease: "power2.out",
          }
        ),
        "animation"
      )
      .add(
        gsap.fromTo(
          this.main.image,
          { x: "0", y: "0" },
          { x: "100%", y: "-100%", duration: 0.3, ease: "power2.out" }
        ),
        "animation"
      )
      .add(
        gsap.fromTo(
          this.main.image,
          { scale: 1 },
          { scale: 1.8, duration: 0.3 }
        ),
        "animation"
      )
      .add("end")
      .add(gsap.set(this.main.reveal, { display: "none" }), "end");
  }
}

const cornerElements = document.querySelectorAll(".js-ira-corner");
const cornerBackgrounds = [
  "./images/5-1.png",
  "./images/5-2.png",
  "./images/5-3.png",
  "./images/5-4.png",
];

cornerElements.forEach((cornerElement, cornerElementIndex) => {
  new IraCorner(cornerElement, cornerBackgrounds[cornerElementIndex]);
});

// Spiral animation

class IraSpiral {
  constructor(element, imageUrl) {
    this.main = { element: element };
    this.main.reveal = document.createElement("div");
    this.main.reveal.className = "reveal";
    this.main.reveal.innerHTML = `<div class="reveal__inner"><div class="reveal__image" style="background: url('${imageUrl}') no-repeat center center / cover"></div></div>`;
    this.main.reveal.style.overflow = "hidden";
    this.main.reveal.style.display = "none";
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
    gsap.killTweensOf(this.main.reveal);
    gsap.killTweensOf(this.main.image);
    this.tl = gsap
      .timeline()
      .add("start")
      .add(
        gsap.set(this.main.reveal, { display: "block", zIndex: 10000 }),
        "start"
      )
      .add("animation")
      .add(
        gsap.fromTo(
          this.main.inner,
          { rotate: -90 },
          { rotate: 0, duration: 0.3, ease: "power2.out" }
        ),
        "animation"
      )
      .add(
        gsap.fromTo(this.main.inner, { scale: 0 }, { scale: 1, duration: 0.3 }),
        "animation"
      )
      .add(
        gsap.fromTo(
          this.main.image,
          { rotate: 90 },
          { rotate: 0, duration: 0.3, ease: "power2.out" }
        ),
        "animation"
      )
      .add(
        gsap.fromTo(this.main.image, { scale: 2 }, { scale: 1, duration: 0.5 }),
        "animation"
      );
  }
  hideImage() {
    gsap.killTweensOf(this.main.reveal);
    gsap.killTweensOf(this.main.image);
    this.tl = gsap
      .timeline()
      .add("start")
      .add(gsap.set(this.main.reveal, { zIndex: 9999 }), "start")
      .add("animation")
      .add(
        gsap.to(this.main.inner, {
          rotate: -90,
          duration: 0.3,
          ease: "power2.out",
        }),
        "animation"
      )
      .add(gsap.to(this.main.inner, { scale: 0, duration: 0.3 }), "animation")
      .add(
        gsap.to(this.main.image, {
          rotate: 90,
          duration: 0.3,
          ease: "power2.out",
        }),
        "animation"
      )
      .add(
        gsap.to(this.main.image, {
          scale: 2,
          duration: 0.3,
        }),
        "animation"
      )
      .add("end")
      .add(
        gsap.set(this.main.reveal, {
          display: "none",
          top: "",
          left: "",
          zIndex: "",
        }),
        "end"
      );
  }
}

const spiralElements = document.querySelectorAll(".js-ira-spiral");
const spiralBackgrounds = [
  "./images/6-1.png",
  "./images/6-2.png",
  "./images/6-3.png",
  "./images/6-4.png",
];

spiralElements.forEach((spiralElement, spiralElementIndex) => {
  new IraSpiral(spiralElement, spiralBackgrounds[spiralElementIndex]);
});
