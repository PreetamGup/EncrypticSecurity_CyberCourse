import React from 'react'
import { courseData } from '../utils/courseDetail'
import '../styles/Course.css'
const Course = () => {


const handleClick = (idx, title) => {
  if(document.getElementById("courseId"+idx).className==="courseTopicShow"){
    document.getElementById("courseId"+idx).className="courseTopics"
  }else{
    document.getElementById("courseId"+idx).className="courseTopicShow"
  }

  if(document.getElementById(`courseNames${idx}`).innerText===`+ ${title}`){
    document.getElementById(`courseNames${idx}`).innerText=`- ${title}`
  }
  else{
    document.getElementById(`courseNames${idx}`).innerText=`+ ${title}`
  }
}


  return (
    <div className='coursePage'>
      {
        courseData.map((course,idx)=>(
          <div key={`courseId${idx}`}>
            <h4 className='courseNames' id={`courseNames${idx}`} onClick={()=>handleClick(idx, course.title)}>+ {course.title}</h4>
            <div className='courseTopics' id={`courseId${idx}`}>
               <ul>
                  {
                    course.topics.map((topic, idx)=><li key={topic+idx}>{topic}</li>)
                  }
               </ul>

               <div className='extraDetails'>
                  <ul>
                    <li className='courseList'>Level : {course.level}</li>
                    <li className='courseList'>Duration : {course.duration}</li>
                    <li className='courseList'>Lecture : {course.lecture}</li>
                    <li className='courseList'>Subject : {course.subject}</li>
                    <li className='courseList'>Language : {course.language?.join(", ")}</li>
                    <li className='courseList'>Material Includes :
                      <ul>  
                        {
                          course.materialIncludes?.map((item,idx)=><li key={item+idx}>{item}</li>)
                        }
                      </ul>
                    </li>
                  </ul>
               </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Course