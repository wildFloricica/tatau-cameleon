const logo = document.querySelector("#logo-floricica");
logo.onclick = () => window.FloricicaAPI.closeApp();

const animations = ["dissapear", "heartbeat", "patrol"];
const def_classes = "prevent-select";

var counter = 0;

logo.onmouseenter = () => {
  if (counter++ < 4) return;
  logo.className = def_classes;
  setTimeout(() => {
    logo.className =
      def_classes +
      " " +
      animations[Math.floor(Math.random() * animations.length)];
  }, 1000);
};
