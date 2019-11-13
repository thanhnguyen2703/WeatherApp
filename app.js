
function getTime() {
    let time = new Date();
    let hour = 0 + time.getHours().toString();
    let minute = 0 + time.getMinutes().toString();
    let second = 0 + time.getSeconds().toString();
    return hour.slice(-2) + ":" + minute.slice(-2) + ":" + second.slice(-2)
};

function setTime() {
    document.getElementById("time").textContent = getTime();
}

setInterval(() => {
    setTime()
    setGreeting()
}, 1000);

function getGreeting() {
    let time = new Date();
    let hours = time.getHours();
    if (hours < 12 ) { return "morning"}
    if (hours >= 12 && hours < 18 ) { return "afternoon"}
    if (hours > 18) { return "evening"} 
}
function setGreeting() {
    document.getElementById("greeting").textContent = getGreeting()
}
