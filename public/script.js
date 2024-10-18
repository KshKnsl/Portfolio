// Ad removal for visitor counter widget
var adInterval = setInterval(function() {
    var allLinks = document.getElementsByTagName('a');
    for (var i = 0; i < allLinks.length; i++) {
        var href = allLinks[i].getAttribute('href');
        if (href && href.startsWith('https://elfsight.com/visitor-counter-widget/?utm_source=websites&utm_medium=clients&utm_content=visitor-counter')) {
            allLinks[i].style.display = 'none';
        }
    }
}, 100);

setTimeout(function() {
    clearInterval(adInterval);
}, 10000);

// Greeting and speech synthesis
const currentTime = new Date();
const currentHour = currentTime.getHours();
let greeting;
if (currentHour < 12) 
    greeting = "Good morning";
else if (currentHour < 18)
    greeting = "Good afternoon";
else 
    greeting = "Good evening";
const textToSpeak = `${greeting} Welcome to my digital domain, where innovation meets execution and code meets creativity.`;
window.speechSynthesis.speak(new SpeechSynthesisUtterance(textToSpeak));    

// Battery level display
navigator.getBattery().then(battery => {
    const batteryText = document.querySelector("#batteryArea p");
    const batteryIcon = document.querySelector("#batteryArea img");
    
    if (batteryText && batteryIcon) {
        setInterval(() => {        
            batteryText.textContent = Math.floor(battery.level * 100) + "%";
            batteryIcon.style.display = battery.charging ? "block" : "none";
        }, 1000);
    }
});

// Notification
Notification.requestPermission().then(permission => {
    new Notification(`${greeting} Welcome to my digital domain, where innovation meets execution and code meets creativity.`);
});

// Hamburger menu
const menuBtn = document.querySelector(".hamburgerMenu");
if (menuBtn) {
    menuBtn.addEventListener("click", function() {
        const svg = menuBtn.querySelector("img");
        if (svg) {
            svg.src = svg.src.includes("hamburger") ? "SVGs/exit.svg" : "SVGs/hamburger.svg";
        }
    });
}

// Tech stack hover effect
const images = document.querySelectorAll('.TechStacks div');
const overlay = document.getElementById('overlayer');
images.forEach(image => {
    image.addEventListener('mouseenter', () => {
        if (overlay) overlay.style.display = 'block';
        image.style.zIndex = "10";
    });
    
    image.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (overlay) overlay.style.display = 'none';    
            image.style.zIndex = "8";
        }, 50);
    });
});

// Dark/Light mode toggle
const mode = document.querySelector("#mode");
function modechanger() {
    const root = document.documentElement;
    const isDarkMode = getComputedStyle(root).getPropertyValue('--text-color').trim() === '#ffffff';
    
    const string = document.querySelector(".string");
    const modeChangerImg = document.querySelector("#modeChangerimg");
    const patterns = document.querySelectorAll('.pattern');
    const invertElements = document.querySelectorAll('.invertme');
    const river = document.querySelector("#river");

    if (isDarkMode) {
        // Switch to light mode
        if (string) string.style.display = "flex";
        if (modeChangerImg) modeChangerImg.src = "/Images/dark.png";
        root.style.setProperty('--text-color', '#000000');
        root.style.setProperty('--text-color2', '#ffffff');
        root.style.setProperty('--text-color3', '#ffffff');
        patterns.forEach(pattern => pattern.style.backgroundImage = 'none');
        invertElements.forEach(el => el.style.filter = 'none');
        if (river) river.src = "none";
    } else {
        // Switch to dark mode
        if (string) string.style.display = "none";
        if (modeChangerImg) modeChangerImg.src = "/Images/light.png";
        root.style.setProperty('--text-color', '#ffffff');
        root.style.setProperty('--text-color2', '#000000');
        root.style.setProperty('--text-color3', 'rgb(0 0 0)');
        patterns.forEach(pattern => pattern.style.backgroundImage = "url('/pattern.png')");
        invertElements.forEach(el => el.style.filter = 'invert(1)');
        if (river) river.src = "Videos/river.mp4";
    }
}

// Hero area text cycling
function heroAreaDesigning() {
    var textArr = ["Student @JIIT-27' 🎓 "," Java Programmer ♨️ ", " Front End Developer 🌱 "," 3⭐@LeetCode ", " Aspiring Open Source Contributor 💻 ", "Explorer🚀"];
    var colorArr = ["#0A6AD6","#FFAF45", "#A34343","#FF204E", "#19A95B", "#2C2C2C"];
    var cursorBlock = document.querySelector(".ExtraCursor");
    var area = document.querySelector("#Home");
    setInterval(() => {
        var random = Math.floor(Math.random() * textArr.length);
        cursorBlock.innerHTML = textArr[random];
        cursorBlock.style.backgroundColor = colorArr[random];
    }, 3000);
    area.addEventListener("click", () => {
        var random = Math.floor(Math.random() * textArr.length);
        cursorBlock.textContent = textArr[random];
        cursorBlock.style.backgroundColor = colorArr[random];
    });
}
heroAreaDesigning();

// Cursor designing
function cursorDesigning() {
    var cursor = document.querySelector(".ExtraCursor");
    var area = document.querySelector("#Home");

    area.addEventListener("mousemove", function(details) {
        cursor.style.opacity = 0.95;
        var rect = area.getBoundingClientRect();
        var offsetX = rect.top;
        var xpos = details.clientX + 20;
        var ypos = details.clientY - offsetX;
        cursor.style.transform = "translate(" + xpos + "px, " + ypos + "px)";
    });
    area.addEventListener("mouseleave", function(details) {
        cursor.style.opacity = 0;
    });
}
cursorDesigning();

// Contact form controls
const contactForm = document.querySelector('#contactMeForm');
const closeBtn = document.querySelector("#closebtn");
const minimizeBtn = document.querySelector("#minimise");
const maximizeBtn = document.querySelector("#maximise");
const minimiseMe = document.querySelector("#minimiseMe");
const minimiseMe2 = document.querySelector("#minimiseMe2");

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        if (contactForm) contactForm.style.display = "none";
    });
}

if (minimizeBtn) {
    minimizeBtn.addEventListener("click", () => {
        if (minimiseMe && minimiseMe2) {
            minimiseMe.style.display = minimiseMe.style.display === "none" ? "block" : "none";
            minimiseMe2.style.display = minimiseMe2.style.display === "none" ? "flex" : "none";
        }
    });
}

if (maximizeBtn) {
    maximizeBtn.addEventListener("click", function() {
        if (minimiseMe && minimiseMe2 && contactForm) {
            minimiseMe.style.display = "block";
            minimiseMe2.style.display = "flex";
            contactForm.classList.toggle('fullscreen');
        }
    });
}

// GSAP animations
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const scrollButton = document.querySelector("#scrollButton");
if (scrollButton) {
    scrollButton.addEventListener("click", () => {
        gsap.to(window, { duration: 1, scrollTo: "#page2" });    
    });
}

function gsapPart() {
    var initialPath = `M 10 100 Q 500 100 1190 100`;
    var finalPath = `M 10 100 Q 250 100 1190 100`;
    var string = document.querySelector(".string");
    if (string) {
        string.addEventListener("mousemove", (details) => {
            const rect = string.getBoundingClientRect();
            const adjustedY = details.clientY - rect.top;
            const path = `M 10 100 Q ${details.clientX} ${adjustedY} 1190 100`;
            gsap.to("svg path", {
                attr: { d: path },
                duration: 0.2,
                ease: "power3.Out",
            });
        });
        string.addEventListener("mouseleave", () => {
            gsap.to("svg path", {
                duration: 0.3, 
                attr: {d: initialPath},
                ease: "elastic.out(1,0.2)",
            });
        });
    }

    var t1 = gsap.timeline();

    t1.from("#MyImage", {
        x: -100,
        duration: 0.1,
        opacity: 0,
        ease: "elastic.out",
        delay: 1,
    });

    t1.from("#hearderArea div", {
        y: -10,
        duration: 0.1,
        stagger: 0.1,
        opacity: 0,
        ease: "power3.out",
    });

    t1.from("#Menu li", {
        y: -10,
        duration: 0.1,
        stagger: 0.2,
        opacity: 0,
        ease: "power3.out",
    });

    t1.from("#batteryArea", {
        y: -10,
        duration: 0.1,
        opacity: 0,
        ease: "power3.out",
    });

    t1.from("#boxArea", {
        x: -100,
        duration: 0.1,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out",
    });

    t1.play();

    const textElement = document.getElementById('mytext');
    if (textElement) {
        const textContent = textElement.textContent;
        textElement.innerHTML = textContent.split('').map(char => `<div>${char}</div>`).join('');

        gsap.from("#mytext div", { 
            duration: 0.1, 
            opacity: 0, 
            y: 50, 
            stagger: 0.05, 
            ease: "back.out(1.7)"
        });
    }

    gsap.from("#page2 h3", {
        x: -200,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#page2",
            start: "top 70%",
            end: "top 90%",
            scrub: 1,
        },
    });

    gsap.from("#AboutText", {
        x: -200,
        opacity: 0,
        duration: 2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#AboutText",
            start: "top 80%",
            end: "top 90%",
            scrub: 1,
        },
    });

    gsap.from("#TechLogo div", {
        x: 200,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
            trigger: "#TechLogo",
            start: "top 80%",
            end: "top 10%",
            scrub: 1,
        },
    });

    gsap.from("#Fourth div", {
        x: -200,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
            trigger: "#Fourth",
            start: "top 80%",
            end: "top 10%",
            scrub: 1,
        },
    });

    gsap.from("footer div", {
        x: -200,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
            trigger: "footer",
            start: "top 99%",
            end: "top 95%",
            scrub: 1,
        },
    });
}

// Only run GSAP animations on larger screens
if (window.innerWidth > 768) {
    gsapPart();
}