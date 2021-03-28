const serverAddress = {
    development: 'http://localhost:5000',
    production: ''
};

export const SERVER_ADDRESS = serverAddress[process.env.NODE_ENV]

const domainAddress = {
    development: 'http://localhost:3000',
    production: ''
}

export const DOMAIN_ADDRESS = domainAddress[process.env.NODE_ENV];