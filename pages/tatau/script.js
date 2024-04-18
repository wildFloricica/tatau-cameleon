var a = () => (isDark ? rifi(120, 170) : rifi(30, 70));
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

function ColoriseRandomBackground() {
  return;
  SVG.style.backgroundColor = `rgba(${2 * a()}, ${2 * a()}, ${a()}, ${
    rifi(20, 40) / 100
  })`;
}

function ColoriseRandomPath() {
  const many = rifi(1, 3);

  const a = rifi(1, PATHS.length + 1);
  const b = rifi(1, PATHS.length + 1);
  for (let i = a; i < Math.max(a, PATHS.length); i++)
    coloriseSinglePath(PATHS[Math.floor(Math.random() * PATHS.length)]);
}

function coloriseSinglePath(path) {
  const stroke = `rgb(${a()}, ${a()}, ${a()})`;
  const fill = `rgba(${a()}, ${a()}, ${a()}, ${rifi(70, 100) / 100})`;
  const strokeWidth = `${rifi(7, 10)}px`;
  path.setAttribute("stroke", stroke);
  path.setAttribute("strokeWidth", strokeWidth);
  path.setAttribute("fill", fill);
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

setTimeout(() => {
  setInterval(Repeatable, rifi(500, 900));
}, 30000);
