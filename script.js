const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spin-btn");
const popup = document.getElementById("result-popup");
const closeBtn = document.getElementById("close-btn");
const wishText = document.getElementById("wish-text");
const fwSound = document.getElementById("firework-sound");

const wishes = [
"Chúc năm mới an khang, tâm sáng – trí vững – đường dài thênh thang, việc gì cũng hanh thông",
"Năm mới chúc gia đình luôn bình an, nhà cửa ấm êm, tài lộc gõ cửa mỗi ngày",
"Chúc một năm đủ sức khỏe để sống trọn, đủ bình an để an lòng và đủ thành công để tự hào",
"Mong năm mới mang đến nhiều cơ hội mới, quyết định đúng đắn và những bước tiến vững vàng",
"Chúc mọi dự định ấp ủ đều nảy mầm, mọi cố gắng đều được đền đáp xứng đáng",
"Năm mới vạn sự như ý, tâm thế an nhiên, sự nghiệp thăng hoa, gia đạo thuận hòa",
"Chúc mỗi ngày trong năm đều có niềm vui nhỏ, may mắn lớn và những người tử tế bên cạnh",
"Mong năm mới nhẹ lòng với chuyện cũ, mạnh mẽ cho chặng đường mới và rực rỡ theo cách riêng của bạn",
"Chúc khởi đầu thuận lợi, giữa năm rực rỡ, cuối năm viên mãn",
"Năm mới kính chúc sức khỏe dồi dào, tinh thần vững vàng, tiền vào như nước và cuộc sống ngày càng thăng hoa"
];

const colors = ["#b30000", "#d4af37", "#b30000", "#d4af37", "#b30000", "#d4af37", "#b30000", "#d4af37", "#b30000", "#d4af37"];
let currentRotation = 0;
let isSpinning = false;

function drawWheel() {
const sliceAngle = (2 * Math.PI) / 10;
ctx.clearRect(0, 0, 500, 500);
for (let i = 0; i < 10; i++) {
ctx.beginPath();
ctx.fillStyle = colors[i];
ctx.moveTo(250, 250);
ctx.arc(250, 250, 250, i * sliceAngle, (i + 1) * sliceAngle);
ctx.fill();
ctx.strokeStyle = "#ffcc00";
ctx.lineWidth = 2;
ctx.stroke();
ctx.save();
ctx.translate(250, 250);
ctx.rotate(i * sliceAngle + sliceAngle / 2);
ctx.fillStyle = colors[i] === "#d4af37" ? "#800000" : "#ffffff";
ctx.font = "bold 38px Arial";
ctx.textAlign = "center";
ctx.fillText(i + 1, 180, 15);
ctx.restore();
}
}

spinBtn.onclick = () => {
if (isSpinning) return;
isSpinning = true;
const randomSpin = Math.floor(Math.random() * 3600) + 2500;
currentRotation += randomSpin;
canvas.style.transition = "transform 4s cubic-bezier(0.15, 0, 0.15, 1)";
canvas.style.transform = rotate(${currentRotation}deg);
setTimeout(() => {
const actualDeg = currentRotation % 360;
let index = Math.floor(((360 - actualDeg + 270) % 360) / 36);
wishText.innerText = wishes[index];
popup.classList.remove("hidden");
fwSound.play().catch(e => console.log("Cần click"));
isSpinning = false;
}, 4000);
};

closeBtn.onclick = () => {
popup.classList.add("hidden");
fwSound.pause();
};

drawWheel();
