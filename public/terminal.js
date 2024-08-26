document.addEventListener("DOMContentLoaded", () => 
{
  let userInput = document.getElementById("userInput");
  let terminalOutput = document.getElementById("terminalOutput");
  let dummyKeyboard = document.getElementById("dummyKeyboard");

  const COMMANDS = 
  {
    help: 'Supported commands: "about", "education", "skills", "contact", "etc."',
    about:
      "Hello 👋<br> Hi everyone. My name is Kush Kansal and I am a second-year college student pursuing my B.tech from JIIT. I have a keen interest in cutting-edge technologies. I am driven by a strong sense of curiosity. I am currently learning full-stack web development and DSA. My unwavering determination propels me towards achieving excellence, and I aspire to contribute significantly to society by enhancing people/'s lives.",
      skills:
      `Languages: HTML, CSS, JavaScript, TypeScript, Java, C, C++, Sass<br>
       Technologies: Git, GitHub, Docker, Vercel, Postman, REST API's<br>
       Frameworks/Libraries: React.js, Bootstrap, Tailwind CSS, Express.js<br>
       Tools: VS Code, Figma, NPM, Node.js, MongoDB, PostgreSQL`,    
    education:
      "B.Tech Computer Science and Engineering - Jaypee Intitute of Information Technology, Noida",
      contact: `You can contact me on any of the following links: <a href="https://github.com/KushKansal" target="_blank" style="color: #1e90ff; text-decoration: none; background-color: #333; padding: 4px; border-radius: 4px;">GitHub</a>, <a href="https://www.linkedin.com/in/kushkansal/" target="_blank" style="color: #1e90ff; text-decoration: none; background-color: #333; padding: 4px; border-radius: 4px;">LinkedIn</a>, <a href="mailto:kushkansal0@gmail.com" target="_blank" style="color: #1e90ff; text-decoration: none; background-color: #333; padding: 4px; border-radius: 4px;">G-Mail</a>`,
    party: "🎉🎉🎉",
    "sudo rm -rf": "Danger command! 🚫🚫🚫",
    ls: "Directory ka selfie! 📂 Akhir Dekhna Kya chata ho?",
    cd: "Folder switch, not allowed! 🙅‍♂️",
    pwd: "GPS kaam nahi kar raha bro! Phale apni location share karo 🌍",
    quote: "Life is like a code: sometimes you need to debug and refactor! 💻",
    fortune: "Aaj ka fortune: Tumhara future bright hai, bas thoda patience rakho! ✨",
    whoami: "Aap hi hain jo pooch rahe hain! 🤔 Batao kuch aur!",
    etc: "Some more commands ls, cd, pwd, exit, status, update, joke. Baki Aapka imagination limit hai! 🚀",
    hi: "Hello! 👋",
    bye: "Goodbye! 👋",
    exit: "Goodbye! 👋",
    status: "Status update: Everything's running smoothly! 🚀",
    update: "Updating... Please wait... 🕒",
    joke: "Ek joke suno: Why do programmers prefer dark mode? Because light attracts bugs! 😆",  
    you: "I am just a terminal, not a human! 🤖",  
  };

  const executeCommand = (input) => {
    let output = `<div class="terminal-line"><span class="text-green-400">➜</span> <span class="text-blue-400 mx-2">~</span> ${input}</div>`;

    if (COMMANDS.hasOwnProperty(input))
      output += `<div class="terminal-line">${COMMANDS[input]}</div>`;
    else
      output += `<div class="terminal-line">no such command: ye sab allowed nahi ha idhar<span class="text-red-500 font-extrabold">!!</span></div>`;

    terminalOutput.innerHTML += output;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  };

  const handleKeypress = (e) => 
  {
    if (e.key === "Enter") {
      const input = userInput.innerHTML.trim();
      executeCommand(input.toLowerCase());
      userInput.innerHTML = "";
      e.preventDefault();
    } else if (e.key.length === 1) {
      userInput.innerHTML += e.key;
    }
  };

  const handleBackspace = (e) => {
    if (e.key === "Backspace") {
      userInput.innerHTML = userInput.innerHTML.slice(0, -1);
      e.preventDefault();
    }
  };

  dummyKeyboard.addEventListener("keypress", handleKeypress);
  dummyKeyboard.addEventListener("input", handleKeypress);
  dummyKeyboard.addEventListener("keydown", handleBackspace);

  var terminal = document.getElementById("terminal");
  terminal.addEventListener("click", () => {
    dummyKeyboard.focus();
  });
});
