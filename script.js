/* =========================================================
   RED ASCEND — INTERACTIONS
   ========================================================= */

const buttons = document.querySelectorAll(
    ".links > a, .special-button, .project-card"
);


/* =========================================================
   CURSOR LIGHT + PREMIUM TILT
   ========================================================= */

buttons.forEach((button) => {

    button.addEventListener("mousemove", (event) => {

        const rect = button.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 2.2;
        const rotateX = ((centerY - y) / centerY) * 2.2;

        button.style.setProperty("--mouse-x", `${x}px`);
        button.style.setProperty("--mouse-y", `${y}px`);

        /* OUR PROJECT a sa propre animation */
        if (button.classList.contains("project-card")) {

            if (button.classList.contains("open")) {
                button.style.transform = `
                    translateY(-3px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                `;
            } else {
                button.style.transform = `
                    translateY(-5px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                `;
            }

            return;
        }

        button.style.transform = `
            translateY(-5px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;
    });


    button.addEventListener("mouseleave", () => {

        button.style.removeProperty("--mouse-x");
        button.style.removeProperty("--mouse-y");

        if (button.classList.contains("project-card")) {

            if (button.classList.contains("open")) {
                button.style.transform = "translateY(-3px)";
            } else {
                button.style.transform = "";
            }

            return;
        }

        button.style.transform = "";
    });
});


/* =========================================================
   OUR PROJECT — OPEN / CLOSE
   ========================================================= */

const projectCard = document.getElementById("projectCard");

if (projectCard) {

    projectCard.addEventListener("click", function () {

        this.classList.toggle("open");

        /*
         * On remet l'inclinaison à zéro au clic
         * pour que l'ouverture reste propre.
         */
        this.style.transform = this.classList.contains("open")
            ? "translateY(-3px)"
            : "";
    });
}