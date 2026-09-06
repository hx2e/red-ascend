console.log("RED ASCEND loaded");

const buttons = document.querySelectorAll(".links a");

/* ================================
   PREMIUM SMOOTH 3D GLASS
================================ */

buttons.forEach((button) => {

    button.addEventListener("mousemove", (event) => {

        const rect = button.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY =
            ((x - centerX) / centerX) * 2.5;

        const rotateX =
            ((centerY - y) / centerY) * 2.5;

        button.style.transform = `
            translateY(-6px)
            scale(1.018)
            perspective(700px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;

        /* Lumière qui suit la souris */

        const lightX =
            (x / rect.width) * 100;

        const lightY =
            (y / rect.height) * 100;

        button.style.background = `
            radial-gradient(
                circle at ${lightX}% ${lightY}%,
                rgba(255,255,255,0.13),
                rgba(255,0,0,0.055) 35%,
                rgba(255,255,255,0.018) 75%
            )
        `;
    });


    button.addEventListener("mouseleave", () => {

        button.style.transform = `
            translateY(0)
            scale(1)
            perspective(700px)
            rotateX(0deg)
            rotateY(0deg)
        `;

        button.style.background = `
            linear-gradient(
                120deg,
                rgba(255,255,255,.065),
                rgba(255,0,0,.045),
                rgba(255,255,255,.018)
            )
        `;
    });

});


/* ================================
   COPY WEBSITE URL
================================ */

const siteUrl = document.querySelector(".site-url");

if (siteUrl) {

    siteUrl.style.cursor = "pointer";

    siteUrl.addEventListener("click", async () => {

        try {

            await navigator.clipboard.writeText(
                siteUrl.textContent
            );

            const original =
                siteUrl.textContent;

            siteUrl.textContent =
                "COPIED TO CLIPBOARD";

            setTimeout(() => {

                siteUrl.textContent =
                    original;

            }, 1400);

        } catch (error) {

            console.log(
                "Copy unavailable"
            );
        }
    });
}


/* ================================
   VISITOR NOTIFICATION
================================ */

fetch("/visitor")
    .then(() => {

        console.log(
            "Visitor notification sent"
        );

    })
    .catch(() => {

        console.log(
            "Visitor notification unavailable"
        );

    });