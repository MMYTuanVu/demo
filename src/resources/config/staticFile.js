const express = require('express');
const path = require('path');

function staticFile(app) {
    app.use(express.static(path.join(__dirname, 'resources', 'public')));

    // Demo
    app.use('image', express.static(path.join(__dirname, 'resources', 'public', 'images')));
    app.use('videos', express.static(path.join(__dirname, 'resources', 'public', 'videos')));
}

module.exports = staticFile;