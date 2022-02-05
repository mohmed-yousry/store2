function toTop() {
  let toYopBtn = document.querySelector(".toTop");
  toYopBtn.style.display = "none";
  window.onscroll = function () {
    if (window.scrollY >= 800) {
      toYopBtn.style.display = "flex";
    } else {
      toYopBtn.style.display = "none";
    }
  };
  toYopBtn.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
}

toTop();
