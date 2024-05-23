const mongoose = require('mongoose')

// X Profile Model
const xProfileSchema = new mongoose.Schema({
  fullName: String,
  username: String,
  bio: String,
  profilePicUrl: String,
  followingCount: Number,
  followerCount: Number,
  companyName: String,
  portfolioUrl: String,
})

const Profile = mongoose.model('Profile', xProfileSchema)

module.exports = Profile