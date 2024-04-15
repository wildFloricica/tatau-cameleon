var a = () => (isDark ? rifi(20, 70) : rifi(150, 250));
const PATHS = document.querySelectorAll("path");
const SVG = document.querySelector("svg");

function rifi(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function Repeatable() {
  ColoriseRandomPath();
  ColoriseRandomBackground();
}
setInterval(Repeatable, rifi(500, 900));

function ColoriseRandomBackground() {
  SVG.style.backgroundColor = `rgba(${2 * a()}, ${2 * a()}, ${a()}, ${
    rifi(20, 40) / 100
  })`;
}

function ColoriseRandomPath() {
  const many = rifi(1, 3);

  for (let i = 0; i < many; i++)
    coloriseSinglePath(PATHS[Math.floor(Math.random() * PATHS.length)]);
}
Repeatable();

function coloriseSinglePath(path) {
  Object.assign(path.style, {
    stroke: `rgb(${a()}, ${a()}, ${a()})`,
    strokeWidth: `${rifi(7, 10)}px`,
  });
}

var isDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    isDark = event.matches;
    PATHS.forEach(coloriseSinglePath);
  });

PATHS.forEach(coloriseSinglePath);
