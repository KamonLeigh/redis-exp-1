const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');
const auth = require('../controller/auth');
const profile = require('../controller/profile');


router.post('/login', auth);

router.use(authenticate);

router.get('/profile', profile);


module.exports = router;