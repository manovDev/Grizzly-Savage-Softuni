const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 5000,
        dbUrl: '',
    },
    production: {
        port: process.env.PORT || 5000,
        dbUrl: '',
    }
};

module.exports = config[env];