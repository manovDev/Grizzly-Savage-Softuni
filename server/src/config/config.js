const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 5000,
        dbUrl: 'mongodb+srv://grizzly:grizzly@grizzlysavage.clytr.mongodb.net/grizzlysavage?authSource=admin&replicaSet=atlas-e2xl6b-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
    },
    production: {
        port: process.env.PORT || 5000,
        dbUrl: 'mongodb+srv://grizzly:grizzly@grizzlysavage.clytr.mongodb.net/grizzlysavage?authSource=admin&replicaSet=atlas-e2xl6b-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
    }
};

module.exports = config[env];