import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const{userid} = useParams();
  return (

    <div className='text-5xl font-bold text-center p-5 bg-amber-500 border-blue-900 w-fit m-auto rounded-lg'>User :{userid} </div>
  )
}

export default User