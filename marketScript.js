document.addEventListener("DOMContentLoaded", function() {
    const forSaleBtn = document.getElementById("for-sale-button");
    const seekingBtn = document.getElementById("seeking-button");
    const forSaleGrid = document.getElementById("for-sale-grid");
    const seekingList = document.getElementById("seeking-list");
    const filterToggle = document.getElementById("filter-toggle");
    const filterOptions = document.querySelector(".filter-options");
   
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
        loadMoreListings('seeking');
    });
    const imageBank = [
        "./pics/mark1.jpg",
        "./pics/mark2.jpg",
        "./pics/mark3.jpeg",
        "./pics/mark4.webp",
        "./pics/mark5.webp",
        "./pics/mark6.jpg",
        "./pics/mark7.jpg",
        "./pics/mark8.webp",
        "./pics/mark9.webp"
    ];

    const storageDescription = [
        {description: "Bedframe", id: 1},
        {description: "Toolbox", id: 2},
        {description: "Black hoodie", id: 3},
        {description: "Green umbrella", id: 4},
        {description: "UNC Jordans", id: 5},
        {description: "Green Xbox controller", id: 6},
        {description: "Office chair", id: 7},
        {description: "Couch", id: 8},
        {description: "Kitchen cutlery", id: 9}
    ];

    // Mockup lazy load function to add listings dynamically as user scrolls
    function loadMoreListings(section) {
        if (section === 'forSale') {
            // Array of image file paths
            
            
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
                            <h3>${description}</h3> <!-- Use the description from the array -->
                            <button>$${(i + 1) * 10}</button>
                        </div>
                    </div>
                `;
                forSaleGrid.appendChild(listing);
            }
        }
         else if (section === 'seeking') {
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
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) { // Trigger before reaching bottom
            loadMoreListings(activeSection);
        }
    });

    // Dummy data to simulate "seeking" listings
    const seekingData = [
        { description: "Looking for a used bicycle in good condition. Would pay $30", id: 1 },
        { description: "Seeking textbooks for introductory economics. Would pay $20", id: 2 },
        { description: "Need a small fridge for dorm room. Would pay $40", id: 3 },
        { description: "Looking for a secondhand guitar. Would pay $35", id: 4 },
        { description: "Seeking a bookshelf for my room. Would pay $50", id: 5 },
        { description: "Looking for gently used furniture. Would pay $40", id: 6 },
        // Add more dummy listings as needed
    ];

    // Variables to keep track of current scroll and how many items are displayed
    let currentIndex = 0;
    const itemsPerPage = 3;
});
