

const checkValidEmail = (email) => {
    return email.includes("@");
}

const checkValidPhoneNumber = (number) => {
    return typeof(number);
}


module.exports  =  {
    checkValidEmail,
    checkValidPhoneNumber
}
