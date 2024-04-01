var express = require('express');
var router = express.Router();

router.get('/', async (req, res) => {
    res.status(200).json({
        name   : 'Stored files', 
        version: '1.0', 
        status : 200, 
        message: 'API to Store Your files!'
    });
});
module.exports = router;