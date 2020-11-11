//scroll pop-up effect ved overskrift//
function scrollAppear(){
  var overskriftText = document.querySelector('.overskrift');
  var overskriftPosition = overskriftText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;

  if(overskriftPosition < screenPosition){
      overskriftText.classList.add('overskrift-appear');
  }
}
  window.addEventListener('scroll',scrollAppear)

//scroll pop-up effect ved text 3//
function scrollAppear2(){
  var text3Text = document.querySelector('.text3');
  var text3Position = text3Text.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;

  if(text3Position < screenPosition){
      text3Text.classList.add('text3-appear');
  }
}
  window.addEventListener('scroll',scrollAppear2)

//scroll pop-up effect ved text 4//
function scrollAppear3(){
  var text4Text = document.querySelector('.text4');
  var text4Position = text4Text.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;

  if(text4Position < screenPosition){
      text4Text.classList.add('text4-appear');
  }
}
  window.addEventListener('scroll',scrollAppear3)

//scroll pop-up effect ved text 5//
function scrollAppear4(){
  var text5Text = document.querySelector('.text5');
  var text5Position = text5Text.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;

  if(text5Position < screenPosition){
      text5Text.classList.add('text5-appear');
  }
}
  window.addEventListener('scroll',scrollAppear4)

  /* ------menubar----- */
function toggleFunction() {
  var x = document.getElementById("menulist");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
