import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "../../styles/Layout2/FeedbackForm.css"
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setLogin, setUser } from '../../redux/features/userSlice';


const FeedbackForm = () => {

  const [formData, setFormData]= useState([]);
  const navigate= useNavigate();
  const dispatch = useDispatch();


  const fetchForm=async()=>{
    
    try {
      const allform = await axios.get(process.env.REACT_APP_API_V1+'/feedbackform', {withCredentials:true});
      
      setFormData(allform.data);

    } catch (error) {
      if(error.response.status ===400 || error.response.status === 401){
        localStorage.clear();
        dispatch(setLogin(false));
        dispatch(setUser({}));
        window.alert("Login Again")
        
        navigate("/")
        
      }
      console.warn(error)
    }
    
  }

  useEffect(() => {
    
    fetchForm()

  },[])
  
  
  
   return (
    <div className='FeedbackForm' style={{}}>
        <h3>Feedback Forms</h3>
        <table>
          <thead>
            <tr>
              <th style={{width:"180px"}}>Name</th>
              <th style={{width:"250px"}}>Email</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
              {
                formData?.map((item)=>(
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.feedback}</td>
                  </tr>
                ))
              }
          </tbody>
        </table>
    </div>
  )
}

export default FeedbackForm