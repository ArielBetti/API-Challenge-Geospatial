const express = require('express');

const User = require('../models/User')

const router = express.Router();

router.post('/register', async (req, res) => {
    
    const { email } = req.body;

    try {
        
        if(await User.findOne({ email })) {
            return res.status(400).send({ error: 'Esse usuário já existe :(' });
        }

        const user = await User.create(req.body);
        return res.send({ user });

    } catch (err) {        
        return res.status(400).send({ error: 'O registro de usuário falhou.' });
    }

});

module.exports = app => app.use('/auth', router);