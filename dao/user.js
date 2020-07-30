        const bcrypt = require('bcrypt')

const users = {
    'user1@productioncoder.com': {
        pwHash: bcrypt.hashSync('user1pw', 10),
        roles: ['ADMIN'],
        id:'b957f68b-30ab-45b1-ad62-f97369322559'
    },
    'user2@productioncoder.com': {
        pwHash: bcrypt.hashSync('user2pw', 10),
        roles: ['ACCOUNT_MANAGER'],
        id: 'd4e261bb-4944-46f6-820b-e60e8cf1bfa7'
    }
}

async function findUserByEmail(email) {
    const user = users[email];

    return user ? user : Promise.reject('user not found');
}

module.exports = { findUserByEmail };