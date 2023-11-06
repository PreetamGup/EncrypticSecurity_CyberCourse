import React from 'react'
import '../styles/About.css'


const About = () => {
  return (
    <div className='about mt-4'>
        <h2 className='text-center'>Welcome to Encrypticsecurity !</h2>
        <div className='aboutDetails'>
            <div>
            
            <p className='mt-3'>Welcome to EncrypticSecurity Private Limited, your premier destination for comprehensive education and training in the dynamic domains of Ethical Hacking, Cyber Security, Data Science, AI, ML, and DL. Established in the vibrant city of Mumbai in 2016, we have been at the forefront of nurturing talent, fostering innovation,
                 and equipping professionals with cutting-edge skills to navigate the ever-evolving digital landscape.
            </p>

            <p>
             <span className='fw-bold'> Our Journey:</span> Since our inception, we have dedicated ourselves to providing top-notch education and 
            training in the realm of cybersecurity and data-driven technologies. Our journey began in 2016, and over
             the years, we have consistently evolved, adapting to the rapid changes in technology and industry demands.
            </p>

            <p>
             <span className='fw-bold'>Our Offerings:</span> At EncrypticSecurity, we offer an extensive range of courses
             tailored to meet the demands of the modern professional landscape. Our expert instructors provide
              comprehensive training in Ethical Hacking, Cyber Security, Data Science, Artificial Intelligence,
               Machine Learning, and Deep Learning. We believe in equipping our students with not only theoretical knowledge 
               but also practical skills that can be directly applied in real-world scenarios.
            </p>

            <p>
             <span className='fw-bold'>Our Impact:</span> Since our establishment, we have had the privilege of shaping the careers of over 2000 professionals. 
            Our dedication to excellence has led to our recognition as a prominent education and training institute in the field.
             We take immense pride in the success stories of our alumni, 
            who have gone on to make significant contributions to their respective industries.
            </p>

            <p>
            <span className='fw-bold'>Industry Collaborations:</span> Our commitment to staying at the forefront of technological advancements is highlighted
            by our collaborations with esteemed organizations. We have had the honor of conducting seminars and workshops in 
            partnership with Mumbai Police authorities and the Indian Air Force. 
            These collaborations underscore our credibility and expertise in the domains of cybersecurity and technology.
            </p>

            <p>
             <span className='fw-bold'>Recognitions and Awards:</span> The dedication and hard work of our team have been recognized by the industry.
             We are proud recipients of three prestigious awards for being the Best Ethical Hacking and Cyber Security Training 
             Institute in Mumbai.These accolades motivate us to continually raise the bar and set new standards of excellence in education and training.
            </p>

            <p>
            <span className='fw-bold'>Our Vision:</span> Our vision is to continue being a beacon of knowledge and innovation in the 
            realms of cybersecurity and data-driven technologies. We are committed to empowering individuals 
            with the skills they need to thrive in an increasingly digital world. With a focus on practical learning,
            industry relevance, and ethical values, we aim to be the guiding light for aspiring professionals.
            </p>
            </div>

            <div className='aboutImage mt-3'>
                <img src={require("../Images/Students/aboutPage.jpeg")} alt="About" />
            </div>
            
        </div>

        
    </div>
  )
}

export default About