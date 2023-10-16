
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './App.css';
import Layout from './components/Layout';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Course from './pages/Course';
import Contact from './pages/Contact';
import About from './pages/About';
import Membership from './pages/Membership';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index path='/' element={<Home/>}></Route>
            <Route path='/course' element={<Course/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/membership' element={<Membership/>}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
