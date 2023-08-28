window.onload = function() {
    const string = "Silent Boomers";
    const array = string.split("");
    let loopTimer;

    function frameLooper() {
        const textElement = document.getElementById("text");
        if (textElement && array.length > 0) {
            textElement.innerHTML += array.shift();
        } else {
            clearTimeout(loopTimer);
        }
        loopTimer = setTimeout(frameLooper, 70); /* change 70 for speed */
    }

    frameLooper();
};

  