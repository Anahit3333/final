// Get the element with ID "current-date"
const currentDateEl = document.getElementById("current-date");

// Get the current date in a locale-aware format
const currentDate = new Date().toLocaleDateString();

// Set the element's text content to display the date
currentDateEl.textContent = `Today's Date: ${currentDate}`;

$(document).ready(function () {
  // Select all images within the #image-slider
  const images = $("#image-slider img");

  // Track the current image index
  let currentImageIndex = 0;

  // Function to change the displayed image
  function changeImage() {
    // Fade out the current image
    images.eq(currentImageIndex).fadeTo(500, 0);

    // Update the image index (modulo image length)
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Fade in the new image
    images.eq(currentImageIndex).fadeTo(500, 1);
  }

  // Change image every 5 seconds
  setInterval(changeImage, 5000);

  // Update button state after changing the image
  updateButtonState();
});

$("#prev-button").click(function () {
  // Update the image index to the previous image
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  changeImage();
});

$("#next-button").click(function () {
  // Update the image index to the next image
  currentImageIndex = (currentImageIndex + 1) % images.length;
  changeImage();
});

function updateButtonState() {
  // Disable "Previous" button if on first image
  $("#prev-button").prop("disabled", currentImageIndex === 0);

  // Disable "Next" button if on last image
  $("#next-button").prop("disabled", currentImageIndex === images.length - 1);
}