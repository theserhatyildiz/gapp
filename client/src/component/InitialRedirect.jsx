// src/component/InitialRedirect.jsx
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const InitialRedirect = () => {
  const { loggedUser } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (loggedUser) {
      navigate('/diet')
    } else {
      navigate('/login')
    }
  }, [loggedUser])

  return <div>Loading...</div>
}

export default InitialRedirect