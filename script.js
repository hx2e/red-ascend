console.log("RED ASCEND loaded");

const buttons = document.querySelectorAll(".links a");

buttons.forEach((button) => {

    button.addEventListener("mousemove", (e) => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((centerY - y) / centerY) * 3;

        const rotateY =
            ((x - centerX) / centerX) * 3;

        button.style.transform = `
            perspective(900px)
            translateY(-6px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.015)
        `;

        button.style.setProperty("--mouse-x", `${x}px`);
        button.style.setProperty("--mouse-y", `${y}px`);
    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = `
            perspective(900px)
            translateY(0)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;

    });

});

/* COPY WEBSITE URL */

const siteUrl = document.querySelector(".site-url");

if (siteUrl) {

    siteUrl.addEventListener("click", async () => {

        try {

            await navigator.clipboard.writeText(
                siteUrl.textContent
            );

            const oldText = siteUrl.textContent;

            siteUrl.textContent = "COPIED";

            setTimeout(() => {
                siteUrl.textContent = oldText;
            }, 1200);

        } catch (error) {

            console.log("Copy unavailable");

        }

    });

}

/* VISITOR */

fetch("/visitor")
    .then(() => console.log("Visitor notification sent"))
    .catch(() => console.log("Visitor notification unavailable"));