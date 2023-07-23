import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

import connectToDatabase from '@/utils/database'
import User from '@/models/User'

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email:',
          type: 'email',
          placeholder: 'example@usf.edu',
        },
        password: {
          label: 'Password:',
          type: 'password',
          placeholder: 'password',
        },
      },
      async authorize(credentials) {
        await connectToDatabase()

        if (credentials?.email === undefined || credentials?.password === undefined) {
          throw new Error('Please enter your email and password!')
        }

        try {
          const user = await User.findOne({ email: credentials.email })

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(credentials.password, user.passwordHash)

            if (isPasswordCorrect) {
              return {
                id: user._id,
                email: user.email,
              }
            } else {
              throw new Error('Incorrect password!')
            }
          }
        } catch (error: unknown) {
          throw new Error(`Could not log you in! ${error}`)
        }

        return null
      },
    }),
  ],
  secret: process.env.SECRET,
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  pages: {
    error: '/login',
  },
}