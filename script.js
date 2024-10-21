// Initial setup for the Marketplace images and list items
function initializePage() {
    updateListItems(marketplaceListItems, marketplaceImages);  // Start with Marketplace list items
    changeImageSmoothly("pics/pic1.jpg");   // Change the main image to a default one for Marketplace
    buyButton.classList.add('active');      // Set buyButton as active on load
}

document.addEventListener("DOMContentLoaded", function() {
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

// Add event listener to the "Marketplace" button
buyButton.addEventListener('click', function() {
    updateListItems(marketplaceListItems, marketplaceListItems);  // Update the list for Marketplace
    changeImageSmoothly("pics/pic1.jpg");   // Change the main image
    buyButton.classList.add('active');
    sellButton.classList.remove('active');
    stoMartButton.classList.remove('active');
});

// Event listener for the "Storage" button
sellButton.addEventListener('click', function() {
    updateListItems(storageListItems, storageListItems);  // Update the list for Storage Mart
    changeImageSmoothly("pics/pic5.jpeg");  // Change the main image
    sellButton.classList.add('active');
    buyButton.classList.remove('active');
    stoMartButton.classList.remove('active');
});

// Event listener for the "Storage Mart" button
stoMartButton.addEventListener('click', function() {
    updateListItems(storageMartListItems, storageMartImages);  // Update the list for Storage Mart
    changeImageSmoothly("pics/pic5.jpeg");  // Change the main image
    stoMartButton.classList.add('active');
    buyButton.classList.remove('active');
    sellButton.classList.remove('active');
});

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
    {
        mainText: "Browse Listings",
        subText: "Find great deals on items from textbooks to tech, posted by fellow students right on campus."
    },
    {
        mainText: "Request Items",
        subText: "Can't find it? Post a 'Seeking' listing and get notified when someone offers what you're looking for."
    },
    {
        mainText: "Sell Items",
        subText: "Turn unused items into cash! Upload a photo, description, and price. Buyers can offer or pay instantly."
    },
    {
        mainText: "Grow Your Brand",
        subText: "Showcase your products on your seller page. Build credibility with reviews and updates to attract more buyers."
    }
];

const storageListItems = [
    {
        mainText: "Store Your Stuff",
        subText: "Rent storage from locals. Store items for a few weeks or months without paying for expensive storage units."
    },
    {
        mainText: "Request Specific Storage",
        subText: "Use the 'Seeking' feature to find storage for items like bikes, textbooks, or seasonal gear near you."
    },
    {
        mainText: "Flexible Rental Terms",
        subText: "Rent storage for days, weeks, or months. Easily adjust the rental period if your plans change."
    },
    {
        mainText: "Become a Holder",
        subText: "Got extra space? Rent it out and earn money. Offer a garage, closet, or dorm room to those who need it."
    }
];

    

    const storageMartListItems = [
        {
            mainText: "Sell Your Junk",
            subText: "Got items you don’t need? Let a holder list them and make money while they handle the marketplace for you."
        },
        {
            mainText: "Make Moving Out Hassle-Free",
            subText: "Skip the heavy lifting! Holders can pick up and store your stuff, making moving out a breeze."
        },
        {
            mainText: "Make Passive Income",
            subText: "Earn commission when your items sell in the marketplace. It's an easy way to make money without much effort."
        },
        {
            mainText: "Hold Marketplace Items",
            subText: "Got space? Hold others' items and earn commission when they sell, or keep them after the listing expires."
        }
    ];
    


// Function to update the image buttons with the correct set


// Function to update the list items based on the selected category
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


// Event listener for the "Marketplace" button
document.getElementById("buyButton").addEventListener("click", function() {
    updateListItems(marketplaceListItems, marketplaceImages);  // Update the list for Marketplace
    changeImageSmoothly("pics/pic1.jpg");   // Change the main image
    currentButtonIndex = 0;                 // Reset the toggling when switching categories
});

// Event listener for the "Storage" button
document.getElementById("sellButton").addEventListener("click", function() {
    updateListItems(storageListItems, storageImages);  // Update the list for Storage Mart
    changeImageSmoothly("pics/pic5.jpeg");  // Change the main image
    currentButtonIndex = 0;                 // Reset the toggling when switching categories
});
// Event listener for the "Storage Mart" button
document.getElementById("stoMartButton").addEventListener("click", function() {
    updateListItems(storageMartListItems, storageMartImages);  // Update the list for Storage Mart
    changeImageSmoothly("pics/pic5.jpeg");  // Change the main image
    currentButtonIndex = 0;                 // Reset the toggling when switching categories
});

// Initial setup for the Marketplace images and list items
updateListItems(marketplaceListItems, marketplaceImages);  // Start with Marketplace list items


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


