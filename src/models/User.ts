import mongoose, { Document, Schema, Model } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

interface IUser {
  name: string,
  email: string,
  passwordHash: string
}

interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema({
  name : {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'Email already exists'],
    match: [/^[\w-]+(\.[\w-]+)*@usf\.edu$/, 'Please enter a valid USF email address'],
  },
  passwordHash: {
    type: String,
    required: [true, 'Password is required'],
  },
}, { timestamps: true })

UserSchema.plugin(uniqueValidator)
UserSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.passwordHash
    delete returnedObject.__v
  },
})

const User: Model<IUserModel> = mongoose.models.User || mongoose.model<IUserModel>('User', UserSchema)

export default User