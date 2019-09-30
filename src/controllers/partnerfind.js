const express = require('express');
const authMiddleware = require('../middlewares/auth');
const Partner = require('../models/Partner');
const router = express.Router();

router.use(authMiddleware);

router.post('/findpartner', async (req, res) => {

    const { availableServices, lat, long } = req.body;
    const partner = await Partner.findOne({
        "loc" : {
            $geoWithin : {
                $centerSphere : [[long, lat], 10 / 6378.1]
            }
        },
        availableServices : { $all : availableServices }
    })
   
    if( partner == null) {
        return res.send({ error: 'Não encontrei nenhum serviço :(' })
    }

    res.send({ partner });
});

module.exports = app => app.use('/auth', router);