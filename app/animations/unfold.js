import { gsap } from "gsap";

const unfoldIra = {
  hoverElements: document.querySelectorAll(".js-ira-unfold"),

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
    const holder = hoverElement.querySelector(".js-ira-unfold-holder");
    holder.style.display = "block";
    gsap.to(holder, {
      width: "250px",
      duration: 0.3,
    });
  },

  hide: function (hoverElement) {
    const holder = hoverElement.querySelector(".js-ira-unfold-holder");
    gsap.to(holder, {
      width: "0px",
      duration: 0.3,
      onComplete: () => {
        gsap.set(holder, { clearProps: "all" });
        holder.removeAttribute("style");
      },
    });
  },
};

export default unfoldIra;
