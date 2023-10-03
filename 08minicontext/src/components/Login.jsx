import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (

    <div className="max-w-md mx-auto p-6  rounded-lg shadow-lg bg-yellow-400 mt-40">
    <h2 className="text-2xl font-semibold mb-4">Login</h2>
    <div className="mb-4">
      <input
        type="text"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
    </div>
    <div className="mb-4">
      <input
        type="password"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
    </div>
    <button
      className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      onClick={handleSubmit}
    >
      Submit
    </button>
  </div>

  )
}

export default Login