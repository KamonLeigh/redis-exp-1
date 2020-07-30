
const session = require('express-session');
const connectRedis = require('connect-redis');
const redisClient = require('../db/redis');

const RedisStore = connectRedis(session);


module.exports = session({
    store: new RedisStore({
        client: redisClient
    }),
    secret: 'mysecret',
    saveUninitialized: false,
    name: 'sessionId',
    resave: false,
    cookie: {
        secure: false, // if true only transmit cookie over https
        httpOnly: true, // if true prevents client side JS from reading your cookie
        maxAge: 1000 * 60 * 30 // session max age in millisenconds
    }
})