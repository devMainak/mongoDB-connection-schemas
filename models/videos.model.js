const mongoose = require('mongoose')

// Video Model
const videoSchema = new mongoose.Schema({
  title: String,
  channelName: String,
  channelLogoUrl: String,
  viewsCount: Number,
  datePosted: Date,
  thumbnailImageUrl: String,
  videoDuration: Number
})

const Video = mongoose.model('Video', videoSchema)

module.exports = Video