import { gsap } from "gsap";

class Ira {
  constructor(element, imageUrl, animationType) {
    switch (animationType) {
      case "boring":
        this.main = { element: element };
        this.main.reveal = document.createElement("div");
        this.main.reveal.className = "reveal";
        this.main.reveal.style.visibility = "hidden";
        this.main.reveal.innerHTML = `<div class="reveal__image" style="background: url('${imageUrl}') no-repeat center center / cover"></div>`;
        this.main.element.appendChild(this.main.reveal);
        this.showImage = () => {
          gsap.killTweensOf(this.main.reveal);
          gsap.set(this.main.reveal, { visibility: "visible" });
        };
        this.hideImage = () => {
          gsap.killTweensOf(this.main.reveal);
          gsap.set(this.main.reveal, { visibility: "hidden" });
        };
        break;
      case "fade":
        this.main = { element: element };
        this.main.reveal = document.createElement("div");
        this.main.reveal.className = "reveal";
        this.main.reveal.visibility = "hidden";
        this.main.reveal.style.opacity = "0";
        this.main.reveal.innerHTML = `<div class="reveal__image" style="background: url('${imageUrl}') no-repeat center center / cover"></div>`;
        this.main.element.appendChild(this.main.reveal);
        this.showImage = () => {
          gsap.killTweensOf(this.main.reveal);
          this.tl = gsap
            .timeline()
            .add("start")
            .add(gsap.set(this.main.reveal, { visibility: "visible" }), "start")
            .add("animation")
            .add(
              gsap.fromTo(
                this.main.reveal,
                { opacity: 0 },
                { opacity: 1, duration: 0.3, ease: "power1.out" }
              ),
              "animation"
            );
        };
        this.hideImage = () => {
          gsap.killTweensOf(this.main.reveal);
          this.tl = gsap
            .timeline()
            .add("animation")
            .add(gsap.to(this.main.reveal, { opacity: "0" }), "animation")
            .add("end")
            .add(gsap.set(this.main.reveal, { visibility: "hidden" }), "end");
        };
        break;
      case "unfold":
        this.main = { element: element };
        this.main.reveal = document.createElement("div");
        this.main.reveal.className = "reveal";
        this.main.reveal.innerHTML = `<div class="reveal__inner"><div class="reveal__image" style="background: url('${imageUrl}') no-repeat center center / cover"></div></div>`;
        this.main.reveal.style.overflow = "hidden";
        this.main.reveal.style.visibility = "hidden";
        this.main.element.appendChild(this.main.reveal);
        this.main.inner = this.main.reveal.querySelector(".reveal__inner");
        this.main.inner.style.overflow = "hidden";
        this.main.image = this.main.reveal.querySelector(".reveal__image");
        this.showImage = () => {
          gsap.killTweensOf(this.main.reveal);
          gsap.killTweensOf(this.main.inner);
          gsap.killTweensOf(this.main.image);
          this.tl = gsap
            .timeline()
            .add("start")
            .add(gsap.set(this.main.reveal, { visibility: "visible" }), "start")
            .add("animation")
            .add(
              gsap.fromTo(
                this.main.inner,
                { x: "-100%" },
                { x: "0", duration: 0.3, ease: "power2.out" }
              ),
              "animation"
            )
            .add(
              gsap.fromTo(
                this.main.image,
                { x: "100%" },
                { x: "0", duration: 0.3, ease: "power2.out" }
              ),
              "animation"
            );
        };
        this.hideImage = () => {
          gsap.killTweensOf(this.main.reveal);
          gsap.killTweensOf(this.main.inner);
          gsap.killTweensOf(this.main.image);
          this.tl = gsap
            .timeline()
            .add("animation")
            .add(
              gsap.to(this.main.inner, {
                x: "100%",
                duration: 0.3,
                ease: "power2.out",
              }),
              "animation"
            )
            .add(
              gsap.to(this.main.image, {
                x: "-100%",
                duration: 0.3,
                ease: "power2.out",
              }),
              "animation"
            )
            .add("end")
            .add(gsap.set(this.main.reveal, { visibility: "hidden" }), "end");
        };
        break;
      case "slide":
        this.main = { element: element };
        this.main.reveal = document.createElement("div");
        this.main.reveal.className = "reveal";
        this.main.reveal.innerHTML = `<div class="reveal__inner"><div class="reveal__image" style="background: url('${imageUrl}') no-repeat center center / cover"></div></div>`;
        this.main.reveal.style.overflow = "hidden";
        this.main.reveal.style.visibility = "hidden";
        this.main.element.appendChild(this.main.reveal);
        this.main.inner = this.main.reveal.querySelector(".reveal__inner");
        this.main.inner.style.overflow = "hidden";
        this.main.image = this.main.reveal.querySelector(".reveal__image");
        this.showImage = () => {
          gsap.killTweensOf(this.main.reveal);
          gsap.killTweensOf(this.main.inner);
          gsap.killTweensOf(this.main.image);
          this.tl = gsap
            .timeline()
            .add("start")
            .add(gsap.set(this.main.reveal, { visibility: "visible" }), "start")
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
        };
        this.hideImage = () => {
          gsap.killTweensOf(this.main.reveal);
          gsap.killTweensOf(this.main.inner);
          gsap.killTweensOf(this.main.image);
          this.tl = gsap
            .timeline()
            .add("animation")
            .add(
              gsap.to(this.main.inner, {
                x: 80,
                y: -200,
                rotate: -30,
                duration: 0.3,
                ease: "power2.out",
              }),
              "animation"
            )
            .add(
              gsap.to(this.main.image, {
                x: -80,
                y: 200,
                rotate: 30,
                duration: 0.3,
                scale: 2,
                ease: "power2.out",
              }),
              "animation"
            )
            .add("end")
            .add(gsap.set(this.main.reveal, { visibility: "hidden" }), "end");
        };
        break;
      case "corner":
        this.main = { element: element };
        this.main.reveal = document.createElement("div");
        this.main.reveal.className = "reveal";
        this.main.reveal.innerHTML = `<div class="reveal__inner"><div class="reveal__image" style="background: url('${imageUrl}') no-repeat center center / cover"></div></div>`;
        this.main.reveal.style.overflow = "hidden";
        this.main.reveal.style.visibility = "hidden";
        this.main.element.appendChild(this.main.reveal);
        this.main.inner = this.main.reveal.querySelector(".reveal__inner");
        this.main.inner.style.overflow = "hidden";
        this.main.image = this.main.reveal.querySelector(".reveal__image");
        this.showImage = () => {
          gsap.killTweensOf(this.main.reveal);
          gsap.killTweensOf(this.main.inner);
          gsap.killTweensOf(this.main.image);
          this.tl = gsap
            .timeline()
            .add("start")
            .add(gsap.set(this.main.reveal, { visibility: "visible" }), "start")
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
        };
        this.hideImage = () => {
          gsap.killTweensOf(this.main.reveal);
          gsap.killTweensOf(this.main.inner);
          gsap.killTweensOf(this.main.image);
          this.tl = gsap
            .timeline()
            .add("animation")
            .add(
              gsap.to(this.main.inner, {
                x: "-100%",
                y: "100%",
                duration: 0.3,
                ease: "power2.out",
              }),
              "animation"
            )
            .add(
              gsap.to(this.main.image, {
                x: "100%",
                y: "-100%",
                duration: 0.3,
                ease: "power2.out",
              }),
              "animation"
            )
            .add(
              gsap.to(this.main.image, { scale: 1.8, duration: 0.3 }),
              "animation"
            )
            .add("end")
            .add(gsap.set(this.main.reveal, { visibility: "hidden" }), "end");
        };
        break;
      case "spiral":
        this.main = { element: element };
        this.main.reveal = document.createElement("div");
        this.main.reveal.className = "reveal";
        this.main.reveal.innerHTML = `<div class="reveal__inner"><div class="reveal__image" style="background: url('${imageUrl}') no-repeat center center / cover"></div></div>`;
        this.main.reveal.style.overflow = "hidden";
        this.main.reveal.style.visibility = "hidden";
        this.main.element.appendChild(this.main.reveal);
        this.main.inner = this.main.reveal.querySelector(".reveal__inner");
        this.main.inner.style.overflow = "hidden";
        this.main.image = this.main.reveal.querySelector(".reveal__image");
        this.showImage = () => {
          gsap.killTweensOf(this.main.reveal);
          gsap.killTweensOf(this.main.inner);
          gsap.killTweensOf(this.main.image);
          this.tl = gsap
            .timeline()
            .add("start")
            .add(
              gsap.set(this.main.reveal, {
                visibility: "visible",
                zIndex: 10000,
              }),
              "start"
            )
            .add("animation")
            .add(
              gsap.fromTo(
                this.main.inner,
                { rotate: -30 },
                { rotate: 0, duration: 0.3, ease: "power2.out" }
              ),
              "animation"
            )
            .add(
              gsap.fromTo(
                this.main.inner,
                { scale: 0 },
                { scale: 1, duration: 0.3 }
              ),
              "animation"
            )
            .add(
              gsap.fromTo(
                this.main.image,
                { rotate: 30 },
                { rotate: 0, duration: 0.3, ease: "power2.out" }
              ),
              "animation"
            )
            .add(
              gsap.fromTo(
                this.main.image,
                { scale: 2 },
                { scale: 1, duration: 0.5 }
              ),
              "animation"
            );
        };
        this.hideImage = () => {
          gsap.killTweensOf(this.main.reveal);
          gsap.killTweensOf(this.main.inner);
          gsap.killTweensOf(this.main.image);
          this.tl = gsap
            .timeline()
            .add("start")
            .add(gsap.set(this.main.reveal, { zIndex: 9999 }), "start")
            .add("animation")
            .add(
              gsap.to(this.main.inner, {
                rotate: -30,
                duration: 0.3,
                ease: "power2.out",
              }),
              "animation"
            )
            .add(
              gsap.to(this.main.inner, { scale: 0, duration: 0.3 }),
              "animation"
            )
            .add(
              gsap.to(this.main.image, {
                rotate: 30,
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
                visibility: "hidden",
                zIndex: "",
              }),
              "end"
            );
        };
        break;
      case "skew":
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
        this.showImage = () => {
          gsap.killTweensOf(this.main.reveal);
          gsap.killTweensOf(this.main.inner);
          gsap.killTweensOf(this.main.image);
          this.tl = gsap
            .timeline()
            .add("start")
            .add(gsap.set(this.main.reveal, { display: block }), "start")
            .add("animation")
            .add(gsap.fromTo(this.main.inner, {}));
        };
        this.hideImage = () => {
          gsap.killTweensOf(this.main.reveal);
          gsap.killTweensOf(this.main.inner);
          gsap.killTweensOf(this.main.image);
        };
        break;
      default:
        console.error(`AnimationType of "${animationType}" NOT FOUND!`);
        break;
    }
    this.events();
  }
  mousePosition(e) {
    let posx = e.x;
    let posy = e.y;
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
    this.scroll = () => {
      this.hideImage();
    };
    this.main.element.addEventListener("mouseenter", this.mouseEnter);
    this.main.element.addEventListener("mousemove", this.mouseMove);
    this.main.element.addEventListener("mouseleave", this.mouseLeave);
    window.addEventListener("scroll", this.scroll);
  }
}

export default Ira;
