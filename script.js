// Constants for Images
const marketplaceImages = [
    "./pics/icon1.png",
    "./pics/icon2.png",
    "./pics/icon3.png",
    "./pics/icon4.svg"
];

const storageImages = [
    "./pics/icon5.png",
    "./pics/icon6.svg",
    "./pics/icon7.svg",
    "./pics/icon8.svg"
];

const storageMartImages = [
    "./pics/icon9.png",
    "./pics/icon10.png",
    "./pics/icon11.png",
    "./pics/icon12.svg"
];

// Arrays of list items content for Marketplace and Storage Mart
const marketplaceListItems = [
    { mainText: "Browse Listings", subText: "Find great deals on items from textbooks to tech, posted by fellow students right on campus." },
    { mainText: "Request Items", subText: "Can't find it? Post a 'Seeking' listing and get notified when someone offers what you're looking for." },
    { mainText: "Sell Items", subText: "Turn unused items into cash! Upload a photo, description, and price. Buyers can offer or pay instantly." },
    { mainText: "Grow Your Brand", subText: "Showcase your products on your seller page. Build credibility with reviews and updates to attract more buyers." }
];

const storageListItems = [
    { mainText: "Store Your Stuff", subText: "Rent storage from locals. Store items for a few weeks or months without paying for expensive storage units." },
    { mainText: "Request Specific Storage", subText: "Use the 'Seeking' feature to find storage for items like bikes, textbooks, or seasonal gear near you." },
    { mainText: "Flexible Rental Terms", subText: "Rent storage for days, weeks, or months. Easily adjust the rental period if your plans change." },
    { mainText: "Become a Holder", subText: "Got extra space? Rent it out and earn money. Offer a garage, closet, or dorm room to those who need it." }
];

const storageMartListItems = [
    { mainText: "Sell Your Junk", subText: "Got items you don’t need? Let a holder list them and make money while they handle the marketplace for you." },
    { mainText: "Make Moving Out Hassle-Free", subText: "Skip the heavy lifting! Holders can pick up and store your stuff, making moving out a breeze." },
    { mainText: "Make Passive Income", subText: "Earn commission when your items sell in the marketplace. It's an easy way to make money without much effort." },
    { mainText: "Hold Marketplace Items", subText: "Got space? Hold others' items and earn commission when they sell, or keep them after the listing expires." }
];
const profileButton = document.getElementById("profileButton");
const dropdownMenu = document.getElementById("dropdownMenu");
    
profileButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden");
});
document.addEventListener("click", (event) => {
    if (!profileButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add("hidden");
    }
});

// Initialize Page Function
function initializePage() {
    updateListItems(marketplaceListItems, marketplaceImages);  // Start with Marketplace list items
    changeImageSmoothly("pics/pic1.jpg");   // Change the main image to a default one for Marketplace
    buyButton.classList.add('active');      // Set buyButton as active on load
}

// Update List Items Function
function updateListItems(items, imagesArray) {
    const infoList = document.getElementById("infoList");
    infoList.innerHTML = ''; // Clear current items

    items.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${imagesArray[index]}" alt="${item.mainText}" class="info-image" />
            <span class="main-text">${item.mainText}</span>
            <span class="subtext">${item.subText}</span>
        `;
        infoList.appendChild(li);
    });
}

// Change Image Smoothly Function
function changeImageSmoothly(imageSrc) {
    const imageElement = document.getElementById("rightImage");
    imageElement.classList.add("hidden"); // Fade-out effect

    setTimeout(() => {
        imageElement.src = imageSrc;
        imageElement.classList.remove("hidden"); // Fade-in effect
    }, 500); // Match this timeout to the CSS transition duration
}

// Event Listeners for Navigation Buttons
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("header .nav-links a");
    const currentPage = window.location.pathname.split("/").pop();  // Get the current file name
    

    links.forEach(link => {
        const href = link.getAttribute("href").split("/").pop();  // Get the file name of href
        if (href === currentPage) {
            link.classList.add("active");
        }
    });

    // Initialize the page with Marketplace as default
    initializePage();
});

// Button Click Event Listeners
buyButton.addEventListener('click', () => {
    updateListItems(marketplaceListItems, marketplaceImages); 
    changeImageSmoothly("pics/pic1.jpg");
    toggleActiveButton(buyButton);
});

sellButton.addEventListener('click', () => {
    updateListItems(storageListItems, storageImages); 
    changeImageSmoothly("pics/pic5.jpeg");
    toggleActiveButton(sellButton);
});

stoMartButton.addEventListener('click', () => {
    updateListItems(storageMartListItems, storageMartImages); 
    changeImageSmoothly("pics/pic5.jpeg");
    toggleActiveButton(stoMartButton);
});

// Toggle Active Button Function
function toggleActiveButton(activeButton) {
    [buyButton, sellButton, stoMartButton].forEach(button => {
        button.classList.toggle('active', button === activeButton);
    });
}

// FAQ Toggle Functionality
const faqButtons = document.querySelectorAll('.faq-question');
faqButtons.forEach(button => {
    button.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        answer.classList.toggle('show');

        const arrow = this.querySelector('.arrow');
        arrow.style.transform = answer.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0)';
    });
});
// Get the popup element
const popup = document.getElementById("popup");

// Get the button that opens the popup
const openPopup = document.getElementById("openPopup");

// Get the element that closes the popup
const closePopup = document.getElementById("closePopup");

// When the user clicks the link, open the popup
openPopup.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    popup.style.display = "block"; // Show the popup
});

// When the user clicks on the close button (X), close the popup
closePopup.addEventListener('click', function() {
    popup.style.display = "none"; // Hide the popup
});

// Optional: Close the popup if the user clicks anywhere outside the popup content
window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});

const popup2 = document.getElementById("popup2");

// Get the button that opens the popup
const openPopup2 = document.getElementById("openPopup2");

// Get the element that closes the popup
const closePopup2 = document.getElementById("closePopup2");

// When the user clicks the link, open the popup
openPopup2.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    popup2.style.display = "block"; // Show the popup
});

// When the user clicks on the close button (X), close the popup
closePopup2.addEventListener('click', function() {
    popup2.style.display = "none"; // Hide the popup
});

// Optional: Close the popup if the user clicks anywhere outside the popup content
window.addEventListener('click', function(event) {
    if (event.target === popup2) {
        popup2.style.display = "none";
    }
});

const popup3 = document.getElementById("popup3");

// Get the button that opens the popup
const openPopup3 = document.getElementById("openPopup3");

// Get the element that closes the popup
const closePopup3 = document.getElementById("closePopup3");

// When the user clicks the link, open the popup
openPopup3.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    popup3.style.display = "block"; // Show the popup
});

// When the user clicks on the close button (X), close the popup
closePopup3.addEventListener('click', function() {
    popup3.style.display = "none"; // Hide the popup
});

// Optional: Close the popup if the user clicks anywhere outside the popup content
window.addEventListener('click', function(event) {
    if (event.target === popup3) {
        popup3.style.display = "none";
    }
});
const popup4 = document.getElementById("popup4");

// Get the button that opens the popup
const openPopup4 = document.getElementById("openPopup4");

// Get the element that closes the popup
const closePopup4 = document.getElementById("closePopup4");

// When the user clicks the link, open the popup
openPopup4.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    popup4.style.display = "block"; // Show the popup
});

// When the user clicks on the close button (X), close the popup
closePopup4.addEventListener('click', function() {
    popup4.style.display = "none"; // Hide the popup
});

// Optional: Close the popup if the user clicks anywhere outside the popup content
window.addEventListener('click', function(event) {
    if (event.target === popup4) {
        popup4.style.display = "none";
    }
});
