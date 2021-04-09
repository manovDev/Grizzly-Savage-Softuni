const admin = require('../config/firebase');
const User = require('../models/User');

const signUp = ({ firstName, lastName, email, password, profileImage }) => {

    return admin.auth().createUser({
        email,
        password,
    })
        .then(async (userRecord) => {
            const uid = userRecord.uid
            const user = new User({ uid, firstName, lastName, email, profileImage });
            
            return await user.save();
            
        })
        .catch((err) => {
            return { error: err };
        });
}

const signIn = async ({ uid }) => {
    const user = await User.findOne({ uid }).populate('orders').exec();

    return user;
}

const verifyUser = async ({ uid }) => {
    const user = await User.findOne({ uid }).populate('orders').exec();

    return user;
}

module.exports = {
    signUp,
    signIn,
    verifyUser,
}