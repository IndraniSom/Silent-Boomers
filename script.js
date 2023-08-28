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

  // Make sure to include the SMTP.js library in your HTML file:
// <script src="https://smtpjs.com/v3/smtp.js"></script>

 
    // const submitButton = document.getElementById("button");

    // submitButton.addEventListener('click', async (e) => {
    //     e.preventDefault();
    //   const name = document.getElementById("name").value;
    //   const email = document.getElementById("email").value;
    //   const message = document.getElementById("message").value;
    //   const SecureToken = "6d7b966f-335d-40d7-9e97-a96a550270d3"; // Replace with your actual SecureToken

    //   try {
    //     const EMAIL=await Email.send({
    //       SecureToken: SecureToken,
    //       To: email,
    //       From: 'indranisom39@gmail.com',
    //       Subject: "Confirmation Mail",
    //       Body: `Thank you, ${name}, for connecting with us. We will get back to you soon.\n\nMessage: ${message}`
    //     });
    //     console.log(EMAIL);

    //     alert("Email sent successfully!");
    //   } catch (error) {
    //     console.error("Error sending email:", error);
    //     alert("An error occurred while sending the email.");
    //   }
    // });
    const popupButton = document.getElementById('popupButton');
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('closePopup');
    
    popupButton.addEventListener('click', () => {
      popup.style.display = 'block';
    });
    
    closePopupButton.addEventListener('click', () => {
      popup.style.display = 'none';
    });
    