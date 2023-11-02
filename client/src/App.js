
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './App.css';
import Layout from './components/Layout';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Course from './pages/Course';
import Contact from './pages/Contact';
import About from './pages/About';
import OurTeam from './pages/OurTeam';
import Login from './pages/Login';
import Layout2 from './components/Layout2';
import DashBoard from './pages/Layout2/DashBoard';
import FeedbackForm from './pages/Layout2/FeedbackForm'
import ApplyForm from './pages/Layout2/ApplyForm';
import Blogs from './pages/Layout2/Blogs';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index path='/' element={<Home/>}></Route>
            <Route path='course' element={<Course/>}></Route>
            <Route path='contact' element={<Contact/>}></Route>
            <Route path='about' element={<About/>}></Route>
            <Route path='blogs' element={<Blogs/>}></Route>
          </Route>

          <Route path='dashboard' element={<Layout2/>}>
            <Route index path='home' element={<DashBoard/>}></Route>
            <Route  path='feedbackform' element={<FeedbackForm/>}></Route>
            <Route  path='appliedform' element={<ApplyForm/>}></Route>
            <Route  path='blogs' element={<Blogs/>}></Route>
          </Route>

          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
