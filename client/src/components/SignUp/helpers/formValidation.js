const emailValidation = (value) => {
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (!value.match(emailPattern)) {
        return "You must enter valid email adress!";
    } else  {
        return false;
    }
}

const passwordValidation = (value) => {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])*[A-Za-z\d@$!%*#?&]{6,}$/;

    if (!value.match(passwordPattern)) {
        return "Min six characters, at least one letter and at least one number!";
    } else  {
        return false;
    }
}

const nameValidation = (value) => {
    const namePattern = /^([A-Z][a-z]+)$/;

    if (!value.match(namePattern)) {
        return "Invalid name! E.g., \"John\"";
    } else  {
        return false;
    }
}

const profileImageValidation = (value) => {
    if (!value) {
        return "I must upload an image!";
    } else  {
        return false;
    }
}

export const validateField = (type, value) => {
    switch (type) {
        case 'email':
            return emailValidation(value);
        case 'password':
            return passwordValidation(value);
        case 'firstName':
            return nameValidation(value);
        case 'lastName':
            return nameValidation(value);
        case 'profileImage':
            return profileImageValidation(value);
        default:
            return false;
    }
}