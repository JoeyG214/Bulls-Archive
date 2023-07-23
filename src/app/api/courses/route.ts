import Course from '@/models/Course'
import connectToDatabase from '@/utils/database'
import { NextResponse } from 'next/server'

export const GET = async () => {
  await connectToDatabase()

  const courses = await Course.find({})

  return NextResponse.json(courses)
}