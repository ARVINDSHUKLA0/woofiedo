import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css' 
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About'; 
import Blog from './Pages/Blog'; 
import Contact from './Pages/Contact';
import BlogDetail from './Pages/BlogDetail';
import Services from './Pages/Services';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
     <BrowserRouter>
       <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/> 
          <Route path='/services' element={<Services/>}/>
          <Route path='/blog' element={<Blog/>}/> 
          <Route path='/blog/:id' element={<BlogDetail/>}/>
          <Route path='/contact' element={<Contact/>}/>
  
      
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
