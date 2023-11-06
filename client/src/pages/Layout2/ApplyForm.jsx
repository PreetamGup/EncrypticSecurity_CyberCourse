import {useState, useEffect} from 'react'
import axios from 'axios';
import "../../styles/Layout2/FeedbackForm.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin, setUser } from '../../redux/features/userSlice';

const ApplyForm = () => {
    
  const [formData, setFormData]= useState([]);
  const navigate= useNavigate();
  const dispatch = useDispatch();

  const handleChange=async(e,id)=>{

    try {
        const response= await axios.patch(process.env.REACT_APP_API_V1+`/formUpdate/${id}?isRead=${e.target.checked}`, {},{withCredentials:true});
        if(response.statusText!=="OK"){
            console.warn(response.data)
        }
    } catch (error) {
        console.warn(error)
    }
    
  }
  const fetchForm=async()=>{
    
    try {
      const allform = await axios.get(process.env.REACT_APP_API_V1+'/applyform', {withCredentials:true});
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
        <h3>Applied Forms</h3>
        <table>
          <thead>
            <tr>
              <th style={{width:"250px"}}>Name</th>
              <th style={{width:"180px"}}>Phone No.</th>
              <th style={{width:"100px"}}>Branch</th>
              <th style={{width:"100px"}}>Date</th>
              <th style={{width:"100px"}}>Mark As Read</th>
            </tr>
          </thead>
          <tbody>
              {
                formData?.map((item)=>(
                  <tr key={item._id}>
                    <td>{item.firstName+" "+ item.lastName}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.branch}</td>
                    <td>{item.createdAt.split('T')[0].split("-").reverse().join("-")}</td>
                    <td><input id={`appliedCheckbox${item._id}`} name='appliedCheck' type='checkbox' defaultChecked={item.isRead} onChange={(e)=>handleChange(e,item._id)}/></td>
                  </tr>
                ))
              }

              
          </tbody>
        </table>
    </div>
  )
}

export default ApplyForm