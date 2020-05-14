const h1 = document.querySelector('.site-title');
const h2 = document.querySelector('.site-subtitle');
const texto = "Kelwin";
var testes = true;

function escrever(div,string,string2){
  const char = string.split('').reverse();
  const typer = setInterval(() => {
    if(!char.length) {
      div.innerHTML = string2;
    }
    if(!char.length) return (clearInterval(typer));
    let next = char.pop();
    div.innerHTML += next;
  }, 150);
}

escrever(h1,"<h1 cor:Azul>Kelwin</h1>","kelwin");
escrever(h2,"<h2>Jr.Web Developer<h2>","Jr.Web Developer");

window.onscroll = function() {scrollFunction()};
    
  function scrollFunction() {
    if (document.documentElement.scrollTop >= 1) {
      document.querySelector(".arrowUp i").style.fontSize = "0";
      document.querySelector(".i-home").style= "display:block"
    } else {
      document.querySelector(".arrowUp i").style.fontSize = "4rem";
      document.querySelector(".i-home").style = "display:none"

  }
}