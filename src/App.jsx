
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import FrameTemplate from './components/FrameTemplate';

function App() {
  

  return (
    <>
     <Header></Header>
     <Outlet></Outlet>
    
     <Footer></Footer>
    </>
  )
}

export default App
