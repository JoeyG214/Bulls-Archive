import mongoose, { ConnectOptions } from 'mongoose'

let isConnected: boolean = false

const connectToDatabase = async (): Promise<void> => {
  mongoose.set('strictQuery', true)

  if (isConnected) {
    return
  }

  const MONGODB_URI: string | undefined = process.env.MONGODB_URI

  if (!MONGODB_URI) {
    throw new Error(
      'Please define the MONGODB_URI environment variable inside .env.local',
    )
  }

  const options: ConnectOptions = {
    dbName: 'BullsArchive',
    retryWrites: true,
  }

  try {
    await mongoose.connect(MONGODB_URI, options)

    isConnected = true

  } catch (error: unknown) {
    throw new Error('Could not connect to MongoDB')
  }
}

export default connectToDatabase