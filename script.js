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

// Arrays of list items content for Marketplace and Storage Mart
const marketplaceListItems = [
    {
        mainText: "Browse Listings",
        subText: "Find great deals on items posted by fellow students."
    },
    {
        mainText: "Post Wants",
        subText: "Can't find what you're looking for? Ask anonymously with our seeking feature."
    },
    {
        mainText: "Sell Items",
        subText: "Upload your items for sale, or sell directly to seekers."
    },
    {
        mainText: "Grow Your Brand",
        subText: "Market your products, showcase reviews, and post updates on your seller page."
    }
];

const storageMartListItems = [
    {
        mainText: "Store Your Stuff",
        subText: "Find affordable storage space on or near campus."
    },
    {
        mainText: "Request Specific Storage",
        subText: "Find storage on an item-by-item basis with our seeking feature."
    },
    {
        mainText: "Make Passive Income",
        subText: "Give your stuff to a holder to be placed on the market place and make a comission when it sells."
    },
    {
        mainText: "Become a Holder",
        subText: "Get paid to rent out your space or make a comission when stored items sell"
    }];

// Function to update the image buttons with the correct set
function updateImageButtons(images) {
    const buttons = document.querySelectorAll(".change-image");
    buttons.forEach((button, index) => {
        button.setAttribute("data-image", images[index]);
    });
}

// Function to update the list items based on the selected category
function updateListItems(items) {
    const infoList = document.getElementById("infoList");
    infoList.innerHTML = ''; // Clear current items

    items.forEach((item, index) => {
        const li = document.createElement("li");
        
        li.innerHTML = `
            <button class="change-image" data-image="${index === 0 ? marketplaceImages[index] : storageMartImages[index]}"></button>
            <div class="mini-container">
                <span class="main-text">${item.mainText}</span>
                <span class="subtext">${item.subText}</span>
            </div>
        `;
        
        infoList.appendChild(li);
    });

    addChangeImageListener(); // Reattach the event listeners to the new buttons
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

// Event listener for the "Marketplace" button
document.getElementById("buyButton").addEventListener("click", function() {
    updateImageButtons(marketplaceImages);  // Update the buttons for Marketplace
    updateListItems(marketplaceListItems);  // Update the list for Marketplace
    changeImageSmoothly("pics/pic1.jpg");   // Change the main image
    currentButtonIndex = 0;                 // Reset the toggling when switching categories
});

// Event listener for the "Storage Mart" button
document.getElementById("sellButton").addEventListener("click", function() {
    updateImageButtons(storageMartImages);  // Update the buttons for Storage Mart
    updateListItems(storageMartListItems);  // Update the list for Storage Mart
    changeImageSmoothly("pics/pic5.jpeg");  // Change the main image
    currentButtonIndex = 0;                 // Reset the toggling when switching categories
});

// Initial setup for the Marketplace images and list items
updateImageButtons(marketplaceImages);  // Start with Marketplace images
updateListItems(marketplaceListItems);  // Start with Marketplace list items
addChangeImageListener();               // Initialize the change image listener


// Get all FAQ question buttons
const faqButtons = document.querySelectorAll('.faq-question');

// Loop through each button and add click event listener
faqButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Toggle the display of the answer
        const answer = this.nextElementSibling;
        answer.classList.toggle('show');
        
        // Toggle the rotation of the arrow
        const arrow = this.querySelector('.arrow');
        arrow.style.transform = answer.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0)';
    });
});
