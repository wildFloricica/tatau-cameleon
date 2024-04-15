var a = () => (isDark ? rifi(20, 70) : rifi(150, 250));
const PATHS = document.querySelectorAll("path");
function rifi(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function Repeatable() {
  ColoriseRandomPath();
  setTimeout(Repeatable, rifi(250, 1500));
}

function ColoriseRandomPath() {
  const many = rifi(1, 6);

  for (let i = 0; i < many; i++)
    coloriseSinglePath(PATHS[Math.floor(Math.random() * PATHS.length)]);
}
Repeatable();

function coloriseSinglePath(path) {
  Object.assign(path.style, {
    stroke: `rgb(${a()}, ${a()}, ${a()})`,
    strokeWidth: `${rifi(1, 5)}px`,
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
