const result = document.getElementById("result");

const buttonsEleme = document.getElementsByTagName("button");

const buttons = Array.from(buttonsEleme);
let array = [];
buttons.forEach(function (b) {
  b.addEventListener("click", (e) => {
    let arrayConta;
    const bValue = e.target.value;
    array.push(bValue);
    arrayConta = array.join("");
    const igual = e.target.className.includes("igual");
    const limpar = e.target.className.includes("limpar");
    if (igual) {
      result.innerHTML = "";
      result.innerHTML = eval(arrayConta);
      array = [];
    } else if (limpar) {
      result.innerHTML = "";
      array = [];
    } else {
      result.innerHTML = arrayConta;
    }
  });
});
const btnResultado = document.getElementById("resultado");

// --> DarkMod


const img = document.getElementById("icon");
const calc = document.getElementById("calculadora");

img.addEventListener('click', (e) => {
  const src = img.getAttribute("src")
  console.log('src', src)
  if (src == "img/dark.svg") {
    img.setAttribute("src", "img/light.svg")
    calc.style.backgroundColor = "#EBF2FA"
    result.style.color = "#002A3C";
    buttons.forEach((e) => {
      e.style.color = "#002A3C";
    });
  } else {
    img.setAttribute("src", "img/dark.svg")
    calc.style.backgroundColor = "#002A3C"
    result.style.color = "#EBF2FA";
    buttons.forEach((e) => {
      e.style.color = "#EBF2FA";
    });
  }
})