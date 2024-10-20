document.addEventListener("DOMContentLoaded", function() {
    const forSaleBtn = document.getElementById("for-sale-button");
    const seekingBtn = document.getElementById("seeking-button");
    const forSaleGrid = document.getElementById("for-sale-grid");
    const seekingList = document.getElementById("seeking-list");
    const filterToggle = document.getElementById("filter-toggle");
    const filterOptions = document.querySelector(".filter-options");

    let currentIndex = 0;
    const itemsPerPage = 3;

    const links = document.querySelectorAll("header .nav-links a");
    const currentPage = window.location.pathname.split("/").pop();  // Get the current page (e.g., index.html)
    
    console.log("Current Page Path: ", currentPage);  // Check currentPage value

    links.forEach(link => {
        const href = link.getAttribute("href").split("/").pop();  // Get href's page name
        
        
        if (href === currentPage) {
            link.classList.add("active");
            
        }
    });

    // Toggle visibility of filter options
    filterToggle.addEventListener("click", function() {
        filterOptions.classList.toggle("show");
    });

    // Toggle between "For Sale" and "Seeking" sections
    forSaleBtn.addEventListener("click", function() {
        forSaleBtn.classList.add("active");
        seekingBtn.classList.remove("active");
        forSaleGrid.classList.remove("hidden");
        seekingList.classList.add("hidden");
        loadMoreListings('forSale');
    });

    seekingBtn.addEventListener("click", function() {
        seekingBtn.classList.add("active");
        forSaleBtn.classList.remove("active");
        seekingList.classList.remove("hidden");
        forSaleGrid.classList.add("hidden");
        currentIndex = 0;  // Reset the index when switching to seeking section
        seekingList.innerHTML = '';  // Clear the list when switching
        loadMoreListings('seeking');
    });

    // Array of image file paths
    const imageBank = [
        "./pics/storage1.webp",
        "./pics/storage2.webp",
        "./pics/storage3.jpg",
        "./pics/storage4.webp",
        "./pics/storage5.jpg",
        "./pics/storage6.webp",
        "./pics/storage7.jpg",
        "./pics/storage8.jpg",
        "./pics/storage9.jpg"
    ];

    const storageDescription = [
        {description: "Shed. 200 Sq Ft.", id: 1},
        {description: "Shed. 150 Sq Ft.", id: 2},
        {description: "Basement. 300 Sq Ft.", id: 3},
        {description: "Basement. 500 Sq Ft.", id: 4},
        {description: "Attic. 150 Sq Ft.", id: 5},
        {description: "Attic. 100 Sq Ft.", id: 6},
        {description: "Garage. 250 Sq Ft.", id: 7},
        {description: "Garage. 200 Sq Ft.", id: 8},
        {description: "Storage Closet. 75 Sq Ft.", id: 9}
    ];

    // Mockup lazy load function to add listings dynamically as user scrolls
    function loadMoreListings(section) {
        if (section === 'forSale') {
            for (let i = 0; i < 9; i++) {
                const listing = document.createElement("div");
                listing.classList.add("listing-item");
            
                // Use modulus operator to cycle through the images
                const imageSrc = imageBank[i % imageBank.length]; // This will loop through the array
                const description = storageDescription[i % storageDescription.length].description; // Access the description property
            
                listing.innerHTML = `
                    <div>
                        <img src="${imageSrc}" alt="Item">
                        <div class="text">
                            <h3>${description}</h3>
                            <button>$${(i + 1) * 10}</button>
                        </div>
                    </div>
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
        const activeSection = forSaleGrid.classList.contains("hidden") ? 'seeking' : 'forSale';
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 800) { // Trigger before reaching bottom
            loadMoreListings(activeSection);
        }
    });

    // Dummy data to simulate "seeking" listings
    const seekingData = [
        { description: "Looking to store my couch. Would pay $90", id: 1 },
        { description: "Need to store my grill. Would pay $80", id: 2 },
        { description: "Have a mini fridge. Would pay $70", id: 3 },
        { description: "Have a couple boxes. Would pay $45/month", id: 4 },
        { description: "Looking to store an old bedframe. Would pay $40/month", id: 5 },
        { description: "Have a couple chairs. Would pay $80", id: 6 },
        // Add more dummy listings as needed
    ];

});
