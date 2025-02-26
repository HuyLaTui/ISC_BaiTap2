// video 1
document.addEventListener("DOMContentLoaded", () => {
  const circle = document.querySelector(".circle");
  circle.style.transition = "width 0.1s, height 0.1s, opacity 0.1s";
  let size = 0;
  setInterval(() => {
    size = size >= 500 ? 0 : size + 10;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
  }, 100);
});

