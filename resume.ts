import jsPDF from 'jspdf';


document.getElementById("toggleButton")?.addEventListener("click", function() {
    const skillsContainer = document.getElementById("skillsContainer") as HTMLElement;
  
    // Toggle the skills container visibility
    if (skillsContainer.classList.contains('show')) {
        skillsContainer.classList.remove('show');
        (this as HTMLButtonElement).textContent = "Show Skills"; // Change button text to "Show Skills"
    } else {
        skillsContainer.classList.add('show');
        (this as HTMLButtonElement).textContent = "Hide Skills"; // Change button text to "Hide Skills"
    }
  });
  
  window.addEventListener("load", function() {
    document.body.classList.add("loaded"); // Add class to trigger the transition
  });
// Function to toggle edit mode for specific elements
function toggleEdit(id: string) {
    const element = document.getElementById(id);
    if (element) {
        element.contentEditable = element.isContentEditable ? "false" : "true";
        element.classList.toggle('editable');
    }
}

// Function to save content to localStorage
function saveContent(id: string) {
    const element = document.getElementById(id);
    if (element) {
        localStorage.setItem(id, element.innerHTML);
        document.getElementById('footerButtons')!.style.display = 'block'; // Show the footer buttons
    }
}

// Function to load content from localStorage
function loadContent() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(el => {
        const content = localStorage.getItem(el.id);
        if (content) {
            (el as HTMLElement).innerHTML = content;
        }
    });
}

// Event listener to load content on page load
document.addEventListener('DOMContentLoaded', loadContent);

// Function to handle image preview
function previewImage(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files ? input.files[0] : null;
    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
        // Get the img element
        const img = document.querySelector('#My-pic img') as HTMLImageElement;
        if (img) {
            img.src = e.target!.result as string; // Update the src with the new image data
        }
    };

    if (file) {
        reader.readAsDataURL(file); // Read the file as a data URL
    }
}

// Function to share the resume
async function shareResume() {
    const username = prompt('Enter your username:');
    if (username) {
        // Generate a unique URL (e.g., username.vercel.app/resume)
        const uniqueURL = `https://${username}.vercel.app/resume`;

        // Send the username and URL to your server to store the data
        await fetch('/api/save-resume', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, url: uniqueURL, content: document.body.innerHTML }),
        });

        // Open the unique URL in a new tab
        window.open(uniqueURL, '_blank');
    }
}

// Function to download the page as PDF
function downloadPDF() {
    const doc = new jsPDF();
    doc.text(document.body.innerText, 10, 10);
    doc.save('resume.pdf');
}

// Event listeners for the new buttons
document.getElementById('shareButton')!.addEventListener('click', shareResume);
document.getElementById('downloadPDFButton')!.addEventListener('click', downloadPDF);
