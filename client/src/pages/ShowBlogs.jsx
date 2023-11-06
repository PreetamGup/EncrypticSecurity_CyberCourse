
import { useSelector } from 'react-redux'

const ShowBlogs = () => {

const blog = useSelector((state)=> state.blog.blog)   
  return (
    <div className='blogPage' style={{margin:"20px 200px"}}>
      <h2 style={{textAlign:"center"}}>{blog.title}</h2>
      <div style={{}} dangerouslySetInnerHTML={{__html: blog.content}}></div>
    </div>
  )
}

export default ShowBlogs