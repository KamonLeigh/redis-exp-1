const userDAO = require('../dao/user');
const bcypt = require('bcrypt');

async function login(email, password) {
    try {
        const user = await userDAO.findUserByEmail(email);

        const match = await bcypt.compare(password, user.pwHash);

        if (match) {
            return { id: user.id, roles: user.roles}
        } else {
            return Promise.reject('wrong useername or password');
        }
        
    } catch (error) {
        return Promise.reject('use not found');
    }
}

module.exports = { login }