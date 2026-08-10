

document.addEventListener("DOMContentLoaded", function () {

    // =========================================================
    // STUDENTHUB JAVASCRIPT
    // =========================================================


    // =========================================================
    // IMAGE SLIDER
    // =========================================================

    const sliderImage = document.getElementById("sliderImage");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const sliderImages = [
        "js/images/student%20center.jpeg",
        "js/images/charusat%20university.jpeg",
        "js/images/charusat%20library.jpeg",
        "js/images/student%20hub%20portal.jpeg"
    ];

    const sliderAltText = [
        "Student Center",
        "CHARUSAT University",
        "CHARUSAT Library",
        "Student Hub Portal"
    ];

    const sliderDots = document.querySelectorAll(".slider-dot");

    let currentImage = 0;


    // =========================================================
    // SHOW SLIDER IMAGE
    // =========================================================

    function showImage(index) {

        if (!sliderImage) {
            return;
        }

        if (index < 0) {
            index = sliderImages.length - 1;
        }

        if (index >= sliderImages.length) {
            index = 0;
        }

        currentImage = index;

        sliderImage.src = sliderImages[currentImage];
        sliderImage.alt = sliderAltText[currentImage];


        // Update slider dots

        sliderDots.forEach(function (dot, i) {

            if (i === currentImage) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }

        });

    }


    // =========================================================
    // PREVIOUS BUTTON
    // =========================================================

    if (prevBtn) {

        prevBtn.addEventListener("click", function () {

            currentImage--;

            if (currentImage < 0) {
                currentImage = sliderImages.length - 1;
            }

            showImage(currentImage);

        });

    }


    // =========================================================
    // NEXT BUTTON
    // =========================================================

    if (nextBtn) {

        nextBtn.addEventListener("click", function () {

            currentImage++;

            if (currentImage >= sliderImages.length) {
                currentImage = 0;
            }

            showImage(currentImage);

        });

    }


    // =========================================================
    // SLIDER DOTS
    // =========================================================

    sliderDots.forEach(function (dot) {

        dot.addEventListener("click", function () {

            const slide =
                Number(dot.getAttribute("data-slide"));

            if (!isNaN(slide)) {
                showImage(slide);
            }

        });

    });


    // Show first image

    if (sliderImage) {
        showImage(currentImage);
    }


    // =========================================================
    // CONSOLE INFORMATION
    // =========================================================

    console.log("Welcome to StudentHub");
    console.log("Practical 4");

    const studentName = "Kavya";
    const course = "Information Technology";

    console.log(studentName);
    console.log(course);


    // =========================================================
    // DATA TYPES
    // =========================================================

    const college = "CHARUSAT";
    const currentYear = 2026;

    console.log(college);
    console.log(currentYear);


    // =========================================================
    // FUNCTION WITHOUT PARAMETER
    // =========================================================

    function welcomeMessage() {

        console.log("Welcome to StudentHub");

    }

    welcomeMessage();


    // =========================================================
    // FUNCTION WITH PARAMETER
    // =========================================================

    function welcomeStudent(name) {

        console.log("Welcome " + name);

    }

    welcomeStudent(studentName);


    // =========================================================
    // HEADING BUTTON
    // =========================================================

    const headingButton =
        document.getElementById("headingBtn");

    const heading =
        document.getElementById("mainHeading");


    if (headingButton && heading) {

        headingButton.addEventListener("click", function () {

            heading.textContent =
                "Welcome to StudentHub";

        });

    }


    // =========================================================
    // CLOSE ALERT
    // =========================================================

    const closeAlert =
        document.getElementById("closeAlert");

    const alertBox =
        document.querySelector(".alert");


    if (closeAlert && alertBox) {

        closeAlert.addEventListener("click", function () {

            alertBox.style.display = "none";

        });

    }


    // =========================================================
    // DYNAMIC YEAR
    // =========================================================

    const yearSpan =
        document.getElementById("year");


    if (yearSpan) {

        yearSpan.textContent =
            new Date().getFullYear();

    }


    // =========================================================
    // DARK / LIGHT MODE
    // WORKS ON ALL PAGES
    // =========================================================

    const themeButtons = document.querySelectorAll(
        "#darkModeBtn, #themeBtn, .dark-mode-btn"
    );


    // ---------------------------------------------------------
    // APPLY THEME
    // ---------------------------------------------------------

    function applyTheme(theme) {

        // Set theme on HTML element

        document.documentElement.setAttribute(
            "data-theme",
            theme
        );


        // Save theme

        localStorage.setItem(
            "theme",
            theme
        );


        // Change button text

        themeButtons.forEach(function (button) {

            if (theme === "dark") {

                button.textContent =
                    "☀️ Light Mode";

                button.setAttribute(
                    "aria-label",
                    "Switch to light mode"
                );

            } else {

                button.textContent =
                    "🌙 Dark Mode";

                button.setAttribute(
                    "aria-label",
                    "Switch to dark mode"
                );

            }

        });

    }


    // ---------------------------------------------------------
    // LOAD SAVED THEME
    // ---------------------------------------------------------

    let savedTheme =
        localStorage.getItem("theme");


    if (
        savedTheme !== "dark" &&
        savedTheme !== "light"
    ) {

        savedTheme = "light";

    }


    applyTheme(savedTheme);


    // ---------------------------------------------------------
    // DARK / LIGHT BUTTON CLICK
    // ---------------------------------------------------------

    themeButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const currentTheme =
                document.documentElement.getAttribute(
                    "data-theme"
                );


            if (currentTheme === "dark") {

                applyTheme("light");

            } else {

                applyTheme("dark");

            }

        });

    });


    // =========================================================
    // CARD FILTER
    // =========================================================

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const cards =
        document.querySelectorAll(".card");


    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const filter =
                button.getAttribute("data-filter");


            // Remove active class

            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            // Add active class

            button.classList.add("active");


            // Filter cards

            cards.forEach(function (card) {

                const category =
                    card.getAttribute("data-category");


                if (
                    filter === "all" ||
                    category === filter
                ) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

        });

    });


    // =========================================================
    // EVENT REGISTRATION
    // =========================================================

    const eventButtons =
        document.querySelectorAll(
            ".event-register"
        );


    eventButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const eventName =
                button.getAttribute("data-event");


            if (eventName) {

                alert(
                    "Successfully registered for " +
                    eventName +
                    "!"
                );

            } else {

                alert(
                    "Successfully registered for the event!"
                );

            }

        });

    });


    // =========================================================
    // CONTACT FORM
    // =========================================================

    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                alert(
                    "Your message was sent successfully!"
                );


                contactForm.reset();

            }
        );

    }


    // =========================================================
    // LOGIN FORM
    // =========================================================

    const loginForm =
        document.getElementById("loginForm");


    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const emailInput =
                    document.getElementById(
                        "loginEmail"
                    );

                const passwordInput =
                    document.getElementById(
                        "loginPassword"
                    );


                const email =
                    emailInput
                        ? emailInput.value.trim()
                        : "";

                const password =
                    passwordInput
                        ? passwordInput.value
                        : "";


                // Check empty fields

                if (
                    email === "" ||
                    password === ""
                ) {

                    alert(
                        "Please enter your email and password."
                    );

                    return;

                }


                // Login success

                alert(
                    "Login successful! Welcome to StudentHub."
                );


                loginForm.reset();

            }
        );

    }


    // =========================================================
    // FINAL MESSAGE
    // =========================================================

    console.log(
        "StudentHub website loaded successfully."
    );

});