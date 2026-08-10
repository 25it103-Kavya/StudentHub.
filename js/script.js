```javascript
document.addEventListener("DOMContentLoaded", function () {

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

    const sliderDots =
        document.querySelectorAll(".slider-dot");

    let currentImage = 0;


    // =========================================================
    // SHOW IMAGE
    // =========================================================

    function showImage(index) {

        if (!sliderImage) {
            return;
        }

        sliderImage.src = sliderImages[index];

        sliderImage.alt = sliderAltText[index];


        // Update dots

        sliderDots.forEach(function (dot, i) {

            if (i === index) {

                dot.classList.add("active");

            } else {

                dot.classList.remove("active");

            }

        });

    }


    // =========================================================
    // PREVIOUS
    // =========================================================

    if (prevBtn) {

        prevBtn.addEventListener("click", function () {

            currentImage--;

            if (currentImage < 0) {

                currentImage =
                    sliderImages.length - 1;

            }

            showImage(currentImage);

        });

    }


    // =========================================================
    // NEXT
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

            currentImage = slide;

            showImage(currentImage);

        });

    });


    // Show first image

    showImage(currentImage);


    // =========================================================
    // CONSOLE INFORMATION
    // =========================================================

    console.log("Welcome to StudentHub");
    console.log("Practical 4");

    let studentName = "Kavya";
    let course = "Information Technology";

    console.log(studentName);
    console.log(course);


    // =========================================================
    // DATA TYPES
    // =========================================================

    let college = "CHARUSAT";
    let year = 2026;

    console.log(college);
    console.log(year);


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

        headingButton.addEventListener(
            "click",
            function () {

                heading.innerHTML =
                    "Welcome to StudentHub";

            }
        );

    }


    // =========================================================
    // CLOSE ALERT
    // =========================================================

    const closeAlert =
        document.getElementById("closeAlert");

    const alertBox =
        document.querySelector(".alert");


    if (closeAlert && alertBox) {

        closeAlert.addEventListener(
            "click",
            function () {

                alertBox.style.display = "none";

            }
        );

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
    // =========================================================

    const darkModeButtons =
        document.querySelectorAll(
            "#darkModeBtn, #themeBtn"
        );


    function applyTheme(theme) {

        document.documentElement.setAttribute(
            "data-theme",
            theme
        );

        localStorage.setItem(
            "theme",
            theme
        );


        darkModeButtons.forEach(function (button) {

            if (theme === "dark") {

                button.innerHTML =
                    "☀️ Light Mode";

            } else {

                button.innerHTML =
                    "🌙 Dark Mode";

            }

        });

    }


    // Load saved theme

    const savedTheme =
        localStorage.getItem("theme") || "light";

    applyTheme(savedTheme);


    // Theme buttons

    darkModeButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const currentTheme =
                    document.documentElement
                        .getAttribute("data-theme");

                const newTheme =
                    currentTheme === "dark"
                        ? "light"
                        : "dark";

                applyTheme(newTheme);

            }
        );

    });


    // =========================================================
    // CARD FILTER
    // =========================================================

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const cards =
        document.querySelectorAll(".card");


    filterButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const filter =
                    button.getAttribute("data-filter");


                filterButtons.forEach(
                    function (btn) {

                        btn.classList.remove("active");

                    }
                );


                button.classList.add("active");


                cards.forEach(function (card) {

                    const category =
                        card.getAttribute("data-category");


                    if (
                        filter === "all" ||
                        category === filter
                    ) {

                        card.style.display = "block";

                    } else {

                        card.style.display = "none";

                    }

                });

            }
        );

    });


    // =========================================================
    // EVENT REGISTRATION
    // =========================================================

    const eventButtons =
        document.querySelectorAll(".event-register");


    eventButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const eventName =
                    button.getAttribute("data-event");

                alert(
                    "Successfully registered for " +
                    eventName +
                    "!"
                );

            }
        );

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

                const email =
                    document.getElementById(
                        "loginEmail"
                    ).value.trim();

                const password =
                    document.getElementById(
                        "loginPassword"
                    ).value;


                if (
                    email === "" ||
                    password === ""
                ) {

                    alert(
                        "Please enter your email and password."
                    );

                    return;

                }


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
```
