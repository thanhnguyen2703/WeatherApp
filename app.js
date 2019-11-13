
function getTime() {
    let time = new Date();
    let minute = 0 + time.getMinutes().toString();
    let second = 0 + time.getSeconds().toString();
    return time.getHours() + ":" + minute.slice(-2) + ":" + second.slice(-2)
};

function setTime() {
    document.getElementById("time").textContent = getTime();
}

setInterval(() => {
    setTime()
    console.log("hello")
}, 1000);
