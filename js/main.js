window.onload = () => {
  new scrollSpy().init("option-spy");
}

/* Handle the ScrollSpy element */
function scrollSpy() {
  this.init = function(className) {
    addScrollTo(className);
    handleActiveElements(className);
    window.addEventListener("scroll", () => {
      handleActiveElements(className);
    });
  }

  var addScrollTo = function(className) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', (e) => {
        var name = e.target.getAttribute("name");
        document.querySelector("#" + name).scrollIntoView({ behavior: 'smooth' });
      }, false);
    }
  }

  var handleActiveElements = function(className) {
    var BODY_TOP = document.body.getBoundingClientRect().top;

    var positions = [];
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
      var name = elements[i].getAttribute("name");
      var target = document.querySelector("#" + name);
      positions.push(target.getBoundingClientRect().top - BODY_TOP);
    }

    clearActives(className);

    var window_y = window.pageYOffset;
    for (var j = 0; j < positions.length; j++) {
      if (window_y <= positions[j]) {
        var targetName = elements[j].getAttribute("name");
        document.querySelector("." + className + "[name=" + targetName + "]").classList.toggle("active");
        break;
      }
    }
  }

  var clearActives = function(className) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains("active")) {
        elements[i].classList.toggle("active");
      }
    }
  }
}
