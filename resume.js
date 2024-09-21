document.getElementById("toggleButton").addEventListener("click", function() {
    var skillsContainer = document.getElementById("skillsContainer");

    // Toggle the skills container visibility
    if (skillsContainer.classList.contains('show')) {
        skillsContainer.classList.remove('show');
        this.textContent = "Show Skills"; // Change button text to "Show Skills"
    } else {
        skillsContainer.classList.add('show');
        this.textContent = "Hide Skills"; // Change button text to "Hide Skills"
    }
});

window.addEventListener("load", function() {
    document.body.classList.add("loaded"); // Add class to trigger the transition
});

// Function to toggle edit mode for specific elements
// Function to toggle edit mode for specific elements
function toggleEdit(id) {
    const element = document.getElementById(id);
    if (element) {
        element.contentEditable = element.isContentEditable ? "false" : "true";
        element.classList.toggle('editable');
    }
}

// Function to save content to localStorage
function saveContent(id) {
    const element = document.getElementById(id);
    if (element) {
        localStorage.setItem(id, element.innerHTML);
        document.getElementById('footerButtons').style.display = 'block'; // Show the footer buttons
    }
}

// Function to load content from localStorage
function loadContent() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(el => {
        const content = localStorage.getItem(el.id);
        if (content) {
            el.innerHTML = content;
        }
    });
}

// Event listener to load content on page load
document.addEventListener('DOMContentLoaded', loadContent);

// Function to handle image preview
function previewImage(event) {
    const input = event.target;
    const file = input.files ? input.files[0] : null;
    const reader = new FileReader();

    reader.onload = (e) => {
        // Get the img element
        const img = document.querySelector('#My-pic img');
        if (img) {
            img.src = e.target.result; // Update the src with the new image data
        }
    };

    if (file) {
        reader.readAsDataURL(file); // Read the file as a data URL
    }
}

// Function to share the resume
// Function to encode and generate shareable URL
function generateShareableURL() {
    // Get the content of the Main-Div
    const mainDivContent = document.getElementById("Main-Div").innerHTML;
    
    // Encode the content to make it URL-safe
    const encodedContent = encodeURIComponent(mainDivContent);
    
    // Generate the full shareable URL (current page URL + encoded content as a query parameter)
    const shareableURL = `${window.location.origin}${window.location.pathname}?content=${encodedContent}`;
    
    // Show the shareable URL to the user
    alert("Shareable URL: " + shareableURL);

    // Optionally, copy the URL to the clipboard
    navigator.clipboard.writeText(shareableURL).then(function() {
        alert("URL copied to clipboard!");
    }, function() {
        alert("Failed to copy the URL.");
    });
}

// Function to load content from URL if available
function loadSharedContent() {
    const urlParams = new URLSearchParams(window.location.search);
    const encodedContent = urlParams.get('content');
    
    if (encodedContent) {
        // Decode the content and insert it into the Main-Div
        const decodedContent = decodeURIComponent(encodedContent);
        document.getElementById("Main-Div").innerHTML = decodedContent;
    }
}

// Call the loadSharedContent function when the page loads to check if there's any shared content in the URL
window.onload = loadSharedContent;

// Event listener for the Share button
document.getElementById("shareButton").addEventListener("click", generateShareableURL);
