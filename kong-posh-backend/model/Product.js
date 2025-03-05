// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  category: { type: String, required: true },
  id:{type:Number,required:true},
  imageUrl: { type: String, required: true },
  details: { type: String, required: true },
  dashedPrice:{type:String,required:true},
  price:{ type:String, required: true },
   
   
    
   
});

module.exports = mongoose.model('Product', productSchema);
