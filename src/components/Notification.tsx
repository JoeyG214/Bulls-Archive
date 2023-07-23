'use client'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type Props = {
  message: string
  status: string
}

const Notification = ({ message, status }: Props) => {

  const notify = () => {
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
  }

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  )
}

export default Notification