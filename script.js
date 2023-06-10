window.addEventListener("DOMContentLoaded",onDocumentReady);

function onDocumentReady(event){

let subscribingBtn = document.querySelector(".subscribing");

subscribingBtn.addEventListener("click", onSucessEvent);

function onSucessEvent(e){

    e.target.blur();
    // Get de value of user input email
    var userMail = document.getElementById('email').value ;
    console.log(userMail);

    // validated the email adress

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValidEmail = emailPattern.test(userMail);

    // select erro msg

    let errorMsg = document.getElementById('error-msg');

    if (isValidEmail) {
        // display user email
        let userMailValue = document.getElementById('input-user-name');
        userMailValue.textContent = userMail;
  
        // load sucess page
        let activeElements = document.getElementById('form-container');
        let inactiveElements = document.getElementById('sucess-container');
        activeElements.classList.add('inactive');
        inactiveElements.classList.remove('inactive');
        }
        else
        

            if (userMail == "") {
                console.log('empty email field');
                
                errorMsg.classList.remove('inactive');
            }
            else
            // ask for a correct mail       
            console.log('wrong email pattern');
            let emailBox = document.getElementById('email');
            emailBox.classList.add('invalid');
            errorMsg.classList.remove('inactive');
            }


let refreshBtn = document.querySelector(".dismiss");
refreshBtn.addEventListener("click", function(e){
    location.reload();
})
}

