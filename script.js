// Quotes ngẫu nhiên
const quotes = [
    "Hôm nay trời đẹp lắm đó nha! 🌈",
    "Cậu là một người rất đặc biệt đấy! ✨",
    "Cố lên! Cậu đang làm rất tốt! 💪",
    "Nụ cười của cậu đẹp lắm đó! 😆",
    "Chúc một ngày thật tuyệt vời! 🌸",
    "🌞 Hãy nhớ rằng, mỗi ngày là một cơ hội mới để tỏa sáng! ✨",
    "💖 Cậu là một người tuyệt vời! Đừng để ai làm mờ đi ánh sáng của cậu.",
    "💪 Cố gắng thêm chút nữa, rồi cậu sẽ thấy kết quả xứng đáng!",
    "🌸 Hãy tin vào bản thân, vì cậu mạnh mẽ hơn cậu nghĩ nhiều!",
    "🌈 Sau cơn mưa, trời sẽ lại sáng! Cố lên nào!",
    "🔥 Đừng ngại thất bại, vì đó là cách ta học hỏi và trưởng thành.",
    "💫 Cậu đang làm rất tốt rồi! Đừng quên tự thưởng cho bản thân nhé!",
    "🍀 Thành công không phải là đích đến, mà là hành trình cậu đi qua.",
    "❤️ Cậu không cô đơn đâu, luôn có người yêu thương và ủng hộ cậu!",
    "🌙 Khi thấy mệt mỏi, hãy hít một hơi thật sâu và thư giãn nhé.",
    "🌟 Mọi chuyện rồi sẽ ổn thôi, chỉ cần cậu đừng bỏ cuộc!",
    "✨ Đừng quên cười thật tươi, vì nụ cười cậu đẹp lắm đó!",
    "🎯 Đừng so sánh bản thân với ai cả, hãy chỉ cố gắng hơn phiên bản hôm qua của chính mình."
];

document.getElementById("cat").addEventListener("click", function() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").textContent = "💬 " + randomQuote;
});

// Hiệu ứng trái tim khi click chuột
document.addEventListener("click", function(event) {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = `${event.clientX}px`;
    heart.style.top = `${event.clientY}px`;
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
});

// Bật/Tắt nhạc nền
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.textContent = "🔇 Tắt Nhạc";
    } else {
        music.pause();
        musicBtn.textContent = "🎵 Bật Nhạc";
    }
});
    const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 100; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speed: Math.random() * 0.5
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
    });
    requestAnimationFrame(drawStars);
}
drawStars();
