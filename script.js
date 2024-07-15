// Add any JavaScript interactivity here

// Example: Smooth scroll for navigation links
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("header nav ul li a");

  for (const link of links) {
    link.addEventListener("click", smoothScroll);
  }

  function smoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Increment slide index
    slideIndex++;

    // Reset slide index if exceeds number of slides
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    // Display current slide and apply animation
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.animation = "slide 1s";

    // Reset animation after the slide transition
    setTimeout(function () {
      slides[slideIndex - 1].style.animation = "";
    }, 1000); // 1000ms (1s) matches the animation duration

    // Call function recursively to continue slideshow
    setTimeout(showSlides, 4000); // Change image every 2 seconds
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let slides = document.getElementsByClassName("Slides");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Increment slide index
    slideIndex++;

    // Reset slide index if exceeds number of slides
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    // Display current slide and apply animation
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.animation = "slide 1s";

    // Reset animation after the slide transition
    setTimeout(function () {
      slides[slideIndex - 1].style.animation = "";
    }, 1000); // 1000ms (1s) matches the animation duration

    // Call function recursively to continue slideshow
    setTimeout(showSlides, 4000); // Change image every 4 seconds
  }
});
