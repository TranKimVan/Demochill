const quotes = [
    "Hôm nay trời đẹp lắm đó nha! 🌈",
    "Cậu là một người rất đặc biệt đấy! ✨",
    "Cố lên! Cậu đang làm rất tốt! 💪",
    "Nụ cười của cậu đẹp lắm đó! 😆",
    "Chúc một ngày thật tuyệt vời! 🌸",
    "Mèo nói: 'Hãy ăn một chút gì đó ngon lành nhé!' 🐱"
];

document.getElementById("cat").addEventListener("click", function() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").textContent = "💬 " + randomQuote;
});
