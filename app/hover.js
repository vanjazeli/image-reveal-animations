const hover = {
  hoverElements: document.querySelectorAll(".js-ira"),

  init: function () {
    this.settings();
  },

  settings: function () {
    this.hoverElements.forEach((hoverElement) => {
      const iraHolder = hoverElement.querySelector(".js-ira-holder");
      hoverElement.addEventListener("mousemove", (e) => {
        iraHolder.style.top = `${e.clientY + 30}px`;
        iraHolder.style.left = `${e.clientX + 30}px`;
      });
    });
  },
};

export default hover;
