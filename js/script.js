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

  // Theme button
  const themeButton = document.getElementById("themeBtn");

  if (themeButton) {
    themeButton.onclick = function () {
      const darkMode =
        document.body.style.backgroundColor === "black";

      if (darkMode) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        themeButton.innerHTML = "Dark Mode";
      } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        themeButton.innerHTML = "Light Mode";
      }
    };
  }
});