// routes.js
const express = require('express');
const router = express.Router();
const path = require('path');
const singleFileUpload = require('../controllers/singleUpload');

router.post('/singleFileUpload', (req, res, next) => {
    try {
        singleFileUpload(req, res, function(err) {
            if (err) {
                console.log(err);
                res.status(500).json({ error: 'File upload error' });
            } else {
                res.status(200).json(req.file);
            }
        });
    } catch (error) {
        console.log("xeta: ", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/file/:FileName', (req, res) => {
    const FileName = req.params.FileName;
    const FilePath = path.join(__dirname, '../uploads', FileName);
    res.sendFile(FilePath);
});

module.exports = router;
