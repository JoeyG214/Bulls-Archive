import bcrypt from 'bcryptjs'

import User from '@/models/User'
import connectToDatabase from '@/utils/database'
import { NextResponse } from 'next/server'

export const POST = async (request: Request) => {
  const { name, email, password } = await request.json()

  await connectToDatabase()

  const passwordHash = await bcrypt.hash(password, 10)

  const user = new User({
    name,
    email,
    passwordHash,
  })

  try {
    await user.save()
    return NextResponse.json('User Created Successfully', { status: 201 })
  } catch (error : unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    } else {
      return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
    }
  }
}