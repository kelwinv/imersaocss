const h1 = document.querySelector('.site-title');
const h2 = document.querySelector('.site-subtitle');
const profile = document.querySelector('.text-sobre');
const texto = "Kelwin";
var testes = true;

function escrever(div,string,string2,spd){
  if(!string2.length) {string2 = string;}
  if(!spd) {spd = 150;}

  const char = string.split('').reverse();
  const typer = setInterval(() => {
    if(!char.length) {
      div.innerHTML = string2;
    }
    if(!char.length) return (clearInterval(typer));
    let next = char.pop();
    div.innerHTML += next;
  }, spd);
}

escrever(h1,"<h1 cor:Azul>Kelwin</h1>","Kelwin");
escrever(h2,"<h2>Jr.Web Developer<h2>","Jr.Web Developer");

let ativado = false;

window.onscroll = function() {scrollFunction()};
    

function scrollFunction() {
  Scroller = document.documentElement.scrollTop;
  if (Scroller >= 1) {
    document.querySelector(".arrowUp i").style.fontSize = "0";
    document.querySelector(".i-home").style= "display:block"
  } else {
    document.querySelector(".arrowUp i").style.fontSize = "4rem";
    document.querySelector(".i-home").style = "display:none";
  }
  if(Scroller >= 917 && Scroller < 2000 && !ativado){
    ativado = true;
    escrever(profile,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, dignissimos. Quod perspiciatis sed, laudantium nam omnis dolore eligendi nostrum consequatur quaerat repudiandae nemo, ullam ad dicta tempora ipsa unde sunt?Minus laboriosam, nihil ipsam aspernatur ut modi? Hic at ipsam placeat odit perspiciatis, TESTESTE quibusdam eos eveniet neque rerum delectus maiores voluptate accusamus soluta facere iste sequi sint! Officia, ipsa quam?Reprehenderit, consequuntur eos? Dicta optio nisi ut iure fugiat aut magnam dignissimos ullam, similique dolorem quibusdam ducimus reprehenderit modi delectus velit quae maiores quidem, ab neque saepe soluta aliquam consectetur FIM","",20);
  }
}
