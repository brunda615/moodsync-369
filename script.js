const moods = {
    joy: {
        title: "Joy 😄",
        quote: "Golden light fills your universe.",
        gradient: "linear-gradient(-45deg, #C9A000, #CC8400)"
    },
    sadness: {
        title: "Sadness 😢",
        quote: "Even the sky cries before it clears.",
        gradient: "linear-gradient(-45deg, #1560BD, #5DADE2)"
    },
    anger: {
        title: "Anger 😡",
        quote: "When anger rises, think of the consequences.",
        gradient: "linear-gradient(-45deg, #B22222, #CC5500)"
    },
    fear: {
        title: "Fear 😨",
        quote: "Courage begins where comfort ends.",
        gradient: "linear-gradient(-45deg, #5D3A9B, #6A0DAD)"
    },
    disgust: {
        title: "Disgust 🤢",
        quote: "Disgust is clarity in disguise.",
        gradient: "linear-gradient(-45deg, #006400, #228B22)"
    },
    envy: {
        title: "Envy 😏",
        quote: "I don't chase, I upgrade.",
        gradient: "linear-gradient(-45deg, #1B8F2F, #2E8B57)"
    },
    embarrassment: {
        title: "Embarrassment 😳",
        quote: "It's only embarrassing if you replay it 47 times.",
        gradient: "linear-gradient(-45deg, #C71585, #B03060)"
    },
    anxiety: {
        title: "Anxiety 😰",
        quote: "Not everything needs solving tonight.",
        gradient: "linear-gradient(-45deg, #CC6600, #CD5B45)"
    }
};

const moodButtons = document.querySelectorAll(".mood");
const moodTitle = document.getElementById("moodTitle");
const moodQuote = document.getElementById("moodQuote");
const resetBtn = document.getElementById("resetBtn");

moodButtons.forEach(button => {
    button.addEventListener("click", () => {
        const mood = button.dataset.mood;
        applyMood(mood);
        localStorage.setItem("selectedMood", mood);
    });
});

function applyMood(mood) {
    document.body.style.background = moods[mood].gradient;

    document.querySelector(".stars").style.display = "none";
    document.querySelector(".twinkling").style.display = "none";

    document.body.classList.add("dark-text");

    moodTitle.textContent = moods[mood].title;
    moodQuote.textContent = moods[mood].quote;

    document.querySelector(".output").style.transform = "scale(1.05)";
    setTimeout(() => {
        document.querySelector(".output").style.transform = "scale(1)";
    }, 300);
}

resetBtn.addEventListener("click", () => {
    localStorage.removeItem("selectedMood");
    document.body.classList.remove("dark-text");
    location.reload();
});

window.onload = () => {
    const savedMood = localStorage.getItem("selectedMood");
    if (savedMood) applyMood(savedMood);
};
