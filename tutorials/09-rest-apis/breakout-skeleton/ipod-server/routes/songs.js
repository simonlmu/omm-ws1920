var express = require('express');
var router = express.Router();

router.get('/:trackId', function(req, res, next) {
    let trackId = req.params.trackId;
    let song = req.dataStorage.getSongDetail(trackId);
    res.json({
        id: song.id,
        title: song.title,
        artist: song.artist
    });
});

module.exports = router;
