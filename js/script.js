document.addEventListener("DOMContentLoaded", function () {
  console.log("Welcome to StudentHub");
  console.log("Practical 4");

  let studentName = "Kavya";
  let course = "Information Technology";

  console.log(studentName);
  console.log(course);

  // Data types
  let college = "CHARUSAT";
  let year = 2026;

  console.log(college);
  console.log(year);

  // Function without parameter
  function welcomeMessage() {
    console.log("Welcome to StudentHub");
  }

  welcomeMessage();

  // Function with parameter
  function welcomeStudent(name) {
    console.log("Welcome " + name);
  }

  welcomeStudent(studentName);

  // Heading button
  const headingButton = document.getElementById("headingBtn");
  const heading = document.getElementById("mainHeading");

  if (headingButton && heading) {
    headingButton.onclick = function () {
      heading.innerHTML = "Welcome to StudentHub";
    };
  }

  // Notification close button
  const notification = document.getElementById("notification");
  const closeButton = document.getElementById("closeBtn");

  if (notification && closeButton) {
    closeButton.onclick = function () {
      notification.style.display = "none";
    };
  }

  // --- Persistent Light / Dark Theme Logic ---
  const themeToggleBtn = document.getElementById("themeBtn") || document.getElementById("theme-toggle");

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
    }
  }

  // Load saved theme from previous page views or default to light
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);

  // Toggle theme on button click
  if (themeToggleBtn) {
    themeToggleBtn.onclick = function () {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
    };
  }
});