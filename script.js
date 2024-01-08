const strengthIndicator = document.querySelector('#strengthIndicator')
const Input = document.querySelector('input')



Input.addEventListener("keydown" , ()=> {
    minLength = 8
    let Password = Input.value
    hasUppercase = /[A-Z]/.test(Password)
    hasLowercase = /[a-z]/.test(Password)
    hasNumber = /[1-9]/.test(Password)
    hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/

    const criteriaMet = [hasUppercase, hasLowercase, hasNumber, hasSpecialChar].filter(Boolean).length;
 
    if(Password.length < minLength || criteriaMet < 2 ){
        strengthIndicator.classList.add('weak')
        strengthIndicator.classList.remove('medium')
        strengthIndicator.classList.remove('strong')
        
    }else if(Password.length > minLength || criteriaMet > 2 ){
        strengthIndicator.classList.add('medium')
        strengthIndicator.classList.remove('weak')
        strengthIndicator.classList.remove('strong')

    }else if(Password.length > minLength && criteriaMet > 2 ){
        strengthIndicator.classList.add('strong')
        strengthIndicator.classList.remove('weak')
        strengthIndicator.classList.remove('medium')
    }
})