const express = require('express');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const authConfig = require('../config/auth');

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return res.status(400).send({ error: 'Usuário não encontrado :/' });
    }

    if (password != user.password) {
        return res.status(400).send({ error: 'Email ou senha incorretos.' });
    }

    user.password = undefined;

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: 86400,
    });

    res.send({ user, token });

});

module.exports = app => app.use('/auth', router);