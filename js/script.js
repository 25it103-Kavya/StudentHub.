document.addEventListener("DOMContentLoaded", function () {

    // =========================================================
    // STUDENTHUB JAVASCRIPT
    // =========================================================


    // =========================================================
    // 1. IMAGE SLIDER
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

            const slide = Number(
                dot.getAttribute("data-slide")
            );

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
    // 2. CONSOLE INFORMATION
    // =========================================================

    console.log("Welcome to StudentHub");
    console.log("Practical 4");

    const studentName = "Kavya";
    const course = "Information Technology";

    console.log(studentName);
    console.log(course);


    // =========================================================
    // 3. DATA TYPES
    // =========================================================

    const college = "CHARUSAT";
    const currentYear = 2026;

    console.log(college);
    console.log(currentYear);


    // =========================================================
    // 4. FUNCTION WITHOUT PARAMETER
    // =========================================================

    function welcomeMessage() {

        console.log("Welcome to StudentHub");

    }

    welcomeMessage();


    // =========================================================
    // 5. FUNCTION WITH PARAMETER
    // =========================================================

    function welcomeStudent(name) {

        console.log("Welcome " + name);

    }

    welcomeStudent(studentName);


    // =========================================================
    // 6. CHANGE HEADING BUTTON
    // TOGGLE GRADUATION CAP ICON
    // =========================================================

    const changeHeadingBtn =
        document.getElementById("changeHeadingBtn") ||
        document.getElementById("headingBtn");

    const logoIcon =
        document.getElementById("logoIcon");

    let hasIcon = false;


    if (changeHeadingBtn && logoIcon) {

        changeHeadingBtn.addEventListener("click", function () {

            hasIcon = !hasIcon;

            if (hasIcon) {

                logoIcon.textContent = "🎓 ";

            } else {

                logoIcon.textContent = "";

            }

        });

    }


    // =========================================================
    // 7. CLOSE WELCOME ALERT
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
    // 8. DYNAMIC YEAR
    // =========================================================

    const yearSpan =
        document.getElementById("year");


    if (yearSpan) {

        yearSpan.textContent =
            new Date().getFullYear();

    }


    // =========================================================
    // 9. DARK / LIGHT MODE
    // WORKS ON ALL PAGES
    // =========================================================

    const themeButtons =
        document.querySelectorAll(
            "#darkModeBtn, #themeBtn, .dark-mode-btn"
        );


    // =========================================================
    // APPLY THEME
    // =========================================================

    function applyTheme(theme) {

        document.documentElement.setAttribute(
            "data-theme",
            theme
        );


        // Save theme

        localStorage.setItem(
            "theme",
            theme
        );


        // Change all theme buttons

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


    // =========================================================
    // LOAD SAVED THEME
    // =========================================================

    let savedTheme =
        localStorage.getItem("theme");


    if (
        savedTheme !== "dark" &&
        savedTheme !== "light"
    ) {

        savedTheme = "light";

    }


    applyTheme(savedTheme);


    // =========================================================
    // DARK / LIGHT BUTTON CLICK
    // =========================================================

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
    // 10. CARD FILTER
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
    // 11. EVENT REGISTRATION
    // =========================================================

    const eventButtons =
        document.querySelectorAll(".event-register");


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
    // 12. CONTACT FORM
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
    // 13. LOGIN FORM
    // =========================================================

    const loginForm =
        document.getElementById("loginForm");


    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const emailInput =
                    document.getElementById("loginEmail");

                const passwordInput =
                    document.getElementById("loginPassword");


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
    // 14. NOTIFICATION BUTTON
    // STUDENT ANNOUNCEMENTS
    // =========================================================

    const notificationBtn =
        document.getElementById("notificationBtn");

    const notificationBox =
        document.getElementById("notificationBox");

    const closeNotification =
        document.getElementById("closeNotification");


    // =========================================================
    // OPEN NOTIFICATION BOX
    // =========================================================

    if (
        notificationBtn &&
        notificationBox
    ) {

        notificationBtn.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                notificationBox.classList.toggle(
                    "show"
                );

            }
        );

    }


    // =========================================================
    // CLOSE NOTIFICATION BOX
    // =========================================================

    if (
        closeNotification &&
        notificationBox
    ) {

        closeNotification.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                notificationBox.classList.remove(
                    "show"
                );

            }
        );

    }


    // =========================================================
    // CLOSE NOTIFICATION WHEN CLICKING OUTSIDE
    // =========================================================

    document.addEventListener(
        "click",
        function (event) {

            if (
                notificationBox &&
                notificationBtn &&
                !notificationBox.contains(event.target) &&
                !notificationBtn.contains(event.target)
            ) {

                notificationBox.classList.remove(
                    "show"
                );

            }

        }
    );


    // =========================================================
    // 15. MOBILE HAMBURGER MENU
    // =========================================================

    const hamburgerBtn =
        document.getElementById("hamburgerBtn");

    const navMenu =
        document.querySelector(".nav");


    if (hamburgerBtn && navMenu) {

        hamburgerBtn.addEventListener(
            "click",
            function () {

                navMenu.classList.toggle(
                    "mobile-menu-open"
                );


                if (
                    navMenu.classList.contains(
                        "mobile-menu-open"
                    )
                ) {

                    hamburgerBtn.textContent = "×";

                    hamburgerBtn.setAttribute(
                        "aria-label",
                        "Close menu"
                    );

                } else {

                    hamburgerBtn.textContent = "☰";

                    hamburgerBtn.setAttribute(
                        "aria-label",
                        "Open menu"
                    );

                }

            }
        );


        // Close menu when link is clicked

        navMenu.querySelectorAll("a").forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navMenu.classList.remove(
                            "mobile-menu-open"
                        );


                        hamburgerBtn.textContent =
                            "☰";


                        hamburgerBtn.setAttribute(
                            "aria-label",
                            "Open menu"
                        );

                    }
                );

            }
        );

    }


    // =========================================================
    // 16. FINAL MESSAGE
    // =========================================================

    console.log(
        "StudentHub website loaded successfully."
    );

});