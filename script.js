const whatsappBtn = document.getElementById('whatsappBtn');
const counterText = document.getElementById('counter');
const completeMsg = document.getElementById('completeMsg');

let shareCount = localStorage.getItem("shareCount") || 0;
shareCount = parseInt(shareCount);
counterText.textContent = `Click Count: ${shareCount}/5`;

if (shareCount >= 5) {
  completeMsg.textContent = "Sharing complete. Please continue.";
  whatsappBtn.disabled = true;
}

whatsappBtn.addEventListener('click', () => {
  if (shareCount < 5) {
    const message = "Hey Buddy, Join Tech For Girls Community!";
    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMsg}`, "_blank");

    shareCount++;
    localStorage.setItem("shareCount", shareCount);
    counterText.textContent = `Click Count: ${shareCount}/5`;

    if (shareCount >= 5) {
      completeMsg.textContent = "Sharing complete. Please continue.";
      whatsappBtn.disabled = true;
    }
  }
});
