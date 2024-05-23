const mongoose = require('mongoose')

// Employee Data Model
const employeeSchema = new mongoose.Schema({
  idNumber: Number,
  employeeImgUrl: String,
  name: String,
  jobPosition: String,
  dateOfBirth: Date,
  email: String,
  contactNumber: Number,
  address: String,
})

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee

