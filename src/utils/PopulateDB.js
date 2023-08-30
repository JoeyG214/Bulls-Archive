// Script to populate the database with courses

const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')

// Read the JSON file
const rawData = fs.readFileSync(path.join(__dirname, 'my_courses.json'), 'utf8')
const coursesData = JSON.parse(rawData)

// Setup MongoDB connection
const MONGODB_URI = 'mongodb+srv://ErjoGuce214:kG83IaEDccr1nCqD@cluster0.c2r2atw.mongodb.net/dev?retryWrites=true&w=majority'
const options = {
  dbName: 'BullsArchive',
  retryWrites: true,
}

const CourseSchema = new mongoose.Schema({
  courseNumber: {
    type: String,
    required: [true, 'Course number is required'],
  },
  courseName: {
    type: String,
    required: [true, 'Course name is required'],
  },
  documentLinks: [{
    type: String,
  }],
})

const Course = mongoose.models.Course || mongoose.model('Course', CourseSchema)

CourseSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

// Connect to MongoDB
mongoose.connect(MONGODB_URI, options)
  .then(() => {
    // Save each course in the database
    coursesData.forEach(async (course) => {
      const newCourse = new Course({
        courseName: course.courseName,
        courseNumber: course.courseNumber,
        documentLinks: []
      })
      try {
        await newCourse.save()
      } catch (error) {
        throw new Error(error.message)
      }
    })
  })
  .catch((error) => {
    throw new Error(error.message)
  })