const mongoose = require('mongoose');
const { Schema } = mongoose;

const PageLandingSchema = new Schema({
    punchLine: String,
    description: String,
    imageUrl: String
})

const ModelClass = mongoose.model('PageLanding', PageLandingSchema);

module.exports = ModelClass;