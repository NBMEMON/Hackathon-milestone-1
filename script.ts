
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
