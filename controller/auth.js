const authService = require('../service/auth');

async function login(req, res) {
     const {email, password } = req.body;

    // assume that credentials are correct

    if (!email || !password ) {
        return res.status(400).send('You need tp provide username or password');
        
    }

    try {

        const user = await authService.login(email, password);
        req.session.user = user;
        res.sendStatus(204);
        
    } catch (err) {
        console.error(err);
        res.status(401).json(err)
    }

}
    

module.exports = login;