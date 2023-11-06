import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import "../styles/Home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "bootstrap-icons/font/bootstrap-icons.css";
import {FaRegHandshake} from "react-icons/fa"
import axios from 'axios';

const Home = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [formMessage, setformMessage] = useState(null);


  const branches = ["Thane", "Andheri", "Ghatkopar"];

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Perform any data processing or submission here
    const formData= {
      formName:"ApplyForm",
      firstName,
      lastName,
      phoneNumber,
      branch:selectedBranch
    }

    try {
      const response= await axios.post(process.env.REACT_APP_API_V1+'/applyform', formData);

      if(response.data.success){
        setSelectedBranch("");
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setformMessage(response.data.message);

      }else{
        setformMessage(response.data.message);
      }
      

    } catch (error) {
      console.warn(error);
    }

  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".mainheading",
      1,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1 }
    );

    gsap.fromTo(
      "#para",
      2,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, scrollTrigger: "#para", delay: 1 }
    );
    gsap.fromTo(
      "#cyberImage",
      2,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, scrollTrigger: "#cyberImage", delay: 1 }
    );
    gsap.fromTo(
      ".courseCard",
      1,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.3,
        scrollTrigger: ".courseCards",
        delay: 0.5,
      }
    );
    gsap.fromTo(
      ".courseContent",
      1,
      { y: -80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.5,
        scrollTrigger: ".courseContent",
        delay: 0.5,
      }
    );

      gsap.fromTo(".achievements",1,{y:-80, opacity:0},{y:0, opacity:1,scrollTrigger: ".achievements", delay:0.5 })

      gsap.fromTo(".courseForm",2,{y:-80, x:-100, opacity:0},{y:0,x:0, opacity:1,scrollTrigger: ".courseForm", delay:0.5 })


  }, []);

  return (
    <div className="home container">
      <div className="headingHome d-flex flex-column">
        <h1 className="mb-5 mainheading">
          Cybersecurity is the future. <br /> Are you ready?
        </h1>
        <div className="mt-5 titleheading ">
          <div className="" id="para">
            {/* <h4>Become a certified ethical hacker with our in-depth courses on hacking and security. </h4>
                <p>Master the skills you need to prevent and respond to cyberattacks with our cybersecurity courses.</p> */}
            <h3>
              Guardians of the Code: Dive into <br /> Hacking & Cybersecurity
            </h3>
            <ul>
              <li>Ethical hacking prowess.</li>
              <li>Cyber threat landscapes.</li>
              <li>Shield critical data.</li>
              <li>Elevate your expertise.</li>
            </ul>
            <h4>
              Master the skills you need to prevent and respond to cyberattacks
              with our cybersecurity courses.
            </h4>
          </div>
          <img
            src={require("../Images/cyberImage1.png")}
            alt="cyberImage"
            id="cyberImage"
          />
        </div>
      </div>

      <div className="topCourses mt-5">
        <div className="courseHead">
          <h1>Top Courses</h1>
          <div className="">
            <span>Newest</span>
            <span>Oldest</span>
            <span>Overall Rating</span>
          </div>
        </div>

        <div className="courseCardInfo">
          <div className="courseCard">
            <img
              src={require("../Images/courseImage/cyberSecurity2.jpg")}
              alt="CyberSecurity2"
              decoding="async"
            />
            <div className="courseDetail">
              <h6>Ethical Hacking and Cyber Security</h6>
              <h5>CEH v12 Ec Council</h5>
              <span className="fw-bold">₹45,000</span>
              <div className="detailHide">
                <p>hello</p>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
              </div>
            </div>
            <div className="hotCourse">Hot</div>
            <div className="featured fw-bold">FEATURED</div>
          </div>

          <div className="courseCard">
            <img
              src={require("../Images/courseImage/cyberSecurity3.jpg")}
              alt="CyberSecurity3"
              decoding="async"
            />
            <div className="courseDetail">
              <h6>Ethical Hacking and Cyber Security</h6>
              <h5>Encryptic's Exploit Development</h5>
              <span className="fw-bold">Free</span>
              <div className="detailHide">
                <p>
                  This intensive course takes you on a journey through the
                  depths of exploit development, cove...
                </p>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
              </div>
            </div>
          </div>

          <div className="courseCard">
            <img
              src={require("../Images/courseImage/cyberSecurity4.jpg")}
              alt="CyberSecurity4"
              decoding="async"
            />
            <div className="courseDetail">
              <h6>Ethical Hacking and Cyber Security</h6>
              <h5>Encryptic's Cyber Forensics</h5>
              <span className="fw-bold">Free</span>
              <div className="detailHide">
                <p>
                  This comprehensive course provides an in-depth exploration of
                  the field of computer forensic..
                </p>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
              </div>
            </div>
            <div className="hotCourse">Hot</div>
          </div>

          <div className="courseCard">
            <img
              src={require("../Images/courseImage/apiTesting.jpg")}
              alt="Api Testing"
              decoding="async"
            />
            <div className="courseDetail">
              <h6>Ethical Hacking and Cyber Security</h6>
              <h5>Encryptic's API Pen Testing</h5>
              <span className="fw-bold">Free</span>
              <div className="detailHide">
                <p>
                  This comprehensive course delves into the world of APIs, their
                  interaction, security, and ex...
                </p>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
              </div>
            </div>
            <div className="hotCourse">Hot</div>
          </div>

          <div className="courseCard">
            <img
              src={require("../Images/courseImage/cyberSecurityHacking.jpg")}
              alt="cyberSecurityHacking"
              decoding="async"
            />
            <div className="courseDetail">
              <h6>Data Science And AI</h6>
              <h5>Data Science Architech Program - 6 months</h5>
              <span className="fw-bold">Free</span>
              <div className="detailHide">
                <p>
                  In the ever-evolving landscape of data-driven decision-making,
                  proficiency in various tools ...
                </p>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
              </div>
            </div>
            <div className="hotCourse">Hot</div>
          </div>

          <div className="courseCard">
            <img
              src={require("../Images/courseImage/mobileSecurity.jpg")}
              alt="Mobile Security"
              decoding="async"
            />
            <div className="courseDetail">
              <h6>Ethical Hacking and Cyber Security</h6>
              <h5>Encryptic's Mobile Testing</h5>
              <span className="fw-bold">₹34000</span>
              <div className="detailHide">
                <p></p>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
              </div>
            </div>
          </div>

          <div className="courseCard">
            <img
              src={require("../Images/courseImage/webSecurity.jpg")}
              alt="Web Security"
              decoding="async"
            />
            <div className="courseDetail">
              <h6>Ethical Hacking and Cyber Security</h6>
              <h5>Encryptic's Web Application Penetration Testing</h5>
              <span className="fw-bold">₹24000</span>
              <div className="detailHide">
                <p></p>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="courseBrochure mt-5">
        <div className="courseContent">
          <div className="courseName bg-danger">
            <h3 className="mb-0">CEH v12</h3>
            <span>Lite</span>
            <span className="tagHotPopular">POPULAR</span>
          </div>
          <div className="courseContentDetail">
            <div className="mt-4 text-center lh-1">
              <sup className="RupeeSymbol fw-bold">₹</sup>{" "}
              <span className="coursePrice">45000</span>
              <br />
              <span>One-Time Purchase</span>
            </div>

            <div className="courseFeature mt-4">
              <span className="p-2 Feature">
                <i className="bi bi-check-circle"></i> Theory Exam
              </span>
              <span className="p-2 Feature">
                <i className="bi bi-check-circle"></i> Exam Preparation
              </span>
              <span className="p-2 Feature">
                <i className="bi bi-check-circle"></i> Mock Interview
              </span>
              <span className="p-2 Feature">
                <i className="bi bi-check-circle"></i> Classroom Training
              </span>
              <span className="p-2 Feature">
                <i className="bi bi-check-circle"></i> Live Project
              </span>
              <span className="p-2 Feature">
                <i className="bi bi-check-circle"></i> No Cost EMI
              </span>
              <button className="mt-5 bg-danger">Download Brochure</button>
              <span className="mt-2">One-Shot Payment 10000Rs OFF</span>
            </div>
          </div>
        </div>

        <div className="courseContent">
          <div className="courseName bg-primary">
            <h3 className="mb-0">Master's In Data Science</h3>
            <span>Best Data Science Institude</span>
            <span className="tagHotPopular">HOT</span>
          </div>
          <div className="courseContentDetail">
            <div className="mt-4 text-center lh-1">
              <sup className="RupeeSymbol fw-bold">₹</sup>{" "}
              <span className="coursePrice">5000</span>
              <br />
              <span>Monthly</span>
            </div>

            <div className="courseFeature mt-4">
              <span className="p-2 Feature">
                <i className="bi bi-check-circle"></i> 100% Job Guarantee
              </span>
              <span className="p-2 Feature">
                <i className="bi bi-check-circle"></i> Classroom Training
              </span>
              <span className="p-2 Feature">
                <i className="bi bi-check-circle"></i> Lab Sessions
              </span>
              <span className="p-2 Feature">
                <i className="bi bi-check-circle"></i> Real Live Project
              </span>
              <span className="p-2 Feature">
                <i className="bi bi-check-circle"></i> Pay After Placement
              </span>
              <span className="p-2 Feature">
                <i className="bi bi-check-circle"></i> No Cost EMI
              </span>
              <button className="mt-5 bg-primary">Download Brochure</button>
              <span className="mt-2">One-Shot Payment Discount</span>
            </div>
          </div>
        </div>

        <div className="courseContent">
          <div className="courseName bg-danger">
            <h3 className="mb-0">Master's In Cyber Security</h3>
            <span>Most Demanded Course</span>
            <span className="tagHotPopular">POPULAR</span>
          </div>
          <div className="courseContentDetail">
            <div className="mt-4 text-center lh-1">
              <sup className="RupeeSymbol fw-bold">₹</sup>{" "}
              <span className="coursePrice">8000</span>
              <br />
              <span>Monthly</span>
            </div>

            <div className="courseFeature mt-4">
              <span className="p-2 Feature">
                <i className="bi bi-check-circle"></i> CEH v12 Theory + Practical
              </span>
              <span className="p-2 Feature">
                <i className="bi bi-check-circle"></i> 100% Job Guaranteed
              </span>
              <span className="p-2 Feature">
                <i className="bi bi-check-circle"></i> Pay After Placement
              </span>
              <span className="p-2 Feature">
                <i className="bi bi-check-circle"></i> Classroom Training
              </span>
              <span className="p-2 Feature">
                <i className="bi bi-check-circle"></i> Mock Interview | Exam Prep
              </span>
              <span className="p-2 Feature">
                <i className="bi bi-check-circle"></i> Hack the Box Subscription*
              </span>
              <span className="p-2 Feature">
                <i className="bi bi-check-circle"></i> No Cost EMI
              </span>
              <button className="mt-2 bg-danger">Download Brochure</button>
              <span className="mt-2">One-Shot Payment 10000Rs OFF</span>
            </div>
          </div>
        </div>
      </div>

      <div className="achievements">
        <h2>OUR ACHIEVEMENTS</h2>
        <p>Here your can review some statistics about our Education Center</p>

        <div>
          <div>
            <FaRegHandshake className="icon"/><br />   
            <span className="aRecord">2000</span><br />
            <span>TRAINED PROFESSIONAL</span>
          </div>
          <div>
            <i className="bi bi-bell"></i><br />
            <span className="aRecord">1500</span><br />
            <span>CLASS COMPLETED</span>   
          </div>

          <div>
            <i className="bi bi-people"></i><br />
            <span className="aRecord">2000</span><br />
            <span>STUDENT ENROLLED</span>   
          </div>

          <div>
            <i className="bi bi-briefcase"></i><br />
            <span className="aRecord">37</span><br />
            <span>CERTIFIED TEACHERS</span> 
          </div>
        </div>
      </div>

      <div className="mt-5 courseForm">
        <img
          className="mt-3"
          src="https://encrypticsecurity.com/wp-content/uploads/2023/09/photoeffecthexacollagemockup5fp-1024x712.jpg"
          alt="encryptic Security"
        />


        <form onSubmit={handleSubmit} className="mt-3 formContainer">
          <h3 className="text-center">
            Fill the form for Pay After Placement Job
          </h3>
          <div>
            <div>
              <label htmlFor="firstName">First Name:-</label>
              <br />
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <br />
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <br />
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="branch">Select Branch:-</label>
              <br />
              <select
                id="branch"
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                required
              >
                <option value="">Select a branch</option>
                {branches.map((branch) => (
                  <option key={branch} value={branch}>
                    {branch}
                  </option>
                ))}
              </select>
            </div>
                 
                  {
                    formMessage &&<>  <br /><div style={{color:"red"}}>
                      
                      {formMessage}
                    </div></>
                  }

            <br />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      <div className="placementPartner mt-5">
        <h3 className="text-center mt-5 mb-4">OUR PLACEMENT PARTNER</h3>
        <div className="marquee">
        <Marquee className="MarqueeDiv" pauseOnHover="false" gradientWidth="200">
           <div> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Reliance_Jio_Logo.svg/1200px-Reliance_Jio_Logo.svg.png" width={200} height={200} alt="jio Logo" /></div>
           <div> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Tech_Mahindra_New_Logo.svg/1200px-Tech_Mahindra_New_Logo.svg.png" width={200} height={200} alt="Tech Mahindra" /></div>
           <div> <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" width={200} height={200} alt="Wipro" /></div>
           <div> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/250px-Tata_Consultancy_Services_Logo.svg.png" width={200} height={200} alt="TCS" /></div>
           <div> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Reserve_Bank_of_India_logo.svg/300px-Reserve_Bank_of_India_logo.svg.png" width={200} height={200} alt="Bank" /></div>


        </Marquee>
        </div>
      </div>

      <div className="reviews mt-5">
        <h2 className="text-center">Student Reviews</h2>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="studentReview">
                <div className="StudentInfo">
                  <div className="studentPhoto">
                    <img src={require("../Images/Students/Student1.jpg")} alt="Student2" />
                  </div>
                  <h5>Sakshi Jaiswal</h5>
                  <p>System Engineer</p>
                </div>
                
                <div className="studentComment">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
                    Sit mollitia natus saepe consequuntur nobis, optio neque assumenda,
                     voluptate atque molestias vero doloremque. Distinctio, est iusto.
                     </p>
                </div>

            </div>
          </div>
          <div className="carousel-item">
            <div className="studentReview">
                  <div className="StudentInfo">
                    <div className="studentPhoto">
                      <img src={require("../Images/Students/Student2.jpg")} alt="Student2" />
                    </div>
                    <h5>Rojit Mishra</h5>
                    <p>Full Stack Engineer</p>
                  </div>
                  
                  <div className="studentComment">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
                      Sit mollitia natus saepe consequuntur nobis, optio neque assumenda,
                      voluptate atque molestias vero doloremque. Distinctio, est iusto.
                      </p>
                  </div>
              </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    </div>
  );
};

export default Home;
