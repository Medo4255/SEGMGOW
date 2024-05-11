const registeredOrgs = [
    {
        name: 'Org 1',
        type: 'Type A',
        address: '123 Main St',
        contact: '123-456-7890',
        firstName: 'John',
        lastName: 'Doe',
        gender: 'Male',
        email: 'john@example.com',
        area: 'Area A',
        governorate: 'Governorate A',
        location: '../images/map 1.jpg'
    },
    {
        name: 'Org 2',
        type: 'Type B',
        address: '456 Elm St',
        contact: '987-654-3210',
        firstName: 'Jane',
        lastName: 'Smith',
        gender: 'Female',
        email: 'jane@example.com',
        area: 'Area B',
        governorate: 'Governorate B',
        location: '../images/map 2.png'
    },
    {
        name: 'Org 3',
        type: 'Type C',
        address: '789 Pine St',
        contact: '098-765-4321',
        firstName: 'Robert',
        lastName: 'Johnson',
        gender: 'Male',
        email: 'robert@example.com',
        area: 'Area A',
        governorate: 'Governorate A',
        location: '../images/map 3.jpeg'
    }
];

const requestingOrgs = [
    {
        name: 'Org A',
        type: 'Type C',
        address: '123 Oak St',
        contact: '000-000-0000',
        firstName: 'Mary',
        lastName: 'Brown',
        gender: 'Female',
        email: 'mary@example.com',
        area: 'Area C',
        governorate: 'Governorate C',
        location: '../images/map 1.jpg'
    },
    {
        name: 'Org B',
        type: 'Type B',
        address: '456 Birch St',
        contact: '111-111-1111',
        firstName: 'William',
        lastName: 'Lewis',
        gender: 'Male',
        email: 'william@example.com',
        area: 'Area B',
        governorate: 'Governorate B',
        location: '../images/map 3.jpeg'
    }
];

let currentOrganizationIndex = null;

// Function to toggle between registered and requesting organizations
function toggleList(type) {
    const registeredBtn = document.getElementById("registered-btn");
    const requestingBtn = document.getElementById("requesting-btn");

    if (type === "registered") {
        registeredBtn.classList.add("active");
        requestingBtn.classList.remove("active");
        document.getElementById("registered-list").style.display = "block";
        document.getElementById("requesting-list").style.display = "none";
    } else {
        registeredBtn.classList.remove("active");
        requestingBtn.classList.add("active");
        document.getElementById("registered-list").style.display = "none";
        document.getElementById("requesting-list").style.display = "block";
    }

    // Hide organization details when toggling
    hideOrganizationDetails();
}

// Function to filter organizations
function filterOrganizations() {
    var input, filter, ul, li, i, j;
    input = document.getElementById("filter-input");
    filter = input.value.toUpperCase();

    // For registered organizations
    ul = document.getElementById("registered-list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        if (filter === "") {
            li[i].style.display = "";
            continue;
        }
        var org = registeredOrgs[i];
        var matchFound = false;
        for (j in org) {
            if (typeof org[j] === 'string' && org[j].toUpperCase() === filter) {
                matchFound = true;
                break;
            }
        }
        if (matchFound) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

    // For requesting organizations
    ul = document.getElementById("requesting-list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        if (filter === "") {
            li[i].style.display = "";
            continue;
        }
        var org = requestingOrgs[i];
        var matchFound = false;
        for (j in org) {
            if (typeof org[j] === 'string' && org[j].toUpperCase() === filter) {
                matchFound = true;
                break;
            }
        }
        if (matchFound) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

    // Hide organization details when filtering
    hideOrganizationDetails();
}

// Function to view organization details
function viewOrganizationDetails(index, type) {
    var org;
    currentOrganizationIndex = index;
    if(type === "registered"){
        org = registeredOrgs[index];
        document.getElementById('delete-btn-container').style.display = 'block';
    }
    else{
        org = requestingOrgs[index];
        document.getElementById('delete-btn-container').style.display = 'none';
    }
    document.getElementById("org-name").textContent = org.name;
    document.getElementById("org-type").textContent = org.type;
    document.getElementById("org-address").textContent = org.address;
    document.getElementById("org-contact").textContent = org.contact;
    document.getElementById("org-firstname").textContent = org.firstName;
    document.getElementById("org-lastname").textContent = org.lastName;
    document.getElementById("org-gender").textContent = org.gender;
    document.getElementById("org-email").textContent = org.email;
    document.getElementById("org-area").textContent = org.area;
    document.getElementById("org-governorate").textContent = org.governorate;
    document.getElementById("org-location").src = org.location; 
    document.getElementById("organization-details").style.display = "block";
}

function deleteOrganization() {
    if (currentOrganizationIndex !== null) {
        if (confirm("Are you sure you want to delete the selected organization?")) {
            registeredOrgs.splice(currentOrganizationIndex, 1);
            resetOrganizationDetails();
            updateOrganizationList();
        }
    }
}

function resetOrganizationDetails() {
    document.getElementById("organization-details").style.display = "none";
    currentOrganizationIndex = null;
    if(registeredOrgs.length > 0){
    viewOrganizationDetails(0,"registered"); // Reset to the first organization after accepting/rejecting
    }
}

function updateOrganizationList() {
    const list = document.getElementById("registered-list");
    list.innerHTML = "";
    registeredOrgs.forEach((org, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = org.name;
        listItem.onclick = () => viewOrganizationDetails(index,"registered");
        list.appendChild(listItem);
    });
}

// Function to hide organization details
function hideOrganizationDetails() {
    document.getElementById("organization-details").style.display = "none";
}
