import { useEffect, useState, useRef, useMemo }   from "react";
import "../../styles/Layout2/BlogPage.css"
import JoditEditor from 'jodit-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setBlog } from "../../redux/features/blogSlice";
import { setLogin, setUser,setLoading } from "../../redux/features/userSlice";
import Loader from "../../components/Loader";

const Blogs = ({placeholder}) => {

    const [addNewBlog, setaddNewBlog]=useState(false);
    const [blogTitle, setblogTitle]=useState("");
    const [allBlogs , setallBlogs  ]=useState([]);
    const [description, setDescription]= useState("");
    const [blogImageLink, setBlogImageLink]=useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userName= useSelector((state)=> state.user.user.name)
    const loading= useSelector((state)=>state.user.loading)

    const editor = useRef(null);
	const [content, setContent] = useState('');


  const configObj ={
    readonly: false,
    placeholder: placeholder || "Start typing..."
  }
	const config = useMemo(()=>
    configObj
		,
		[placeholder]
	);

  console.log(loading)
   
    const handleSubmit=async(e)=>{
        e.preventDefault();

       try {
        const blogContent ={
          title:blogTitle,
          createdBy:userName,
          content,
          description,
          imageLink:blogImageLink
        }

        dispatch(setLoading(true))
        const response = await axios.post(process.env.REACT_APP_API_V1+"/addblogform", blogContent, {withCredentials:true});

        dispatch(setLoading(false))
        if(response.data.success){
          setblogTitle("");
          setContent("")
          setDescription("")
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
          console.warn(response);
        }

       } catch (error) {
        if(error.response.status ===400 || error.response.status === 401){
          localStorage.clear();
          dispatch(setLogin(false));
          dispatch(setUser({}));
          window.alert("Login Again")
          
          navigate("/")
          
        }
        console.warn(error);
       }
    }
    

    const fetchingBlog=async()=>{
      
      try {
        dispatch(setLoading(false))
        const response = await axios.get(process.env.REACT_APP_API_V1+"/getblogs");
        dispatch(setLoading(false))
      
        if(response.data.success){
          setallBlogs(response.data.allBlogs)
        }else{
          console.warn(response.data)
        }
        
      } catch (error) {
        console.warn(error)
      }

    }

  


    useEffect(()=>{
      fetchingBlog()
    },[addNewBlog])


  return (
    <div className='BlogPage'>    
    {
        !addNewBlog?
        <div className="BlogContainer">
            <h3 style={{textAlign:"center"}}>Blogs</h3>
            {window.location.pathname==="/blogs" ? "": <button onClick={()=>setaddNewBlog(!addNewBlog)}>Add New</button> }
            
           {
            loading?
            <Loader/>
            :
            <div>
                
            {
              allBlogs?.map((blog)=>(
                <div key={blog._id} className="blogDiv" onClick={()=>{dispatch(setBlog(blog)) ; navigate(`/blogs/${blog._id}`)}}>
                  {/* <div className="blogImageContainer"> */}
                    <img src={blog.imageLink} alt="" />
                  {/* </div> */}
                 <div className="blogContentContainer">
                  <h4 className="blogtitle">{blog.title}</h4>
                    <p>{`${blog.description.split(" ").slice(0,20).join(" ")}...`}</p>
                    <span style={{}}>{`Date:- ${blog.createdAt.split('T')[0].split("-").reverse().join("-")}   By:- ${blog.createdBy}`} </span>
                  </div>
                </div>
              ))
            }     
     </div>
           }
        </div>
        :
       
        <div className="BlogForm">

          <form className="editForm"> 
             <div>
              <div className="divInput">
                <label htmlFor="blogTitle"><span>Title :-  </span><br />
                  <input type="text" id="blogTitle" value={blogTitle} required onChange={(e)=>setblogTitle(e.target.value)}/>
                </label>

                <label htmlFor="blogDescription"> <span>Description :-  </span> <br />
                    <textarea name="blogDescription" id="blogDescription" cols="70" rows="5" required value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
                </label>

                <label htmlFor="blogImage"><span>Image Link :-  </span><br />
                  <input type="text" id="blogImage" value={blogImageLink} required onChange={(e)=>setBlogImageLink(e.target.value)}/>
                </label>
               <br />
              </div>

                <div>
                  <button onClick={handleSubmit} >Publish</button>
                  <button onClick={()=>setaddNewBlog(!addNewBlog)}>Close</button>
                </div>

            </div>

           
            </form>
            <>
              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                // onChange={newContent =>setContent(newContent)}
              />
            </>
        </div>

    }
      <ToastContainer />
    </div>
  )
}

export default Blogs