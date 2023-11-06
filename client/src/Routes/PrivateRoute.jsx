
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {

    if(localStorage.getItem("accessToken")){
        return children
    }
    
  return (
    <Navigate to={"/"}/>
  )
}

export default PrivateRoute