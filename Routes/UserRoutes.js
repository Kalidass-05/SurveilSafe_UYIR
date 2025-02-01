const express = require('express')
const { addUser, login } = require('../Services/UserService.js');
const {authenticateUser} = require('../Middleware/AuthMiddleware.js')

const router = express.Router();

router.post('/addUser', authenticateUser, async (req, res) => {
    try {
        const result = await addUser(req.body);
        res.status(201).redirect('/protected/addUserSuccess.html');
    } catch (error) {
        res.status(400).redirect(`/error.html?message=${error.message}`)
    }
});

router.post('/login', async (req, res) => {
    try {
        const result = await login(req.body);
        res.cookie('token', result.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 60 * 60 * 1000 // 1 hour expiration
        });
        res.status(200).redirect('/protected/loginSuccess.html');
    } catch (error) {
        res.status(400).redirect(`/error.html?message=${error.message}`)
    }
});

module.exports = router;
