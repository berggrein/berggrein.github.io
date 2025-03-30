// Dark & Light toggle

document.querySelector(".day-night input").addEventListener("change", () => {
    document.querySelector("body").classList.add("toggle");
    setTimeout(() => {
      document.querySelector("body").classList.toggle("light");
  
      setTimeout(
        () => document.querySelector("body").classList.remove("toggle"),
        10
      );
    }, 5);
  });
  

  // Textsize increaser
let curFontSize = 14;
const texts = document.querySelectorAll("p.vers");
document.querySelector("svg.text-size").addEventListener("click", () => {
  const newSize = "font-size: " + ++curFontSize + "px";
  if (curFontSize > 40) {
    curFontSize = 14;
  }
  texts.forEach((element) => element.setAttribute("style", newSize));
});