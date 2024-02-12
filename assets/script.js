console.log("hello world");

document.addEventListener("DOMContentLoaded", function () {
  let toggleButton = document.getElementById("toggle-menu");
  let mobileMenuList = document.querySelector(".mobile-menu ul");

  toggleButton.addEventListener("click", function () {
    mobileMenuList.classList.toggle("show");
  });

  // Select all elements with the 'animate-on-scroll' class
  const elements = document.querySelectorAll(".animate-on-scroll");

  // Initialize delay
  let delay = 0;

  // Loop through each element
  elements.forEach((element) => {
    // Add transition delay style to each element
    element.style.transitionDelay = `${delay}ms`;

    // Increment delay
    delay += 200; // Change this value to decrease the delay
  });

  // Add event listener for window resize
  window.addEventListener("resize", function () {
    let masonryElements = document.querySelectorAll(".masonry");
    masonryElements.forEach(function (masonry) {
      masonry.classList.remove("one-column", "two-columns", "three-columns");
      if (window.innerWidth < 600) {
        masonry.classList.add("one-column");
      } else if (window.innerWidth < 900) {
        masonry.classList.add("two-columns");
      } else {
        masonry.classList.add("three-columns");
      }
    });
  });

  // Trigger the resize event on page load
  window.dispatchEvent(new Event("resize"));

  // animate on scroll
  const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  function handleScroll() {
    elementsToAnimate.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add("show");
      }
    });
  }

  // Initial check in case the elements are already in view
  handleScroll();

  // Add scroll event listener
  document.addEventListener("scroll", handleScroll);
});
