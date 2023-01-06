import { gsap } from "gsap";

const fadeIra = {
  hoverElements: document.querySelectorAll(".js-ira-fade"),

  init: function () {
    this.events();
  },

  events: function () {
    this.hoverElements.forEach((hoverElement) => {
      hoverElement.addEventListener("mouseenter", () => {
        this.show(hoverElement);
      });

      hoverElement.addEventListener("mouseleave", () => {
        this.hide(hoverElement);
      });
    });
  },

  show: function (hoverElement) {
    const holder = hoverElement.querySelector(".js-ira-fade-holder");
    holder.style.display = "block";
    gsap.to(holder, {
      opacity: 1,
      duration: 0.3,
    });
  },

  hide: function (hoverElement) {
    const holder = hoverElement.querySelector(".js-ira-fade-holder");
    gsap.to(holder, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        gsap.set(holder, { clearProps: "all" });
        holder.removeAttribute("style");
      },
    });
  },
};

export default fadeIra;
