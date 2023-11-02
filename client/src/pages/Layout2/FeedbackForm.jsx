import {useEffect, useState} from 'react'
import "../../styles/Layout2/FeedbackForm.css"
import axios from 'axios'


const FeedbackForm = () => {

  const [formData, setFormData]= useState([]);

  const fetchForm=async()=>{
    
    try {
      const allform = await axios.get(process.env.REACT_APP_API_V1+'/feedbackform');
      console.log(allform.data)
      setFormData(allform.data);

    } catch (error) {
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