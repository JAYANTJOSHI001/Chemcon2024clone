function hide(){ 
  let x = document.querySelectorAll(".section");
  let y=document.querySelector("#navi");
  if (y.classList=="fa-solid fa-bars") {
    y.classList="fa-solid fa-xmark";
    for (let element of x) {
      if (element.style.display === "none") {
        element.style.display = "block";
      }
    }
  }
  else {
    y.classList="fa-solid fa-bars";
    for (let element of x) {
      element.style.display = "none";
    }
  }
}