const cors = require('cors');

const whitelist = new Set(['https://example1.com', 'https://example2.com'])

const corsOptions ={
    optionSuccessStatus: 200, // preflight check from the browser
    origin: function(origin, cb) {
        if (whitelist.has(origin)) {
            cb(null, true)
        } else {
            cb(new Error('Not allowed by CORS'))
        }
    },
    credentials: true
}

module.exports = cors(corsOptions);