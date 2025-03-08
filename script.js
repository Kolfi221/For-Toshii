// Hiển thị lời chúc phụ sau 2 giây và đẩy nó xuống nhẹ nhàng
setTimeout(() => {
    const subText = document.getElementById("sub-text");
    subText.style.opacity = "1";
    subText.style.top = "100%"; // Đưa xuống một chút để không bị che
}, 2000);

function checkOrientation() {
    const message = document.getElementById("rotate-message");
    
    // Kiểm tra đúng chế độ dọc hay ngang
    if (screen.orientation.type.includes("landscape")) {
        message.style.display = "block"; // Nếu đang xoay ngang, hiển thị thông báo
    } else {
        message.style.display = "none"; // Nếu xoay dọc đúng, ẩn thông báo
    }
}

// Kiểm tra khi tải trang
checkOrientation();

// Kiểm tra mỗi khi thay đổi hướng màn hình
window.addEventListener("orientationchange", checkOrientation);

const video = document.getElementById("background-video");
const muteButton = document.getElementById("mute-button");
const volumeUp = document.getElementById("volume-up");
const volumeDown = document.getElementById("volume-down");

// Nút bật/tắt tiếng
muteButton.addEventListener("click", function () {
    if (video.muted) {
        video.muted = false;
        muteButton.textContent = "🔊 Tắt âm";
    } else {
        video.muted = true;
        muteButton.textContent = "🔇 Bật âm";
    }
});

// Nút tăng âm lượng
volumeUp.addEventListener("click", function () {
    if (video.volume < 1) {
        video.volume = Math.min(video.volume + 0.1, 1);
    }
});

// Nút giảm âm lượng
volumeDown.addEventListener("click", function () {
    if (video.volume > 0) {
        video.volume = Math.max(video.volume - 0.1, 0);
    }
});