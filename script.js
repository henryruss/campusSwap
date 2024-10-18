// Arrays of images for Marketplace and Storage Mart
const marketplaceImages = [
    "pics/pic1.jpg",
    "pics/pic2.jpeg",
    "pics/pic3.jpeg",
    "pics/pic4.webp"
];

const storageMartImages = [
    "pics/pic5.jpeg",
    "pics/pic6.jpg",
    "pics/pic7.jpg",
    "pics/pic8.jpg"
];

// Function to update the image buttons with the correct set
function updateImageButtons(images) {
    const buttons = document.querySelectorAll(".change-image");
    buttons.forEach((button, index) => {
        button.setAttribute("data-image", images[index]);
    });
}

// Function to change the image smoothly
function changeImageSmoothly(imageSrc) {
    const imageElement = document.getElementById("rightImage");
    
    // Add the hidden class to start the fade-out effect
    imageElement.classList.add("hidden");

    // Wait for the fade-out to complete (500ms), then change the image source
    setTimeout(() => {
        imageElement.src = imageSrc;
        imageElement.classList.remove("hidden"); // Fade in the new image
    }, 500); // Match this timeout to the CSS transition duration
}

// Function to handle button clicks and set the "active" state
function addChangeImageListener() {
    const buttons = document.querySelectorAll(".change-image");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove("active"));

            // Add active class to the clicked button
            this.classList.add("active");

            // Change the image based on the clicked button
            const imageSrc = this.getAttribute("data-image");
            changeImageSmoothly(imageSrc);
        });
    });
}

// Function to automatically toggle through the buttons and images
let currentButtonIndex = 0;
const buttons = document.querySelectorAll(".change-image");

function autoToggleButtons() {
    // Turn off all buttons first
    buttons.forEach(button => button.classList.remove("active"));

    // Turn on the next button in the sequence
    const currentButton = buttons[currentButtonIndex];
    currentButton.classList.add("active");

    // Change the image associated with the active button smoothly
    const imageSrc = currentButton.getAttribute("data-image");
    changeImageSmoothly(imageSrc);

    // Move to the next button, reset if at the end
    currentButtonIndex = (currentButtonIndex + 1) % buttons.length;
}

// Set an interval for automatic toggling (e.g., every 2 seconds)
setInterval(autoToggleButtons, 10000);

// Event listener for the "Marketplace" button
document.getElementById("buyButton").addEventListener("click", function() {
    updateImageButtons(marketplaceImages);  // Update the buttons for Marketplace
    addChangeImageListener();  // Reattach the event listener to the new buttons
    changeImageSmoothly("pics/pic1.jpg");
    currentButtonIndex = 0;  // Reset the toggling when switching categories
});

// Event listener for the "Storage Mart" button
document.getElementById("sellButton").addEventListener("click", function() {
    updateImageButtons(storageMartImages);  // Update the buttons for Storage Mart
    addChangeImageListener();  // Reattach the event listener to the new buttons
    changeImageSmoothly("pics/pic5.jpeg");
    currentButtonIndex = 0;  // Reset the toggling when switching categories
});

// Initial setup for the Marketplace images
updateImageButtons(marketplaceImages);  // Start with Marketplace images
addChangeImageListener();  // Initialize the change image listener
