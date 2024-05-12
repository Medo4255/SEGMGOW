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
        location: 'https://www.google.com/maps/search/?api=1&query=-27.1151506,-109.395043'
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
        location: 'https://www.google.com/maps/search/?api=1&query=37.970833, 23.726110'
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
        location: 'https://www.google.com/maps/search/?api=1&query=29.9752687,31.1375674'
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
        location: 'https://www.google.com/maps/search/?api=1&query=29.9868331,31.4387709'
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
        location: 'https://www.google.com/maps/search/?api=1&query=30.0039366,31.6989172'
    }
];

let currentOrganizationIndex = null;


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
    // Hide organization details when filtering
    hideOrganizationDetails();
}

// Function to view organization details
function viewOrganizationDetails(index, type) {
    var org;
    currentOrganizationIndex = index;
    if(type === "registered"){
        org = registeredOrgs[index];
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
    document.getElementById("org-location").href = org.location; 
    document.getElementById("organization-details").style.display = "block";
}

// Function to hide organization details
function hideOrganizationDetails() {
    document.getElementById("organization-details").style.display = "none";
}
