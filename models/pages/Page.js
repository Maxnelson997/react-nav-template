const mongoose = require('mongoose');
const { Schema } = mongoose;

const PageSchema = new Schema({
    title: String,
    pageChildren: [{type: mongoose.Schema.Types.ObjectId, ref: 'PageChild'}],
    pageLanding: {type: mongoose.Schema.Types.ObjectId, ref: 'PageLanding'}
})

const ModelClass = mongoose.model('page', PageSchema);

module.exports = ModelClass;