import mongoose, { ConnectOptions } from 'mongoose'

let isConnected: boolean = false

const connectToDatabase = async (): Promise<void> => {
  mongoose.set('strictQuery', true)

  if (isConnected) {
    console.log('MongoDB is already connected')
    return
  }

  const MONGODB_URI: string | undefined = process.env.MONGODB_URI

  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    )
  }

  const options: ConnectOptions = {
    dbName: "BullsArchive",
    retryWrites: true,
  }

  try {
    await mongoose.connect(MONGODB_URI, options)

    isConnected = true

    console.log('MongoDB connected')
  } catch (error: unknown) {
    let errorMessage: string = 'Error connecting to MongoDB: '

    if (error instanceof Error) {
      errorMessage += error.message
    }

    console.log(errorMessage)
  }
}

export default connectToDatabase