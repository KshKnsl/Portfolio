function cursorDesigning()
{
    var cursor = document.querySelector(".ExtraCursor");
    var area = document.querySelector("#About");

    area.addEventListener("mousemove", function(details) 
    {
    cursor.style.opacity= 0.95;
    var rect = area.getBoundingClientRect(); // Get the dimensions and position of the area
    var offsetX = rect.top; // Calculate the distance between the top of the area and the document top
    var xpos = details.clientX; // Horizontal offset
    var ypos = details.clientY - offsetX - 55; // Vertical offset
    cursor.style.transform = "translate(" + xpos + "px, " + ypos + "px)";
    });
    area.addEventListener("mouseleave", function(details) 
    {
    cursor.style.opacity=0;
    });
}
function heroAreaDesigning()
{
    var textArr = ["Student @JIIT-27' 🎓 "," Java Programmer ♨️ ", " Front End Developer 🌱 "," 2⭐@LeetCode ", " Aspiring Open Source Contributor 💻 ", "Explorer🚀"];
    var colorArr = ["#0A6AD6","#FFAF45", "#A34343","#FF204E", "#19A95B", "#2C2C2C"];
    var cursorBlock = document.querySelector(".ExtraCursor");
    var area = document.querySelector("#About");
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
function hideLoadingPage() 
{
    var i = 0;
    var loadString = ["Compiling...", "Interpreting...", "Running...", "Completed..."];
    var elementString = document.querySelector("#loading-items");
    var intervalId = setInterval(() => {
        elementString.innerHTML = loadString[i++];
        console.log(i);
        if (i === 4)
            clearInterval(intervalId);
    }, 100);
    setTimeout(() => {
        document.querySelector("#loading").style.display = "none";
    }, 700);
}

const paragraph = document.getElementById('text');

// paragraph.innerHTML = paragraph.textContent.split(' ').map(word => `<span class="hover-word">${word} </span>`).join('');


const images = document.querySelectorAll('.skillGallery img');
const overlay = document.getElementById('overlayer');
images.forEach(image => 
{
    image.addEventListener('mouseenter', () => {
        console.log("here");
        overlay.style.display = 'block'; // Display the overlay
    });
    
    image.addEventListener('mouseleave', () => {
        setTimeout(() => {
            overlay.style.display = 'none';    
        }, 50);
        
    });
});

cursorDesigning();
heroAreaDesigning();
hideLoadingPage();

setTimeout(function() {
    var allLinks = document.getElementsByTagName('a');
    for (var i = 0; i < allLinks.length; i++) {
        var href = allLinks[i].getAttribute('href');
        if (href && href.startsWith('https://elfsight.com/visitor-counter-widget/?utm_source=websites&utm_medium=clients&utm_content=visitor-counter')) {
            allLinks[i].style.display = 'none';
        }
    }
}, 1500);
