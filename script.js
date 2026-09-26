const dots = [];
const dotBackground = document.getElementById("dot-background");

const canvas = document.createElement("canvas");
canvas.classList.add("absolute", "inset-0", "w-full", "h-full");
canvas.style.pointerEvents = "none";
dotBackground.appendChild(canvas);

const ctx = canvas.getContext("2d");

let selectedDot = null;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

for (let i = 0; i < 20; i++) {

    const dot = document.createElement("div");

    dot.classList.add(
        "w-2",
        "h-2",
        "rounded-full",
        "bg-fuchsia-400",
        "absolute"
    );

    dot.style.pointerEvents = "auto";
    dot.style.boxShadow = "0 0 10px rgba(232, 121, 249, 0.8)";

    const x = Math.random() < 0.5
        ? Math.random() * 200
        : window.innerWidth - Math.random() * 200;

    const y = Math.random() < 0.5
        ? Math.random() * 200
        : window.innerHeight - Math.random() * 200;

    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;

    dotBackground.appendChild(dot);
    dots.push(dot);

    dot.addEventListener("click", () => {

        if (selectedDot === null) {

            selectedDot = dot;
            dot.style.transform = "scale(1.7)";

        } else {

            const x1 = selectedDot.offsetLeft + 4;
            const y1 = selectedDot.offsetTop + 4;

            const x2 = dot.offsetLeft + 4;
            const y2 = dot.offsetTop + 4;

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = "rgba(232, 121, 249, 0.6)";
            ctx.lineWidth = 1.5;
            ctx.stroke();

            selectedDot.style.transform = "scale(1)";
            selectedDot = null;
        }
    });
}