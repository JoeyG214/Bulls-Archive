import mongoose, { Document, Schema } from 'mongoose'

interface ICourse {
  courseNumber: string,
  courseName: string
}

interface ICourseModel extends ICourse, Document {}

const CourseSchema: Schema = new Schema({
  courseNumber: {
    type: String,
    required: [true, 'Course number is required'],
  },
  courseName: {
    type: String,
    required: [true, 'Course name is required'],
  }
})

CourseSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Course = mongoose.model<ICourseModel>('Course', CourseSchema)

export default Course