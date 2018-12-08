const mongoose = require('mongoose');
const { Schema } = mongoose;

const PageChildSchema = new Schema({
    title: String
})

const ModelClass = mongoose.model('PageChild', PageChildSchema);

module.exports = ModelClass;