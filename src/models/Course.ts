import mongoose, { Document, Schema, Model } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

interface ICourse {
  courseNumber: string,
  courseName: string
  documentLinks: string[]
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
  },
  documentLinks: [{
    type: String,
  }],
})

CourseSchema.plugin(uniqueValidator)
CourseSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const Course: Model<ICourseModel> = mongoose.models.Course || mongoose.model<ICourseModel>('Course', CourseSchema)

export default Course