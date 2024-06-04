// counter
document.addEventListener("DOMContentLoaded", function () {
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          startIncrementation(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  var counterValues = document.querySelectorAll(".counter-value");
  counterValues.forEach(function (counter) {
    observer.observe(counter);
  });
  function startIncrementation(counter) {
    var startValue = parseInt(counter.getAttribute("data-start"));
    var endValue = parseInt(counter.getAttribute("data-end"));
    var increment = 1;
    var interval = 100;
    var current = startValue;
    var timer = setInterval(function () {
      if (current >= endValue) {
        clearInterval(timer);
      } else {
        current += increment;
        counter.textContent = current;
      }
    }, interval);
  }
});
// end_counter
