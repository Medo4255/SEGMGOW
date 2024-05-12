        // Dummy data for requests
        const requests = {
            Clothes: [
                { cat: "Clothes", title: "Clothes for Children", organization: "ABC Orphanage", type: "Shirts", age: "5-10 years", gender: "Unisex", season: "Winter", material: "Cotton", quantity: 20 },
                { cat: "Clothes", title: "Warm Jackets", organization: "XYZ Shelter", type: "Jackets", age: "Adults", gender: "Male", season: "Winter", material: "Wool", quantity: 15 },
                { cat: "Clothes", title: "Summer Clothes", organization: "Community Center", type: "Dresses", age: "12-15 years", gender: "Female", season: "Summer", material: "Polyester", quantity: 30 },
                // Add more clothes requests here
            ],

            Toys: [
            { 
                cat: "Toys",
                title: "Toys for Toddlers", 
                organization: "ABC Daycare", 
                type: "Toy", 
                age: "Toddlers (1-3 years)", 
                gender: "Any", 
                category: "Stuffed Toys", 
                picture: "educational_toy.jpg", 
                quantity: 20 
            },
            { 
                cat: "Toys",
                title: "Outdoor Toys for Children", 
                organization: "XYZ Summer Camp", 
                type: "Toy", 
                age: "Children (5-10 years)", 
                gender: "Any", 
                category: "Outdoor", 
                picture: "outdoor_toy.jpg", 
                quantity: 15 
            },
            { 
                cat: "Toys",
                title: "Board Games for Preschoolers", 
                organization: "Community Center", 
                type: "Toy", 
                age: "Preschoolers (3-5 years)", 
                gender: "Any", 
                category: "Board Games", 
                picture: "building_blocks_toy.jpg", 
                quantity: 25 
            }               
             // Add more toys requests here
            ],

            Food: [
            { 
                cat: "Food",
                title: "Non-perishable Food Items", 
                organization: "Community Food Bank", 
                itemName: "Canned Food", 
                quantity: "100" 
            },
            { 
                cat: "Food",
                title: "Fresh Fruits and Vegetables", 
                organization: "Farmers Market", 
                itemName: "Fruits and Vegetables", 
                quantity: "50" 
            },
            { 
                cat: "Food",
                title: "Baked Goods", 
                organization: "Local Mosque", 
                itemName: "Baked Goods", 
                quantity: "200" 
            }                
            // Add more food requests here
            ],

            Medical: [
            { 
                cat: "Medical",
                title: "PPE Kits", 
                organization: "ABC Hospital", 
                type: "PPE Kits", 
                use: "Protection for healthcare workers", 
                image: "ppe_kits.jpg", 
                quantity: "500" 
            },
            { 
                cat: "Medical",
                title: "Medication", 
                organization: "Red Cross", 
                type: "Medication", 
                use: "Treatment for patients", 
                image: "medication.jpg", 
                quantity: "1000" 
            },
            { 
                cat: "Medical",
                title: "Medical Equipment", 
                organization: "Community Health Clinic", 
                type: "Medical Equipment", 
                use: "Diagnostic tools", 
                image: "medical_equipment.jpg", 
                quantity: "10" 
            }
                // Add more medical supplies requests here
            ],

            School: [
                { 
                    cat: "School",
                    title: "Books for Elementary Students", 
                    organization: "ABC School", 
                    type: "Book", 
                    bookName: "Mathematics for Elementary Teachers", 
                    author: "Albert B. Bennett, Jr., Laurie J. Burton, L. Ted Nelson, James L. Cavanaugh", 
                    language: "English", 
                    edition: "10th", 
                    summary: "Comprehensive guide covering fundamental concepts in mathematics for elementary teachers.", 
                    picture: "math_book.jpg", 
                    quantity: 50 
                },
                { 
                    cat: "School",
                    title: "Books for High School Students", 
                    organization: "XYZ High School", 
                    type: "Book", 
                    bookName: "To Kill a Mockingbird", 
                    author: "Harper Lee", 
                    language: "English", 
                    edition: "Paperback", 
                    summary: "Classic novel exploring themes of racial injustice and moral growth in the American South.", 
                    picture: "mockingbird_book.jpg", 
                    quantity: 30 
                },
                { 
                    cat: "School",
                    title: "Books for College Students", 
                    organization: "Community College", 
                    type: "Book", 
                    bookName: "Introduction to Psychology", 
                    author: "James W. Kalat", 
                    language: "English", 
                    edition: "11th", 
                    summary: "Comprehensive introduction to the field of psychology covering key concepts and theories.", 
                    picture: "psychology_book.jpg", 
                    quantity: 40 
                },
                {
                    cat: "School",
                    title: "Pens and Pencils for Elementary School",
                    organization: "ABC School",
                    type: "Stationary",
                    quantity: 100
                },
                {
                    cat: "School",
                    title: "Erasers and Sharpeners for Elementary School",
                    organization: "ABC School",
                    type: "Stationary",
                    quantity: 100
                }
                // Add more school supplies requests here
            ],
            Blood: [
            { 
                cat: "Blood",
                title: "Blood Donation Drive", 
                patientName: "John Doe", 
                bloodType: "O", 
                rhType: "+", 
                hospitalName: "ABC Hospital", 
                hospitalArea: "Downtown", 
                hospitalGovernorate: "New York", 
                hospitalAddress: "123 Main Street, Downtown, New York",
                Location: "../images/map 1.jpg"
            },
            { 
                cat: "Blood",
                title: "Urgent Blood Donation", 
                patientName: "Jane Smith", 
                bloodType: "A", 
                rhType: "-", 
                hospitalName: "XYZ Medical Center", 
                hospitalArea: "Uptown", 
                hospitalGovernorate: "New York", 
                hospitalAddress: "456 Oak Avenue, Uptown, New York",
                Location: "../images/map 2.png"
            },
            { 
                cat: "Blood",
                title: "Blood for Emergency Surgery", 
                patientName: "Michael Johnson", 
                bloodType: "B", 
                rhType: "+", 
                hospitalName: "Community Hospital", 
                hospitalArea: "Midtown", 
                hospitalGovernorate: "New York", 
                hospitalAddress: "789 Elm Street, Midtown, New York",
                Location: "../images/map 3.jpeg" 
            }
                // Add more blood donation requests here
            ]
        };


        // Function to show requests based on category
        function showCategory(category) {
            document.getElementById("selectedCategoryBtn").textContent = category === "all" ? "Select Category" : category;
            const container = document.getElementById("requests-container");
            container.innerHTML = ""; // Clear previous requests

            if (category === "all") {
                Object.values(requests).forEach(categoryRequests => {
                    categoryRequests.forEach(request => {
                        addRequestToContainer(request, container, category);
                    });
                });
            } else {
                const categoryRequests = requests[category];
                categoryRequests.forEach(request => {
                    addRequestToContainer(request, container, category);
                });
            }
        }

        // Function to add a request to the container
        function addRequestToContainer(request, container, category) {
            const requestDiv = document.createElement("div");
            requestDiv.classList.add("request");

            const title = document.createElement("h2");
            title.classList.add("request-title");
            title.textContent = request.title;

            // Create a details container for each request
            const detailsContainer = document.createElement("div");
            detailsContainer.classList.add("request-details");

            const dynamicCategory = (category === "all") ? request.cat : category;

            // Populate details container with request details
            var details = requestDetails(request, dynamicCategory);
            detailsContainer.appendChild(details); // Append details to the details container

            // Create Quantity Input Field
            const quantityInput = document.createElement("input");
            quantityInput.type = "number";
            quantityInput.placeholder = "Enter quantity...";
            quantityInput.classList.add("quantity-input");
            quantityInput.style.display = "none"; // Initially hide the input

            // Create Donate Quantity Button
            const quantityButton = document.createElement("button");
            quantityButton.textContent = "Donate Quantity";
            quantityButton.classList.add("quantity-button");
            quantityButton.style.display = "none"; // Initially hide the button

            // Add click event to toggle details visibility
            title.addEventListener('click', function() {
                if(detailsContainer.style.display === "" || detailsContainer.style.display === "none"){
                    detailsContainer.style.display = "block";
                    if(dynamicCategory !== "Blood"){
                        quantityInput.style.display = "block"; // Show the input when title is clicked
                        quantityButton.style.display = "block"; // Show the button when title is clicked
                    }
                }
                else{
                    detailsContainer.style.display = "none";
                    if(dynamicCategory !== "Blood"){
                        quantityInput.style.display = "none"; // Show the input when title is clicked
                        quantityButton.style.display = "none"; // Show the button when title is clicked
                    }
                }
            });

            // Add click event to donate quantity button
            quantityButton.addEventListener("click", function() {
                const quantity = parseInt(quantityInput.value);
                if (!isNaN(quantity) && quantity > 0 && quantity <= request.quantity) {
                    // Update the quantity in the request
                    request.quantity -= quantity;
                    // Update the displayed quantity
                    var quantityElement;
                    switch(dynamicCategory){
                        case "Clothes":
                            quantityElement = details.querySelector("p:nth-child(7)");
                            break;
                        case "Toys":
                            quantityElement = details.querySelector("p:nth-child(5)");
                            break;
                        case "Food":
                            quantityElement = details.querySelector("p:nth-child(3)");
                            break;
                        case "Medical":
                            quantityElement = details.querySelector("p:nth-child(4)");
                            break;
                        case "School":
                            if(request.type === "Book"){
                                quantityElement = details.querySelector("p:nth-child(7)");
                            }
                            else{
                                quantityElement = details.querySelector("p:nth-child(3)");
                            }
                            break;
                        default:
                            break;
                    }
                    quantityElement.textContent = `Quantity: ${request.quantity}`;
                    // Show thank you message
                    const thankYouMessage = document.createElement("p");
                    thankYouMessage.textContent = "Thank you for your donation!";
                    thankYouMessage.style.color = "green";
                    requestDiv.appendChild(thankYouMessage);
                    // Clear input after donation
                    quantityInput.value = "";
                    let seconds = 3;
                    const timer = setInterval(() => {
                        seconds--;
                        thankYouMessage.textContent = `Thank you for your donation! Redirecting in ${seconds} seconds...`;
                        if (seconds === 0) {
                            clearInterval(timer);
                            window.location.href = '../html/donation_details.html';
                        }
                    }, 1000);
                } else {
                    if (quantity > request.quantity) {
                        alert("Cannot donate more than the available quantity.");
                    } else {
                        alert("Please enter a valid quantity.");
                    }
                }
            });

            // Append title, details container, quantity input, and quantity button to requestDiv
            requestDiv.appendChild(title);
            requestDiv.appendChild(detailsContainer);
            requestDiv.appendChild(quantityInput);
            requestDiv.appendChild(quantityButton);

            container.appendChild(requestDiv);
        }


        
        // Function to create details section based on category
        function requestDetails(request, category) {
            const details = document.createElement("div");
            details.classList.add("request-details");
            switch (category) {
                case "Clothes":
                    details.innerHTML = `
                        <p>Organization: ${request.organization}</p>
                        <p>Type: ${request.type}</p>
                        <p>Age: ${request.age}</p>
                        <p>Gender: ${request.gender}</p>
                        <p>Season: ${request.season}</p>
                        <p>Material: ${request.material}</p>
                        <p>Quantity: ${request.quantity}</p>
                    `;
                    break;
                case "Toys":
                    details.innerHTML = `
                        <p>Organization: ${request.organization}</p>
                        <p>Age: ${request.age}</p>
                        <p>Gender: ${request.gender}</p>
                        <p>Category: ${request.category}</p>
                        <p>Quantity: ${request.quantity}</p>
                        <img src="${request.picture}" alt="${request.title}">
                    `;
                    break;
                case "Food":
                    details.innerHTML = `
                        <p>Organization: ${request.organization}</p>
                        <p>Item Name: ${request.itemName}</p>
                        <p>Quantity: ${request.quantity}</p>
                    `;
                    break;
                case "Medical":
                    details.innerHTML = `
                        <p>Organization: ${request.organization}</p>
                        <p>Type: ${request.type}</p>
                        <p>Use: ${request.use}</p>
                        <p>Quantity: ${request.quantity}</p>
                        <img src="${request.image}" alt="${request.title}">
                    `;
                    break;
                case "School":
                    if(request.type == "Book"){
                    details.innerHTML = `
                        <p>Organization: ${request.organization}</p>
                        <p>Book Name: ${request.bookName}</p>
                        <p>Author: ${request.author}</p>
                        <p>Language: ${request.language}</p>
                        <p>Edition: ${request.edition}</p>
                        <p>Summary: ${request.summary}</p>
                        <p>Quantity: ${request.quantity}</p>
                        <img src="${request.picture}" alt="${request.bookName}">
                    `;
                    }
                    else {
                        details.innerHTML = `
                        <p>Organization: ${request.organization}</p>
                        <p>Type: ${request.type}</p>
                        <p>Quantity: ${request.quantity}</p>
                    `; 
                    }
                    break;
                case "Blood":
                    details.innerHTML = `
                        <p>Patient Name: ${request.patientName}</p>
                        <p>Blood Type: ${request.bloodType} ${request.rhType}</p>
                        <p>Hospital Name: ${request.hospitalName}</p>
                        <p>Hospital Area: ${request.hospitalArea}</p>
                        <p>Governorate: ${request.hospitalGovernorate}</p>
                        <p>Hospital Address: ${request.hospitalAddress}</p>
                        <img src="${request.Location}" class = "location">
                    `;
                    break;
                default:
                    break;
            }
            details.style.display = "block";
            return details;
        }

        // Function to search requests
        // Function to search requests
        function searchRequests() {
            const searchInput = document.getElementById("searchInput").value.toLowerCase();
            const container = document.getElementById("requests-container");
            container.innerHTML = ""; // Clear previous requests

            Object.values(requests).forEach(categoryRequests => {
                categoryRequests.forEach(request => {
                    // Concatenate all details of the request into a single string
                    const requestDetails = Object.values(request).join(" ").toLowerCase();
                    // Search for the input string in the concatenated details
                    if (requestDetails.includes(searchInput)) {
                        addRequestToContainer(request, container,"all");
                    }
                });
            });
        }


        // Show all requests initially
        showCategory("all");