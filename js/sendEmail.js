function sendMail(contactForm) {
    emailjs.send("HPS", "HPS", {
        "from_email": contactForm.emailaddress.value,
        "new_quote": contactForm.message.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Your request has been successfully sent!");

        },
       function(error) {
        console.log("FAILED", error);
       });
       return false;
}