const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spin-btn");
const wishText = document.getElementById("wish-text");
const popup = document.getElementById("result-popup");

const wishes = [
    "Vạn sự như ý - Tỷ sự như mơ!",
    "Sức khỏe dồi dào - Tiền vào như nước!",
    "Phát tài phát lộc - Công danh rạng ngời!",
    "An khang thịnh vượng - Gia đình hạnh phúc!",
    "Học hành tấn tới - Thi cử đỗ cao!",
    "Tình duyên phơi phới - Sớm có người yêu!",
    "Tiền ra nhỏ giọt - Tiền vào ào ào!",
    "Năm mới bình an - Cả nhà sung túc!",
    "Mọi việc hanh thông - Vạn điều may mắn!",
    "Trẻ mãi không già - Cả nhà đều quý!"
];

const colors = ["#ff4d4d", "#ffcc00", "#ff4d4d", "#ffcc00", "#ff4d4d", "#ffcc00", "#ff4d4d", "#ffcc00", "#ff4d4d", "#ffcc00"];
let currentRotation = 0;

// Vẽ vòng quay
function drawWheel() {
    const sliceAngle = (2 * Math.PI) / 10;
    for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.fillStyle = colors[i];
        ctx.moveTo(250, 250);
        ctx.arc(250, 250, 250, i * sliceAngle, (i + 1) * sliceAngle);
        ctx.fill();
        ctx.stroke();

        // Vẽ số từ 1 - 10
        ctx.save();
        ctx.translate(250, 250);
        ctx.rotate(i * sliceAngle + sliceAngle / 2);
        ctx.fillStyle = "#fff";
        ctx.font = "bold 30px Arial";
        ctx.fillText(i + 1, 150, 10);
        ctx.restore();
    }
}

spinBtn.onclick = () => {
    const randomSpin = Math.floor(Math.random() * 3600) + 1800; // Quay ít nhất 5 vòng
    currentRotation += randomSpin;
    canvas.style.transition = "transform 4s cubic-bezier(0.17, 0.67, 0.83, 0.67)";
    canvas.style.transform = `rotate(${currentRotation}deg)`;

    setTimeout(() => {
        const actualDeg = currentRotation % 360;
        const index = 9 - Math.floor(actualDeg / 36); // Tính toán index dựa trên độ xoay
        wishText.innerText = wishes[index];
        popup.classList.remove("hidden");
    }, 4000);
};

function closePopup() {
    popup.classList.add("hidden");
}

drawWheel();