        // Dummy data for requests
        const requests = {
            Clothes: [
                { title: "Request 1: Clothes for Children", organization: "ABC Orphanage", type: "Shirts", age: "5-10 years", gender: "Unisex", season: "Winter", material: "Cotton", quantity: 20 },
                { title: "Request 2: Warm Jackets", organization: "XYZ Shelter", type: "Jackets", age: "Adults", gender: "Male", season: "Winter", material: "Wool", quantity: 15 },
                { title: "Request 3: Summer Clothes", organization: "Community Center", type: "Dresses", age: "12-15 years", gender: "Female", season: "Summer", material: "Polyester", quantity: 30 },
                // Add more clothes requests here
            ],

            Toys: [
            { 
                title: "Request 1: Educational Toys for Toddlers", 
                organization: "ABC Daycare", 
                type: "Toy", 
                age: "Toddlers (1-3 years)", 
                gender: "Any", 
                category: "Educational", 
                picture: "educational_toy.jpg", 
                quantity: 20 
            },
            { 
                title: "Request 2: Outdoor Toys for Children", 
                organization: "XYZ Summer Camp", 
                type: "Toy", 
                age: "Children (5-10 years)", 
                gender: "Any", 
                category: "Outdoor", 
                picture: "outdoor_toy.jpg", 
                quantity: 15 
            },
            { 
                title: "Request 3: Building Blocks for Preschoolers", 
                organization: "Community Center", 
                type: "Toy", 
                age: "Preschoolers (3-5 years)", 
                gender: "Any", 
                category: "Building Blocks", 
                picture: "building_blocks_toy.jpg", 
                quantity: 25 
            }               
             // Add more toys requests here
            ],

            Food: [
            { 
                title: "Request 1: Non-perishable Food Items", 
                organization: "Community Food Bank", 
                itemName: "Non-perishable Food Items", 
                quantity: "100 units" 
            },
            { 
                title: "Request 2: Fresh Fruits and Vegetables", 
                organization: "Farmers Market", 
                itemName: "Fruits and Vegetables", 
                quantity: "50 KG" 
            },
            { 
                title: "Request 3: Canned Goods", 
                organization: "Local Church", 
                itemName: "Canned Goods", 
                quantity: "200 units" 
            }                
            // Add more food requests here
            ],

            Medical: [
            { 
                title: "Request 1: PPE Kits", 
                organization: "ABC Hospital", 
                type: "PPE Kits", 
                use: "Protection for healthcare workers", 
                image: "ppe_kits.jpg", 
                quantity: "500 units" 
            },
            { 
                title: "Request 2: Medication", 
                organization: "Red Cross", 
                type: "Medication", 
                use: "Treatment for patients", 
                image: "medication.jpg", 
                quantity: "1000 units" 
            },
            { 
                title: "Request 3: Medical Equipment", 
                organization: "Community Health Clinic", 
                type: "Medical Equipment", 
                use: "Diagnostic tools", 
                image: "medical_equipment.jpg", 
                quantity: "10 units" 
            }
                // Add more medical supplies requests here
            ],

            School: [
                { title: "Request 1: Notebooks and Stationery", organization: "XYZ School", details: "Require notebooks and stationery items for students." },
                { title: "Request 2: Backpacks", organization: "Local Charity", details: "Seeking donations of backpacks for back-to-school drive." },
                { title: "Request 3: Art Supplies", organization: "Children's Art Center", details: "Collecting art supplies for after-school program." },
                { 
                    title: "Request 1: Books for Elementary Students", 
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
                    title: "Request 2: Books for High School Students", 
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
                    title: "Request 3: Books for College Students", 
                    organization: "Community College", 
                    type: "Book", 
                    bookName: "Introduction to Psychology", 
                    author: "James W. Kalat", 
                    language: "English", 
                    edition: "11th", 
                    summary: "Comprehensive introduction to the field of psychology covering key concepts and theories.", 
                    picture: "psychology_book.jpg", 
                    quantity: 40 
                }
                // Add more school supplies requests here
            ],
            Blood: [
            { 
                title: "Request 1: Blood Donation Drive", 
                patientName: "John Doe", 
                bloodType: "O+", 
                rhType: "+", 
                hospitalName: "ABC Hospital", 
                hospitalArea: "Downtown", 
                hospitalGovernorate: "New York", 
                hospitalAddress: "123 Main Street, Downtown, New York" 
            },
            { 
                title: "Request 2: Urgent Blood Donation", 
                patientName: "Jane Smith", 
                bloodType: "A-", 
                rhType: "-", 
                hospitalName: "XYZ Medical Center", 
                hospitalArea: "Uptown", 
                hospitalGovernorate: "New York", 
                hospitalAddress: "456 Oak Avenue, Uptown, New York" 
            },
            { 
                title: "Request 3: Blood for Emergency Surgery", 
                patientName: "Michael Johnson", 
                bloodType: "B+", 
                rhType: "+", 
                hospitalName: "Community Hospital", 
                hospitalArea: "Midtown", 
                hospitalGovernorate: "New York", 
                hospitalAddress: "789 Elm Street, Midtown, New York" 
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
                        addRequestToContainer(request, container);
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

            // Populate details container with request details
            const details = requestDetails(request, category);
            detailsContainer.appendChild(details); // Append details to the details container

            // Add click event to toggle details visibility
            title.addEventListener('click', function() {
                detailsContainer.classList.toggle('visible');
            });

            // Append title and details container to requestDiv
            requestDiv.appendChild(title);
            requestDiv.appendChild(detailsContainer);

            container.appendChild(requestDiv);
        }

        // Function to create details section based on category
        function requestDetails(request, category) {
            const details = document.createElement("div");
            details.classList.add("request-details");
            switch (category) {
                case "Clothes":
                    details.innerHTML = `
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
                        <p>Age: ${request.age}</p>
                        <p>Gender: ${request.gender}</p>
                        <p>Category: ${request.category}</p>
                        <p>Quantity: ${request.quantity}</p>
                        <img src="${request.picture}" alt="${request.title}">
                    `;
                    break;
                case "Food":
                    details.innerHTML = `
                        <p>Item Name: ${request.itemName}</p>
                        <p>Quantity: ${request.quantity}</p>
                    `;
                    break;
                case "Medical":
                    details.innerHTML = `
                        <p>Type: ${request.type}</p>
                        <p>Use: ${request.use}</p>
                        <p>Quantity: ${request.quantity}</p>
                        <img src="${request.image}" alt="${request.title}">
                    `;
                    break;
                case "School":
                    details.innerHTML = `
                        <p>Book Name: ${request.bookName}</p>
                        <p>Author: ${request.author}</p>
                        <p>Language: ${request.language}</p>
                        <p>Edition: ${request.edition}</p>
                        <p>Summary: ${request.summary}</p>
                        <p>Quantity: ${request.quantity}</p>
                        <img src="${request.picture}" alt="${request.bookName}">
                    `;
                    break;
                case "Blood":
                    details.innerHTML = `
                        <p>Patient Name: ${request.patientName}</p>
                        <p>Blood Type: ${request.bloodType} ${request.rhType}</p>
                        <p>Hospital Name: ${request.hospitalName}</p>
                        <p>Hospital Area: ${request.hospitalArea}</p>
                        <p>Governorate: ${request.hospitalGovernorate}</p>
                        <p>Hospital Address: ${request.hospitalAddress}</p>
                    `;
                    break;
                default:
                    break;
            }
            //details.style.display = "none"; // Hide details by default
            document.getElementById("requests-container").appendChild(details);
            return details;
        }

        // Function to search requests
        function searchRequests() {
            const searchInput = document.getElementById("searchInput").value.toLowerCase();
            const container = document.getElementById("requests-container");
            container.innerHTML = ""; // Clear previous requests

            Object.values(requests).forEach(categoryRequests => {
                categoryRequests.forEach(request => {
                    if (request.title.toLowerCase().includes(searchInput) || (request.organization && request.organization.toLowerCase().includes(searchInput)) || (request.details && request.details.toLowerCase().includes(searchInput))) {
                        addRequestToContainer(request, container);
                    }
                });
            });
        }

        // Show all requests initially
        showCategory("all");