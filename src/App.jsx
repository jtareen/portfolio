import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Works from './pages/Works'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {

  return (
    <div className='font-fira-code bg-background px-4 md:px-20 lg:px-30 xl:px-40'>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> }></Route>
        <Route path='/works' element={ <Works /> } ></Route>
        <Route path='/aboutme' element={ <AboutMe /> } ></Route>
        <Route path='/contact' element={ <Contact /> } />
      </Routes>
      <hr />
      <Footer />
    </div>
  )
}

export default App
