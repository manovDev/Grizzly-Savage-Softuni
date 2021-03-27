const User = require('../models/User');

const signUp = async ({ firstName, lastName, email, password }) => {
    
    const user = new User({ firstName, lastName, email, password });
    // const _id = user._id;
    
    await user.save();

}

module.exports = {
    signUp
}