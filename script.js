function cursorDesigning()
{
    var cursor = document.querySelector(".ExtraCursor");
    var area = document.querySelector("#About");

    area.addEventListener("mousemove", function(details) 
    {
    cursor.style.opacity= 0.9;
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
        cursorBlock.textContent= textArr[random];
        cursorBlock.style.backgroundColor= colorArr[random];
    }, 3000);
    area.addEventListener("click", ()=>{
        var random = Math.floor(Math.random() * textArr.length) ;
        cursorBlock.textContent= textArr[random];
        cursorBlock.style.backgroundColor= colorArr[random];
    });
}
cursorDesigning();
heroAreaDesigning();