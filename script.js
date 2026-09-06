console.log("RED ASCEND loaded");

const buttons = document.querySelectorAll(".links a");

buttons.forEach((button) => {

    button.addEventListener("mousemove", (event) => {

        const rect = button.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -3;
        const rotateY = ((x / rect.width) - 0.5) * 3;

        button.style.transform =
            `translateY(-5px) scale(1.015) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translateY(0) scale(1) rotateX(0) rotateY(0)";
    });
    })
    
    fetch("/visitor");