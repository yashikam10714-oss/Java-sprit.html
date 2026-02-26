function validate(e) {
    e.prevventDefault();

    const email = document.getElementById('email').Value;
    const pas = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message');
    
    let message = '';
    if (email ==='')  {
        message = 'Enter an email';
        msgBox.style.color = 'red';

    }else if (pass === ''){
      message = 'Please enter the password'
      msgBox.style.color = 'red';
     
    }  else if (age ===''){
        message = 'Enter your age';
        msgBox.style.color = 'red';
    }else {
        message = 'Login successful'
        
    }
    msgBox.innerText = message;
}