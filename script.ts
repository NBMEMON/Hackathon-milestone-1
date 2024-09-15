// Add event listener for the button click
document.getElementById("toggleButton")?.addEventListener("click", function(this: HTMLElement) {
    const skillsContainer = document.getElementById("skillsContainer");
  
    if (skillsContainer?.classList.contains('show')) {
        skillsContainer.classList.remove('show');
        this.textContent = "Show Skills"; // Change button text to "Show Skills"
    } else {
        skillsContainer?.classList.add('show');
        this.textContent = "Hide Skills"; // Change button text to "Hide Skills"
    }
  });
  
  // Add event listener for window load
  window.addEventListener("load", function() {
    document.body.classList.add("loaded"); // Add class to trigger the transition
  });
  