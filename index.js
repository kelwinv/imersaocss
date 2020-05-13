window.onscroll = function() {scrollFunction()};
    
  function scrollFunction() {
    if (document.documentElement.scrollTop > 10) {
      document.querySelector(".arrowUp i").style.fontSize = "0";
    } else {
      document.querySelector(".arrowUp i").style.fontSize = "4rem";
  }
}