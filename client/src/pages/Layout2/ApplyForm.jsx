import {useState, useEffect} from 'react'
import axios from 'axios';
import "../../styles/Layout2/FeedbackForm.css"

const ApplyForm = () => {
    
  const [formData, setFormData]= useState([]);

  const handleChange=async(e,id)=>{

    try {
        const response= await axios.patch(process.env.REACT_APP_API_V1+`/formUpdate/${id}?isRead=${e.target.checked}`);
        if(response.statusText!=="OK"){
            console.warn(response.data)
        }
    } catch (error) {
        console.warn(error)
    }
    
  }
  const fetchForm=async()=>{
    
    try {
      const allform = await axios.get(process.env.REACT_APP_API_V1+'/applyform');
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
                    <td><input type='checkbox' defaultChecked={item.isRead} onChange={(e)=>handleChange(e,item._id)}/></td>
                  </tr>
                ))
              }
          </tbody>
        </table>
    </div>
  )
}

export default ApplyForm