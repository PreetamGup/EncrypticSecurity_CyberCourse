import { useEffect, useState } from "react";
import "../../styles/Layout2/BlogPage.css"
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Blogs = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [addNewBlog, setaddNewBlog]=useState(false);
    const [blogTitle, setblogTitle]=useState("");
    const [allBlogs , setallBlogs  ]=useState([]);
    const [description, setDescription]= useState("");

    const handleSubmit=async(e)=>{
        e.preventDefault();

       try {
        const blogContent ={
          title:blogTitle,
          createdBy:"Pritam",
          content:draftToHtml(convertToRaw(editorState.getCurrentContent())),
          description
        }

        const response = await axios.post(process.env.REACT_APP_API_V1+"/addblogform", blogContent);

        if(response.data.success){
          setblogTitle("");
          setEditorState(EditorState.createEmpty())
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
        console.warn(error);
       }
    }
    
    const onEditorStateChange = (newEditorState) => {
      setEditorState(newEditorState);
     
    };

    const fetchingBlog=async()=>{
      
      try {
        const response = await axios.get(process.env.REACT_APP_API_V1+"/getblogs");
      
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
            <button onClick={()=>setaddNewBlog(!addNewBlog)}>Add New</button>
            <div className="BlogContainer">
                
                  {
                    allBlogs?.map((blog)=>(
                      <div key={blog._id} className="blogDiv">
                        <h3 className="blogtitle">{blog.title}</h3>
                        <p>{blog.description}</p>
                        <span style={{position:"relative", right:"5px"}}>By:- {blog.createdBy}</span>
                      </div>
                    ))
                  }
                
           </div>
        </div>
        :
        <div className='BlogForm'>
            <form className="editForm"> 
              <div>
                <div className="divInput">
                  <label htmlFor="blogTitle"><span>Title :-  </span><br />
                    <input type="text" id="blogTitle" value={blogTitle} required onChange={(e)=>setblogTitle(e.target.value)}/>
                  </label>

                  <label htmlFor="blogDescription"> <span>Description :-  </span> <br />
                    <textarea name="blogDescription" id="blogDescription" cols="70" rows="5" required value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
                  </label>
                </div>

                <div>
                  <button onClick={handleSubmit} >Publish</button>
                  <button onClick={()=>setaddNewBlog(!addNewBlog)}>Close</button>
                </div>

              </div>
                
                
               <div>
                <Editor
                    editorState={editorState}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                    onEditorStateChange={onEditorStateChange}
                    />
               </div>
            </form>
         </div>
    }
      <ToastContainer />
    </div>
  )
}

export default Blogs