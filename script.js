"use strict";
const searchIcon = document.querySelector(".search-icon");
const inputElement = document.querySelector(".search");
const placeholderTexts = [
  "tshirt for skinny guy with dark skin tone",
  "formal shirt for a wedding",
  "M sized green tshirt",
];

searchIcon.addEventListener("click", () => {
  const text = inputElement.value;
  const arr = text.split(" ");
  for (const item of arr) {
    if (
      item == "men" ||
      item == "guys" ||
      item == "boys" ||
      item == "guy" ||
      item == "boy"
    ) {
      window.open("./second.html", "blank");
    } else if (
      item == "women" ||
      item == "girls" ||
      item == "girl" ||
      item == "woman" ||
      item == "ladies"
    ) {
      window.open("./third.html", "blank");
    }
  }
});

function changePlaceholderWithTime() {
  let currentIndex = 0;

  // Change the placeholder text every 2 seconds
  setInterval(function () {
    inputElement.placeholder = placeholderTexts[currentIndex];
    currentIndex = (currentIndex + 1) % placeholderTexts.length;
  }, 2000);
}

changePlaceholderWithTime();
