document.addEventListener("DOMContentLoaded", function() {
    const forSaleBtn = document.getElementById("for-sale-button");
    const seekingBtn = document.getElementById("seeking-button");
    const forSaleGrid = document.getElementById("for-sale-grid");
    const seekingList = document.getElementById("seeking-list");
    const filterToggle = document.getElementById("filter-toggle");
    const filterOptions = document.querySelector(".filter-options");

    filterToggle.addEventListener("click", function() {
        filterOptions.classList.toggle("show");  // Toggle 'show' class to reveal options
    });

    // Toggle between "For Sale" and "Seeking" sections
    forSaleBtn.addEventListener("click", function() {
        forSaleBtn.classList.add("active");
        seekingBtn.classList.remove("active");
        forSaleGrid.classList.remove("hidden");
        seekingList.classList.add("hidden");
    });

    seekingBtn.addEventListener("click", function() {
        seekingBtn.classList.add("active");
        forSaleBtn.classList.remove("active");
        seekingList.classList.remove("hidden");
        forSaleGrid.classList.add("hidden");
    });

    // Mockup lazy load function to add listings dynamically as user scrolls
    function loadMoreListings(section) {
        if (section === 'forSale') {
            for (let i = 0; i < 9; i++) {
                const listing = document.createElement("div");
                listing.classList.add("listing-item");
                listing.innerHTML = `
                    <img src="item-placeholder.jpg" alt="Item">
                    <h3>Product ${i + 1}</h3>
                    <p>$${(i + 1) * 10}</p>
                `;
                forSaleGrid.appendChild(listing);
            }
        } else if (section === 'seeking') {
            const itemsToLoad = seekingData.slice(currentIndex, currentIndex + itemsPerPage);
            itemsToLoad.forEach(item => {
                const seekingItem = document.createElement("div");
                seekingItem.classList.add("seeking-item");
                seekingItem.innerHTML = `
                    <p>${item.description}</p>
                    <button>Create Direct Listing</button>
                `;
                seekingList.appendChild(seekingItem);
            });
            currentIndex += itemsPerPage; // Update current index for infinite scrolling
        }
    }

    // Initial load of listings for "For Sale"
    loadMoreListings('forSale');

    // Simulate loading more listings when scrolling
    window.addEventListener("scroll", function() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            const activeSection = forSaleGrid.classList.contains("hidden") ? 'seeking' : 'forSale';
            loadMoreListings(activeSection);
        }
    });
});

// Dummy data to simulate "seeking" listings
const seekingData = [
    { description: "Looking for a used bicycle in good condition.", id: 1 },
    { description: "Seeking textbooks for introductory economics.", id: 2 },
    { description: "Need a small fridge for dorm room.", id: 3 },
    { description: "Looking for a secondhand guitar.", id: 4 },
    { description: "Seeking a roommate for next semester.", id: 5 },
    { description: "Looking for gently used furniture.", id: 6 },
    // Add more dummy listings as needed
];

// Variables to keep track of current scroll and how many items are displayed
let currentIndex = 0;
const itemsPerPage = 3;
