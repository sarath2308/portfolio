function validate() {
    console.log("Hellooo")
    // Clear previous error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";

    var isValid = true;

    // Get form inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("iq").value;

    // Name validation
    if (name == "") {
        document.getElementById("nameError").innerHTML = "Please enter your name.";
        isValid = false;
    }

    // Email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email == "" || !emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
        isValid = false;
    }
    // Message validation
    if (message == "") {
        document.getElementById("messageError").innerHTML = "Please enter your message.";
        isValid = false;
    }

    return isValid; // Only submit the form if all validation passed
}
function emailSent()
{
    let parms={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("iq").value
    }
    emailjs.send("service_g1gcv8r","template_gyjuvmr",parms).then(alert('Email has been sent'))
}

