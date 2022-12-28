const btnGenerator = document.querySelector('.btn-generator')
const dial = document.querySelector('.password')

function generatePassword() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
  
    let password = '';
  
    for (let i = 0; i < 10; i++) {
    
      const randomIndex = Math.floor(Math.random() * characters.length);
  
      password += characters[randomIndex];
    }
  
    console.log(password)

    dial.style.display = 'block'

    dial.innerHTML = password

  }

  btnGenerator.addEventListener('click', generatePassword)