window.onload = () => {
  var elements = document.getElementsByClassName("option-spy");
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', scrollTo, false);
  }
}

function scrollTo() {
  var name = this.getAttribute("name");
  var elements = document.getElementsByClassName("option-spy");
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].classList.contains("active")) {
      elements[i].classList.toggle("active");
    }
  }
  this.classList.toggle("active");
  document.querySelector("#" + name).scrollIntoView({ behavior: 'smooth' });
}
