const validateUsername = (username) => {
    return username?.toString().length > 5;
}

const validatePassword = (password) => {
    return password?.toString().length > 5;
}

const validateConfirmPassword = (password, confirmPassword) => {
    return validatePassword(password) && password === confirmPassword;
}

const validateEmail = (email) => {
    return email?.toString().includes('@') && email?.toString().includes('.');
}

export{
    validateUsername,
    validatePassword,
    validateEmail,
    validateConfirmPassword
}
