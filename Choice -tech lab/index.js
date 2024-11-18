let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("main").style.backgroundColor ='#fff';
    document.getElementById("main").style.borderBottom = '2px solid red';
    document.getElementById("main").style.paddingBottom = '0';
    mybutton.style.display = "block";
    
  } else {
    document.getElementById("main").style.backgroundColor ='transparent';
    document.getElementById("main").style.borderBottom = '0';
    mybutton.style.display = "none";



  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}