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
