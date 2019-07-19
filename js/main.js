window.onload = () => {

  var BODY_RECT = document.body.getBoundingClientRect();
  var EDUCATIONS_POSITION = document.querySelector('#educations').getBoundingClientRect().top - BODY_RECT.too - 300;
  var ABILITIES_POSITION = document.querySelector('#abilities').getBoundingClientRect().top - BODY_RECT.top - 300;
  var CONTACTS_POSITION = document.querySelector('#contacts').getBoundingClientRect().top - BODY_RECT.top - 300;

  // Scroll to element position
  var elements = document.getElementsByClassName("option-spy");
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', scrollTo, false);
  }

  // Set 'active' class in the current appearing section
  window.addEventListener("scroll", () => {
    removeActive();
    offsetY = window.pageYOffset;
    if (offsetY < ABILITIES_POSITION) {
      document.getElementsByName("educations")[0].classList.toggle("active");
    } else if (offsetY < CONTACTS_POSITION) {
      document.getElementsByName("abilities")[0].classList.toggle("active");
    } else {
      document.getElementsByName("contacts")[0].classList.toggle("active");
    }
  });
}

function scrollTo() {
  var name = this.getAttribute("name");
  document.querySelector("#" + name).scrollIntoView({ behavior: 'smooth' });
}

function removeActive() {
  var elements = document.getElementsByClassName("option-spy");
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].classList.contains("active")) {
      elements[i].classList.toggle("active");
    }
  }
}
