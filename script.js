var adInterval = setInterval(function() 
{
    var allLinks = document.getElementsByTagName('a');
    for (var i = 0; i < allLinks.length; i++) 
        {
        var href = allLinks[i].getAttribute('href');
        if (href && href.startsWith('https://elfsight.com/visitor-counter-widget/?utm_source=websites&utm_medium=clients&utm_content=visitor-counter')) 
        {
            allLinks[i].style.display = 'none';
        }
    }
}, 100);

// Clear the interval after 10 seconds
setTimeout(function() {
    clearInterval(adInterval);
}, 10000); // 10 seconds in milliseconds


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


navigator.getBattery().then(battery=>
{
    // alert("Battery Level: "+Math.floor(battery.level*100)+"%");
    setInterval(() => {        
        document.querySelector("#batteryArea p").textContent=Math.floor(battery.level*100)+"%";
        if(battery.charging)
        document.querySelector("#batteryArea img").style.display="block";
        else
        document.querySelector("#batteryArea img").style.display="none";
    }, 1000);
});

Notification.requestPermission().then(permission=>{
    new Notification(`${greeting} Welcome to my digital domain, where innovation meets execution and code meets creativity.`);
});


const images = document.querySelectorAll('.TechStacks div');
const overlay = document.getElementById('overlayer');
images.forEach(image => 
{
    image.addEventListener('mouseenter', () => {
        overlay.style.display = 'block';
        console.log("Here");
        image.style.zIndex="10";
    });
    
    image.addEventListener('mouseleave', () => {
        setTimeout(() => {
            overlay.style.display = 'none';    
            image.style.zIndex="8";
        }, 50);
    });
});

const mode = document.querySelector("#mode");
console.log(mode);
function modechanger()
{
    
    var string = document.querySelector(".string");
    root= getComputedStyle(document.querySelector(':root'));
    if(root.getPropertyValue('--text-color')=="#fff")//light mode is on
    {
        string.style.display="flex";
        document.querySelector("#modeChangerimg").src="/Images/dark.png";
        document.documentElement.style.setProperty('--text-color', '#000');
        document.documentElement.style.setProperty('--text-color2', '#fff');
        document.documentElement.style.setProperty('--text-color3', '#fff');
        const patterns = document.querySelectorAll('.pattern');
        patterns.forEach(pattern => {
            pattern.style.backgroundImage = 'none';
        });
        const invert = document.querySelectorAll('.invertme');
        invert.forEach(pattern => {
            pattern.style.filter = 'none';
        });
        document.querySelector("#river").src="none";
    }
    else //dark mode is on
    {
        string.style.display="none";
        document.querySelector("#modeChangerimg").src="/Images/light.png";
        document.documentElement.style.setProperty('--text-color', '#fff');
        document.documentElement.style.setProperty('--text-color2', 'rgb(39 39 42)');
        document.documentElement.style.setProperty('--text-color3', 'rgb(0 0 0)');
        const patterns = document.querySelectorAll('.pattern');
        patterns.forEach(pattern => {
            pattern.style.backgroundImage = "url('/pattern.png')";
        });
        const invert = document.querySelectorAll('.invertme');
        invert.forEach(pattern => {
            pattern.style.filter = 'invert(1)';
        });
        document.querySelector("#river").src="Videos/river.mp4";
    }
}

function heroAreaDesigning()
{
    var textArr = ["Student @JIIT-27' 🎓 "," Java Programmer ♨️ ", " Front End Developer 🌱 "," 3⭐@LeetCode ", " Aspiring Open Source Contributor 💻 ", "Explorer🚀"];
    var colorArr = ["#0A6AD6","#FFAF45", "#A34343","#FF204E", "#19A95B", "#2C2C2C"];
    var cursorBlock = document.querySelector(".ExtraCursor");
    var area = document.querySelector("#Home");
    setInterval(() => {
        var random = Math.floor(Math.random() * textArr.length) ;
        cursorBlock.innerHTML= textArr[random];
        cursorBlock.style.backgroundColor= colorArr[random];
    }, 3000);
    area.addEventListener("click", ()=>{
        var random = Math.floor(Math.random() * textArr.length) ;
        cursorBlock.textContent= textArr[random];
        cursorBlock.style.backgroundColor= colorArr[random];
    });
}
heroAreaDesigning();

function cursorDesigning()
{
    var cursor = document.querySelector(".ExtraCursor");
    var area = document.querySelector("#Home");

    area.addEventListener("mousemove", function(details) 
    {
        cursor.style.opacity= 0.95;
        var rect = area.getBoundingClientRect(); // Get the dimensions and position of the area
        var offsetX = rect.top; // Calculate the distance between the top of the area and the document top
        var xpos = details.clientX + 20; // Horizontal offset
        var ypos = details.clientY - offsetX; // Vertical offset
        cursor.style.transform = "translate(" + xpos + "px, " + ypos + "px)";
    });
    area.addEventListener("mouseleave", function(details) 
    {
    cursor.style.opacity=0;
    });
}
cursorDesigning();

document.querySelector("#closebtn").addEventListener("click", ()=>{
    document.querySelector("#contactMeForm").style.display="none";
});
document.querySelector("#minimise").addEventListener("click", () => {
    const minimiseMe = document.querySelector("#minimiseMe");
    const minimiseMe2 = document.querySelector("#minimiseMe2");
    if (minimiseMe.style.display === "none") {
        minimiseMe.style.display = "block";
        minimiseMe2.style.display = "flex";
    } else {
        minimiseMe.style.display = "none";
        minimiseMe2.style.display = "none";
    }
});

document.getElementById('maximise').addEventListener('click', function() {
    const minimiseMe = document.querySelector("#minimiseMe");
    const minimiseMe2 = document.querySelector("#minimiseMe2");
    minimiseMe.style.display = "block";
    minimiseMe2.style.display = "flex";

    const contactForm = document.querySelector('#contactMeForm');
    contactForm.classList.toggle('fullscreen');
  });





  gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);
document.querySelector("#scrollButton").addEventListener("click", ()=>{
gsap.to(window, { duration: 1, scrollTo: "#page2" });    
});

var initialPath = `M 10 100 Q 500 100 1190 100`;
var finalPath = `M 10 100 Q 250 100 1190 100`;
var string = document.querySelector(".string");
string.addEventListener("mousemove", (details) => {
    const rect = string.getBoundingClientRect();
    const adjustedY = details.clientY - rect.top;
    const path = `M 10 100 Q ${details.clientX} ${adjustedY} 1190 100`;
    // console.log(adjustedY);
    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.2,
        ease: "power3.Out",
    });
});
string.addEventListener("mouseleave",()=>
{
    gsap.to("svg path", {
        duration: 0.3, 
        attr: {d: initialPath},
        ease: "elastic.out(1,0.2)",
    });
} );

var t1 = gsap.timeline();

t1.from("#MyImage",{
    x: -100,
    duration: 0.1,
    opacity: 0,
    ease: "elastic.out",
    delay: 1,
});

t1.from("#hearderArea div",{
    y: -10,
    duration: 0.1,
    stagger: 0.1,
    opacity: 0,
    ease: "power3.out",
});


t1.from("#Menu li",{
    y: -10,
    duration: 0.1,
    stagger: 0.2,
    opacity: 0,
    ease: "power3.out",
    // delay: 1,
});

t1.from("#batteryArea",{
    y: -10,
    duration: 0.1,
    opacity: 0,
    ease: "power3.out",
});
t1.from("#boxArea a",{
    x: -100,
    duration: 0.1,
    opacity: 0,
    stagger: 0.1,
    ease: "power3.out",
});

t1.play();

const textElement = document.getElementById('mytext');
const textContent = textElement.textContent;
textElement.innerHTML = textContent.split('').map(char => `<div>${char}</div>`).join('');

gsap.from("#mytext div", { 
    duration: 0.1, 
    opacity: 0, 
    y: 50, 
    stagger: 0.05, 
    ease: "back.out(1.7)"
});


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
    scrollTrigger: 
    {
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
    scrollTrigger: 
    {
        trigger: "footer",
        start: "top 99%",
        end: "top 95%",
        scrub: 1,
    },
});