import React, { useState } from 'react'
import '../styles/Contact.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

  const[name,setName]= useState("");
  const[email, setEmail]= useState("");
  const[message, setMessage]= useState("")
  


  const handleSubmit=async(e)=>{
    e.preventDefault();

    const formData= {
      formName:"FeedbackForm",
      name,
      email,
      feedback:message,
    }

    try {
      const response = await axios.post("http://localhost:8080/api/v1/feedbackform", formData);
      
      if(response.data.success){
        setName("");
        setMessage("");
        setEmail("");
        
      toast.success(` ${response.data.message}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

      }else{
        console.warn(response.data.message);
      }
      
    } catch (error) {
      console.warn(error);
    }

  }

  return (
    <div className='contactUS container'>
      <div className="contactLocation">
        <div>
          <div className='thaneContact'>
            <div>
            <h2>Thane</h2>
            <hr />
            <div className='d-flex mt-5'>
              <i className="bi bi-geo-alt-fill"></i>
              <div>
              <h5>Thane HQ Address:</h5>
              <p>901,9th Floor ,Paradise Tower Nr Mcdonald , Thane West 400601</p>
              </div>
            </div>
             

            <div className='contactInfo'>
              <div className='d-flex w-50'>
                <i className="bi bi-telephone-fill"></i>
                <div>
                  <h5>Phone:</h5>
                  <p>+917071777789</p>
                </div>
              </div>

              <div className='d-flex w-50'>
                <i className="bi bi-skype"></i>
                <div>
                  <h5>Skype:</h5>
                  <p>Johndoeteacher</p>
                </div>              
              </div>

              <div className='d-flex w-50'>
                <i className="bi bi-envelope-at-fill"></i>
                <div>
                  <h5>Email:</h5>
                  <p>enroll@encrypticsecurity.com</p>
                </div>
              </div>

              <div className='d-flex w-50'>
                <i className="bi bi-globe-central-south-asia"></i>
                <div>
                  <h5>Web:</h5>
                  <p>https://encrypticsecurity.com/</p>
                </div>
              </div>
            </div>
            </div>

            <div className='locationMap'>
            <h2>Location Info:</h2>
            <hr />
            <iframe title='thaneLocation' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.256017991847!2d72.97243367490297!3d19.18401708204286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9dbcfc638e5%3A0x3fa93aaa945bd3cc!2sEncrypticsecurity%20Pvt%20Ltd%20-%20Best%20Data%20Science%2C%20Full%20Stack%20Developer%20and%20Ethical%20Hacking%20%26%20Cyber%20Security%20Institution%20in%20Thane!5e0!3m2!1sen!2sin!4v1693052076259!5m2!1sen!2sin" width="600" height="300" style={{border:"0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          <div className='thaneContact mt-5'>
            <div>
            <h2>Ghatkopar</h2>
            <hr />
            <div className='d-flex mt-5'>
              <i className="bi bi-geo-alt-fill"></i>
              <div>
              <h5>Postal Address:</h5>
              <p>512,5th floor Suchita Business Park near Ghatkopar Railway staion 400075</p>
              </div>
            </div>
             

            <div className='contactInfo'>
              <div className='d-flex w-50'>
                <i className="bi bi-telephone-fill"></i>
                <div>
                  <h5>Phone:</h5>
                  <p>+918828282594</p>
                </div>
              </div>

              <div className='d-flex w-50'>
                <i className="bi bi-skype"></i>
                <div>
                  <h5>Skype:</h5>
                  <p>Johndoeteacher</p>
                </div>              
              </div>

              <div className='d-flex w-50'>
                <i className="bi bi-envelope-at-fill"></i>
                <div>
                  <h5>Email:</h5>
                  <p>ghatkopar@encrypticsecurity.com</p>
                </div>
              </div>

              <div className='d-flex w-50'>
                <i className="bi bi-globe-central-south-asia"></i>
                <div>
                  <h5>Web:</h5>
                  <p>https://encrypticsecurity.com/</p>
                </div>
              </div>
            </div>
            </div>

            <div className='locationMap'>
            <h2>Location Info:</h2>
            <hr />
            <iframe title='Ghatkopar' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241168.3851514782!2d72.81021368799267!3d19.184017082042864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9dbcfc638e5%3A0x3fa93aaa945bd3cc!2sEncrypticsecurity%20Pvt%20Ltd%20-%20Best%20Data%20Science%2C%20Full%20Stack%20Developer%20and%20Ethical%20Hacking%20%26%20Cyber%20Security%20Institution%20in%20Thane!5e0!3m2!1sen!2sin!4v1693053426778!5m2!1sen!2sin" width="600" height="300" style={{border:"0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          <div className='thaneContact mt-5'>
            <div>
            <h2>Andheri</h2>
            <hr />
            <div className='d-flex mt-5'>
              <i className="bi bi-geo-alt-fill"></i>
              <div>
              <h5>Postal Address:</h5>
              <p>204 2nd floor Business Point Andheri west 400053</p>
              </div>
            </div>
             

            <div className='contactInfo'>
              <div className='d-flex w-50'>
                <i className="bi bi-telephone-fill"></i>
                <div>
                  <h5>Phone:</h5>
                  <p>+918828282171</p>
                </div>
              </div>

              <div className='d-flex w-50'>
                <i className="bi bi-skype"></i>
                <div>
                  <h5>Skype:</h5>
                  <p>Johndoeteacher</p>
                </div>              
              </div>

              <div className='d-flex w-50'>
                <i className="bi bi-envelope-at-fill"></i>
                <div>
                  <h5>Email:</h5>
                  <p>andheri@encrypticsecurity.com</p>
                </div>
              </div>

              <div className='d-flex w-50'>
                <i className="bi bi-globe-central-south-asia"></i>
                <div>
                  <h5>Web:</h5>
                  <p>https://encrypticsecurity.com/</p>
                </div>
              </div>
            </div>
            </div>

            <div className='locationMap'>
            <h2>Location Info:</h2>
            <hr />
            <iframe title='Andheri' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241168.3851514782!2d72.81021368799267!3d19.184017082042864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9dbcfc638e5%3A0x3fa93aaa945bd3cc!2sEncrypticsecurity%20Pvt%20Ltd%20-%20Best%20Data%20Science%2C%20Full%20Stack%20Developer%20and%20Ethical%20Hacking%20%26%20Cyber%20Security%20Institution%20in%20Thane!5e0!3m2!1sen!2sin!4v1693053426778!5m2!1sen!2sin" width="600" height="300" style={{border:"0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <hr />
      </div>
  
      <div className="contactFeedback">
        <form onSubmit={handleSubmit}>
          <h2>Feedback:</h2>
            <div className='fnameEmail'>
              <input type="text" placeholder='Your Name' value={name} onChange={(e)=>setName(e.target.value)} />
              <input type="email" placeholder='Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <textarea name="message" id="" cols="30" rows="8" value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
            <button >Submit</button>
        </form>
      </div>

      <ToastContainer />
    </div>
  )
}

export default Contact