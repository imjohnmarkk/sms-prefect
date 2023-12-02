const text = "This is a typing animation example.";

let index = 0;
function type() {
    document.getElementById('typing-text').textContent = text.slice(0, index);
    index++;
    if (index > text.length) {
        index = 0;
    }
}

setInterval(type, 120);
