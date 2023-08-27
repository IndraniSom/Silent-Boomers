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
$("nav ul li").click(function(){
    var xcoord = $(this).data("xcoord");
    
    $("nav div").stop().animate({marginLeft:xcoord}, 500, "easeInOutExpo");
    $(this).addClass("active");
    $("nav ul li").not(this).removeClass("active");
    
  });
  const fname=document.getElementById("fname");
  const lname=document.getElementById("lname");
  const email=document.getElementById("email");
  const phone=document.getElementById("phone");
  const submit=document.getElementById("submit");
  