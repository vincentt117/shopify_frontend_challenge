function checkEmail() {
    var email_error = document.getElementById("email_error");
    var email_success = document.getElementById("email_success");
    var email_submit = document.getElementById("email_submit").toString();
    var atpos = email_submit.indexOf("@");
    var dotpos = email_submit.lastIndexOf(".");
    //    If the string fails the syntax check, display the erorr message, else display the success message
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email_submit.length) {
        email_error.style.display = 'block';
        console.log("hello");
    }

}