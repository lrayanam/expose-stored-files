var express = require('express');
var router = express.Router();

router.get('/', async (req, res) => {
    res.status(200).json({
        name   : 'API', 
        version: '1.0', 
        status : 200, 
        message: 'Ici vous stockez vos fichiers!'
    });
});
module.exports = router;