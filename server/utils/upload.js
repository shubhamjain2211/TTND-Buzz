const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: 'dwt1gzow5',
  api_key: '167969949436996',
  api_secret: 'XuDyFhMNZ4gYO2vdSNOZl1R40Y0'
  })
  

const storage = new CloudinaryStorage({
cloudinary: cloudinary,
params: {
  folder: 'uploads'
},
});



const upload = multer({
  storage: storage,
});

module.exports = upload;
