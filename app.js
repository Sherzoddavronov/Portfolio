particlesJS("particles-js", {
    "particles": {
        "number": { "value": 100 },
        "size": { "value": 3 },
        "move": { 
            "speed": 2, 
            "attract": { 
                "enable": true, 
                "rotateX": 600, 
                "rotateY": 1200 
            } 
        },
        "line_linked": { "enable": true, "color": "#00fff7" },
        "color": { "value": "#ffffff" }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        },
        "modes": {
            "grab": {
                "distance": 200,
                "line_linked": { "opacity": 1 }
            },
            "push": { "particles_nb": 4 }
        }
    }
});


const words = ["Web Developer", "Web designer ", "Logo designer"];
let wordIndex = 0;
let textElement = document.querySelector(".typing-text span");

function changeText() {
    textElement.textContent = words[wordIndex];
    wordIndex = (wordIndex + 1) % words.length;
}

setInterval(changeText, 2000);
