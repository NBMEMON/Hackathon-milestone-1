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

// changes
// script.js
// Function to toggle edit mode for specific elements
function toggleEdit(id) {
    const element = document.getElementById(id);
    if (element) {
        element.contentEditable = !element.isContentEditable;
        element.classList.toggle('editable');
    }
}

// Function to save content to localStorage
function saveContent(id) {
    const element = document.getElementById(id);
    if (element) {
        localStorage.setItem(id, element.innerHTML);
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
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        // Get the img element
        const img = document.querySelector('#My-pic img');
        if (img) {
            img.src = e.target.result; // Update the src with the new image data
        }
    }
    
    if (file) {
        reader.readAsDataURL(file); // Read the file as a data URL
    }
}

// Function to toggle edit mode for specific elements
function toggleEdit(id) {
    const element = document.getElementById(id);
    if (element) {
        element.contentEditable = !element.isContentEditable;
        element.classList.toggle('editable');
    }
}

// Function to save content to localStorage
function saveContent(id) {
    const element = document.getElementById(id);
    if (element) {
        localStorage.setItem(id, element.innerHTML);
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

