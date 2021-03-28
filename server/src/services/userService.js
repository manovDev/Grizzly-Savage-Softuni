const admin = require('../config/firebase');
const User = require('../models/User');

const signUp = ({ firstName, lastName, email, password }) => {

    return admin.auth().createUser({
        email,
        password,
    })
        .then(async (userRecord) => {
            const uid = userRecord.uid
            const user = new User({ uid, firstName, lastName, email });
            
            return await user.save();
            
        })
        .catch((err) => {
            return { error: err.message };
        });
}

const signIn = async ({ uid }) => {
    const user = await User.findOne({ uid }).exec();

    return user;
}

module.exports = {
    signUp,
    signIn,
}