import { Navigate, Outlet } from 'react-router-dom'

const Protected = () => {
  if (window.localStorage.getItem('ftoken')) 
  return <Outlet />
  
  return <Navigate to='/login' />
}

export default Protected