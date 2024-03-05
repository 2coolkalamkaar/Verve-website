document.addEventListener("DOMContentLoaded", function () {
    animateValue("awards", 0, 10, 2000);
    animateValue("plays", 0, 20, 3000);
    animateValue("years", 0, 5, 4000);
  });
  
  function animateValue(id, start, end, duration) {
    var obj = document.getElementById(id);
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function () {
      current += increment;
      obj.innerHTML = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
    obj.classList.add('animated');
  }
  