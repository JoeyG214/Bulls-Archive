'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

import { toast } from 'react-toastify'

interface Course {
  id: number
  courseName: string
  courseNumber: string
  documentLinks: Array<string>
}

const getCourses = async () => {
  const res = await fetch('/api/courses', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch courses')
  }

  const courses = await res.json()
  return courses
}

const Courses = () => {

  const session = useSession()
  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    getCourses()
      .then((courses) => setCourses(courses))
      .catch((error) => toast.error(error.message))
  }, [])

  if (session.status === 'loading') {
    return (
      <section className='flex flex-col justify-center px-6 py-12 lg:px-8 mb-20'>
        <h2 className='header'>
          Loading...
        </h2>
      </section>
    )
  }

  if (session.status !== 'authenticated') {
    return (
      <section className='flex flex-col justify-center px-6 py-12 lg:px-8 mb-20'>
        <h2 className='header'>
          Must be logged in to view courses
        </h2>
        <div className='subheader'>
          <Link href='/login' className='customBtn'>
            Log In
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className='flex flex-col gap-4 p-2 sm:p-4 mt-4'>
      <div className='relative mx-2'>
        <div className='absolute flex items-center inset-y-0 left-0 pl-3 pointer-events-none'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' />
          </svg>
        </div>
        <input type='search' className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primaryGreen focus:border-primaryGreen' placeholder='Search Courses'/>
        <button type='submit' className='absolute right-2 bottom-2 customBtn'>Search</button>
      </div>

      <h2 className='header'>
        Computer Science Courses
      </h2>

      <div className='flex flex-wrap justify-center text-center'>
        {courses.map((course) => (
          <div key={course.id} className='m-2 sm:m-4 p-2 bg-gray-900/20 border-2 border-gray-900/40 rounded-lg hover:border-primaryGreen'>
            <Link href={`/courses/${course.id}`}>
              <div className='flex flex-col items-center justify-between w-32 sm:w-60 h-40'>
                <h3 className='font-semibold'>
                  {course.courseNumber}
                </h3>
                <div className=' text-gray-900/80'>
                  {course.courseName}
                </div>
                <div className='text-gray-900/50'>
                  {course.documentLinks.length} Documents
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Courses