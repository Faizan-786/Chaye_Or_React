import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    console.log("GitData",data);
    
  return (
    <div className='text-center  bg-gray-600 text-white p-4 text-3xl w-fit m-auto'>Github: {data.login}
    <img src={data.avatar_url} alt="Git picture" width={300} className='m-auto' />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Faizan-786')
    return response.json()
}