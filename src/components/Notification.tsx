'use client'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type Props = {
  message: string
}

const Notification = ({ message }: Props) => {

  const notify = () => toast.success(`${message}`)

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  )
}

export default Notification