const cloudinary = require ('cloudinary').v2

cloudinary.config({
cloud_name: 'deb05crrf',
api_key: 478737442965597,
api_secret: 'TqnN3F_epqmUJls19iLypZaz-fg',
});


module.exports = { 
    cloudinary
}