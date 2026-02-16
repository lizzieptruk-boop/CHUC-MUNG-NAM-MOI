const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
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

function draw() {
const angle = (2 * Math.PI) / 10;
for (let i = 0; i < 10; i++) {
ctx.beginPath();
ctx.fillStyle = colors[i];
ctx.moveTo(250, 250);
ctx.arc(250, 250, 250, i * angle, (i + 1) * angle);
ctx.fill();
ctx.save();
ctx.translate(250, 250);
ctx.rotate(i * angle + angle / 2);
ctx.fillStyle = colors[i] === "#d4af37" ? "#800000" : "#fff";
ctx.font = "bold 40px Arial";
ctx.fillText(i + 1, 180, 15);
ctx.restore();
}
}

document.getElementById("spin-btn").onclick = function() {
const spin = Math.floor(Math.random() * 3600) + 3000;
currentRotation += spin;
canvas.style.transition = "transform 4s cubic-bezier(0.1, 0, 0.1, 1)";
canvas.style.transform = rotate(${currentRotation}deg);

};

document.getElementById("close-btn").onclick = () => document.getElementById("result-popup").classList.add("hidden");

draw();
