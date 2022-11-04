(function() {
    let form = document.querySelector('#register-form');  
    let emailInput = document.querySelector('#contact-email'); 
    let telephoneInput = document.querySelector('#contact-tel'); 
    let messageInput = document.querySelector('#message');
  
    function showErrorMessage(input, message){
      let container = input.parentElement;
  
      let error = container.querySelector('.error-message');
        if (error){
          container.removeChild(error);
        }
  
      if (message){
        let error = document.createElement('div');
        error.classList.add('error-message');
        error.innerText = message;
        container.appendChild(error);
      }
    };
    
    function validateEmail() {
      let value = emailInput.value;
  
      if(!value){
        showErrorMessage(emailInput, 'Email is a required field.');
        return false;
      }
  
      if (value.indexOf('@') === -1){
        showErrorMessage(emailInput, 'You must enter a valid email address.');
        return false;
      }
  
      if (value.indexOf('.') === -1) {
        showErrorMessage( emailInput, 'You must enter a valid email address.');
        return false;
      }
  
      showErrorMessage(emailInput, null);
      return true;
    }
    
    function validateTelephone() {
    let value = telephoneInput.value;
  
      if (!value) {
        showErrorMessage(telephoneInput, 'telephone number is a required field.');
        return false;
      }
  
      if (value.length < 10) {
        showErrorMessage( telephoneInput, 'The telephone number needs to be at least 10 characters long.');
        return false;
      }
  
      showErrorMessage(telephoneInput, null);
      return true;
    }

    function validateMessage() {
        let value = messageInput.value;

        if (!value){
            showErrorMessage(messageInput, 'message is required field.');
            return false;
        }

        if(value.length < 0){
            showErrorMessage(messageInput, 'text is required to submit.');
            return false;
        }

        showErrorMessage(messageInput, null);
        return true;
    }
    
    function validateForm() {
      let isVaildEmail = validateEmail();
      let isVaildTelephone = validateTelephone();
      let isValidMessage = validateMessage();
      return isVaildEmail && isVaildTelephone && isValidMessage;
    }
    
   form.addEventListener('submit', (e) => {
     e.preventDefault(); // Do not submit to the server
     if (validateForm()) {
         alert('Success!');
       }
     })
  
       emailInput.addEventListener('input', validateEmail);
       telephoneInput.addEventListener('input', validateTelephone);
       messageInput.addEventListener('input', validateMessage);
    return 
    // THE RETURN STATEMENT HERE
  })();
  