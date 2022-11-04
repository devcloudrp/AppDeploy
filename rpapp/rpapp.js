const express = require('express');

const rpapp = express();

rpapp.get('/',(req, res) => {
    res.send('We are on home');
});

rpapp.listen(3000);