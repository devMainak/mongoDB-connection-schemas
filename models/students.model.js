const mongoose = require('mongoose')

// Student Model
const studentSchema = new mongoose.Schema({
  registrationNumber: String,
  studentID: Number,
  studentName: String,
  studentProfileImageUrl: String,
  fatherOrGurdian: String,
  strandard: String,
  emergencyContact: Number
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student
