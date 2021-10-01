window.onload = function() {
    document.getElementById('access-button').addEventListener('click', function () {
        var emailAddress = document.getElementById('email-address').value;
        var button = document.getElementById('access-button');
        button.classList.remove('mobile-button');
    
        document.getElementById('error-empty').style.display = 'none';
        document.getElementById('error-invalid-format').style.display = 'none';
    
        if (emailAddress === '') {
            button.classList.add('mobile-button');
            document.getElementById('error-empty').style.display = 'block';  
        }
        else if (!validateEmail(emailAddress)) {
            button.classList.add('mobile-button');
            document.getElementById('error-invalid-format').style.display = 'block';
        }
    });
};

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
