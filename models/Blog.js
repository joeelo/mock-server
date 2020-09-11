const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  }, 
  content: {
    type: String,
    required: true
  }, 
  meta: {
    type: Array,
  }, 
  slug: {
    type: String,
    required: true
  }, 
  brand: {
    type: String, 
  },

  coverImage: String, 
  
  date: {
    type: Date, 
    default: Date.now
  }
})

module.exports = mongoose.model('Blog', BlogSchema);