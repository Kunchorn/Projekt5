
/* ------menubar----- */
function toggleFunction() {
    var x = document.getElementById("menulist");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

/*  ------- kontakt -------- */
 function kontaktFormular() {
  var username = prompt("Det er uden for vores åbningstid skriv dit tlf.nr og vi vender tilbage");
  var usernameElement = document.getElementById("number");
  usernameElement.innerText = "Vi vender snarrest tilbage på tlf: "+username;
}
  