const express = require('express');
const userController = require('./controllers/userController');

const router = express.Router();

router.post('/login', userController.login, (req, res) => res.status(200).json(res.locals.data));

router.post('/signup', userController.signup, (req, res) => res.status(200).send('signup successful'));

// router.post('/logout', sessionController.logOut, (req, res) => {
//   res.status(200).send('user logout successful')
// });

module.exports = router;
