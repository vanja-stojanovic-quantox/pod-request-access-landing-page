$(document).ready(function () {
    $("#access-button").click(function () {
        var emailAddress = $("#email-address").val();
        $(this).removeClass("mobile-button");

        $("#error-empty").hide();
        $("#error-invalid-format").hide();

        if (emailAddress === "") {
            $(this).addClass("mobile-button");
            $("#error-empty").show();
        }
        else if (!validateEmail(emailAddress)) {
            $(this).addClass("mobile-button");
            $("#error-invalid-format").show();
        }
    });
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}