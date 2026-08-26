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
    document.getElementById("currentYear");

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
    // 16. REGISTRATION FORM - 9 FIELD VALIDATION
    // Added only for register.html. Existing JavaScript above
    // remains unchanged.
    // =========================================================

    const registrationForm =
        document.getElementById("registrationForm");

    if (registrationForm) {

        const registerName =
            document.getElementById("fullName");

        const registerEmail =
            document.getElementById("email");

        const registerMobile =
            document.getElementById("mobile");

        const registerPassword =
            document.getElementById("password");

        const registerConfirmPassword =
            document.getElementById("confirmPassword");

        const registerCourse =
            document.getElementById("course");

        const registerYear =
            document.getElementById("year");

        const registerTerms =
            document.getElementById("terms");

        const registerStrengthFill =
            document.getElementById("registerStrengthFill");

        const registerStrengthText =
            document.getElementById("registerStrengthText");


        const nameError =
            document.getElementById("registerNameError");

        const emailError =
            document.getElementById("registerEmailError");

        const mobileError =
            document.getElementById("registerMobileError");

        const passwordError =
            document.getElementById("registerPasswordError");

        const confirmPasswordError =
            document.getElementById("registerConfirmPasswordError");

        const courseError =
            document.getElementById("registerCourseError");

        const yearError =
            document.getElementById("registerYearError");

        const genderError =
            document.getElementById("registerGenderError");

        const termsError =
            document.getElementById("registerTermsError");


        const namePattern =
            /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const mobilePattern =
            /^[6-9][0-9]{9}$/;

        const lowerPattern =
            /[a-z]/;

        const upperPattern =
            /[A-Z]/;

        const numberPattern =
            /[0-9]/;

        const specialPattern =
            /[@$!%*?&]/;


        function showRegisterError(field, errorBox, message) {

            if (field) {
                field.classList.add("register-invalid");
                field.classList.remove("register-valid");
            }

            if (errorBox) {
                errorBox.textContent = message;
                errorBox.classList.add("show");
            }
        }


        function clearRegisterError(field, errorBox) {

            if (field) {
                field.classList.remove("register-invalid");
            }

            if (errorBox) {
                errorBox.textContent = "";
                errorBox.classList.remove("show");
            }
        }


        function markRegisterValid(field) {

            if (field) {
                field.classList.remove("register-invalid");
                field.classList.add("register-valid");
            }
        }


        // ---------------------------------------------------------
        // 1. FULL NAME
        // ---------------------------------------------------------

        function validateRegisterName() {

            const value = registerName.value.trim();

            if (value === "") {
                showRegisterError(
                    registerName,
                    nameError,
                    "Please enter your full name."
                );
                return false;
            }

            if (!namePattern.test(value)) {
                showRegisterError(
                    registerName,
                    nameError,
                    "Full Name can contain letters and spaces only."
                );
                return false;
            }

            clearRegisterError(registerName, nameError);
            markRegisterValid(registerName);
            return true;
        }


        // ---------------------------------------------------------
        // 2. EMAIL ADDRESS
        // ---------------------------------------------------------

        function validateRegisterEmail() {

            const value = registerEmail.value.trim();

            if (value === "") {
                showRegisterError(
                    registerEmail,
                    emailError,
                    "Please enter your email address."
                );
                return false;
            }

            if (!emailPattern.test(value)) {
                showRegisterError(
                    registerEmail,
                    emailError,
                    "Please enter a valid email address."
                );
                return false;
            }

            clearRegisterError(registerEmail, emailError);
            markRegisterValid(registerEmail);
            return true;
        }


        // ---------------------------------------------------------
        // 3. INDIAN MOBILE NUMBER
        // ---------------------------------------------------------

        function validateRegisterMobile() {

            const value = registerMobile.value.trim();

            if (value === "") {
                showRegisterError(
                    registerMobile,
                    mobileError,
                    "Please enter your mobile number."
                );
                return false;
            }

            if (!mobilePattern.test(value)) {
                showRegisterError(
                    registerMobile,
                    mobileError,
                    "Enter a valid 10-digit mobile number starting with 6–9."
                );
                return false;
            }

            clearRegisterError(registerMobile, mobileError);
            markRegisterValid(registerMobile);
            return true;
        }


        // ---------------------------------------------------------
        // 4. PASSWORD + STRENGTH
        // ---------------------------------------------------------

        function updateRegisterPasswordStrength() {

            const value = registerPassword.value;
            let strength = 0;

            if (value.length >= 8) {
                strength++;
            }

            if (lowerPattern.test(value)) {
                strength++;
            }

            if (upperPattern.test(value)) {
                strength++;
            }

            if (numberPattern.test(value)) {
                strength++;
            }

            if (specialPattern.test(value)) {
                strength++;
            }

            if (!registerStrengthFill || !registerStrengthText) {
                return;
            }

            if (value === "") {
                registerStrengthFill.style.width = "0%";
                registerStrengthText.textContent = "Not started";
                return;
            }

            if (strength <= 2) {
                registerStrengthFill.style.width = "40%";
                registerStrengthText.textContent = "Weak";
            } else if (strength <= 4) {
                registerStrengthFill.style.width = "70%";
                registerStrengthText.textContent = "Medium";
            } else {
                registerStrengthFill.style.width = "100%";
                registerStrengthText.textContent = "Strong";
            }
        }


        function validateRegisterPassword() {

            const value = registerPassword.value;

            if (value === "") {
                showRegisterError(
                    registerPassword,
                    passwordError,
                    "Please enter a password."
                );
                return false;
            }

            if (value.length < 8) {
                showRegisterError(
                    registerPassword,
                    passwordError,
                    "Password must contain at least 8 characters."
                );
                return false;
            }

            if (!lowerPattern.test(value)) {
                showRegisterError(
                    registerPassword,
                    passwordError,
                    "Password must contain at least one lowercase letter."
                );
                return false;
            }

            if (!upperPattern.test(value)) {
                showRegisterError(
                    registerPassword,
                    passwordError,
                    "Password must contain at least one uppercase letter."
                );
                return false;
            }

            if (!numberPattern.test(value)) {
                showRegisterError(
                    registerPassword,
                    passwordError,
                    "Password must contain at least one number."
                );
                return false;
            }

            if (!specialPattern.test(value)) {
                showRegisterError(
                    registerPassword,
                    passwordError,
                    "Password must contain at least one special character (@ $ ! % * ? &)."
                );
                return false;
            }

            clearRegisterError(registerPassword, passwordError);
            markRegisterValid(registerPassword);
            return true;
        }


        // ---------------------------------------------------------
        // 5. CONFIRM PASSWORD
        // ---------------------------------------------------------

        function validateRegisterConfirmPassword() {

            const value = registerConfirmPassword.value;

            if (value === "") {
                showRegisterError(
                    registerConfirmPassword,
                    confirmPasswordError,
                    "Please confirm your password."
                );
                return false;
            }

            if (value !== registerPassword.value) {
                showRegisterError(
                    registerConfirmPassword,
                    confirmPasswordError,
                    "Passwords do not match."
                );
                return false;
            }

            clearRegisterError(
                registerConfirmPassword,
                confirmPasswordError
            );
            markRegisterValid(registerConfirmPassword);
            return true;
        }


        // ---------------------------------------------------------
        // 6. COURSE
        // ---------------------------------------------------------

        function validateRegisterCourse() {

            if (registerCourse.value === "") {
                showRegisterError(
                    registerCourse,
                    courseError,
                    "Please select your course."
                );
                return false;
            }

            clearRegisterError(registerCourse, courseError);
            markRegisterValid(registerCourse);
            return true;
        }


        // ---------------------------------------------------------
        // 7. YEAR
        // ---------------------------------------------------------

        function validateRegisterYear() {

            if (registerYear.value === "") {
                showRegisterError(
                    registerYear,
                    yearError,
                    "Please select your academic year."
                );
                return false;
            }

            clearRegisterError(registerYear, yearError);
            markRegisterValid(registerYear);
            return true;
        }


        // ---------------------------------------------------------
        // 8. GENDER
        // ---------------------------------------------------------

        function validateRegisterGender() {

            const selectedGender =
                document.querySelector(
                    'input[name="gender"]:checked'
                );

            if (!selectedGender) {
                if (genderError) {
                    genderError.textContent =
                        "Please select your gender.";
                    genderError.classList.add("show");
                }
                return false;
            }

            if (genderError) {
                genderError.textContent = "";
                genderError.classList.remove("show");
            }

            return true;
        }


        // ---------------------------------------------------------
        // 9. TERMS & CONDITIONS
        // ---------------------------------------------------------

        function validateRegisterTerms() {

            if (!registerTerms.checked) {
                if (termsError) {
                    termsError.textContent =
                        "Please accept the Terms & Conditions.";
                    termsError.classList.add("show");
                }
                return false;
            }

            if (termsError) {
                termsError.textContent = "";
                termsError.classList.remove("show");
            }

            return true;
        }


        // ---------------------------------------------------------
        // REAL-TIME VALIDATION
        // ---------------------------------------------------------

        registerName.addEventListener(
            "input",
            validateRegisterName
        );

        registerEmail.addEventListener(
            "input",
            validateRegisterEmail
        );

        registerMobile.addEventListener(
            "input",
            function () {

                registerMobile.value =
                    registerMobile.value.replace(
                        /[^0-9]/g,
                        ""
                    );

                validateRegisterMobile();
            }
        );

        registerPassword.addEventListener(
            "input",
            function () {

                updateRegisterPasswordStrength();
                validateRegisterPassword();

                if (registerConfirmPassword.value !== "") {
                    validateRegisterConfirmPassword();
                }
            }
        );

        registerConfirmPassword.addEventListener(
            "input",
            validateRegisterConfirmPassword
        );

        registerCourse.addEventListener(
            "change",
            validateRegisterCourse
        );

        registerYear.addEventListener(
            "change",
            validateRegisterYear
        );

        document
            .querySelectorAll('input[name="gender"]')
            .forEach(function (radio) {

                radio.addEventListener(
                    "change",
                    validateRegisterGender
                );
            });

        registerTerms.addEventListener(
            "change",
            validateRegisterTerms
        );


        // ---------------------------------------------------------
        // REGISTER BUTTON
        // ---------------------------------------------------------

        registrationForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const validName =
                    validateRegisterName();

                const validEmail =
                    validateRegisterEmail();

                const validMobile =
                    validateRegisterMobile();

                const validPassword =
                    validateRegisterPassword();

                const validConfirmPassword =
                    validateRegisterConfirmPassword();

                const validCourse =
                    validateRegisterCourse();

                const validYear =
                    validateRegisterYear();

                const validGender =
                    validateRegisterGender();

                const validTerms =
                    validateRegisterTerms();

                const isValid =
                    validName &&
                    validEmail &&
                    validMobile &&
                    validPassword &&
                    validConfirmPassword &&
                    validCourse &&
                    validYear &&
                    validGender &&
                    validTerms;


                if (isValid) {

                    alert(
                        "Registration successful! Welcome to StudentHub."
                    );

                    registrationForm.reset();

                    [
                        [registerName, nameError],
                        [registerEmail, emailError],
                        [registerMobile, mobileError],
                        [registerPassword, passwordError],
                        [registerConfirmPassword, confirmPasswordError],
                        [registerCourse, courseError],
                        [registerYear, yearError]
                    ].forEach(function (item) {
                        clearRegisterError(item[0], item[1]);
                    });

                    if (genderError) {
                        genderError.textContent = "";
                        genderError.classList.remove("show");
                    }

                    if (termsError) {
                        termsError.textContent = "";
                        termsError.classList.remove("show");
                    }

                    updateRegisterPasswordStrength();

                } else {

                    const firstError =
                        registrationForm.querySelector(
                            ".register-validation-error.show"
                        );

                    if (firstError) {
                        firstError.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });
                    }
                }
            }
        );
    }


    // =========================================================
    // 17. FINAL MESSAGE
    // =========================================================

    console.log(
        "StudentHub website loaded successfully."
    );

});