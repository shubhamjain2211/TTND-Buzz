const express = require('express');
const uploadRouter = express.Router();
const upload = require('../../utils/upload').single('file');
const multer = require('multer');


uploadRouter.post('/', (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      res.send('Please enter the mentioned size image');
    } else if (err) {
      console.log('err',err);
      res.send('Please Format write extension type');
    } else {
        console.log('file',req.file);
      res.send(req.file);
    }
  });
});

module.exports = uploadRouter;
