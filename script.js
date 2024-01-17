function hide(){
  let x = document.querySelectorAll(".section");
  for (let element of x) {
    if (element.style.display === "none") {
      element.style.display = "block";
    } 
    else {
      element.style.display = "none";
    }    
  }
}

function myFunction(x) {
  x.classList.toggle("fa-xmark");
}