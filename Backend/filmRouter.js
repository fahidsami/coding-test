const express = require('express')
const fs = require('fs');
const router = new express.Router()
const filmData = './films.json';

router.get('/films', (req, res) => {
    fs.readFile(filmData, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        res.send(JSON.parse(data));
    });
});


module.exports = router
