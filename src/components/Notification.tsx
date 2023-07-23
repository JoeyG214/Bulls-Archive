'use client'

import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type Props = {
  message: string
  status: 'success' | 'error' | 'info' | 'warning' | 'default'
}

const Notification = ({ message, status }: Props) => {

  useEffect(() => {
    switch (status) {
    case 'success':
      toast.success(message)
      break
    case 'error':
      toast.error(message)
      break
    case 'info':
      toast.info(message)
      break
    case 'warning':
      toast.warn(message)
      break
    default:
      toast(message)
      break
    }
  }, [message, status])

  return (
    <div>
      <ToastContainer />
    </div>
  )
}

export default Notification