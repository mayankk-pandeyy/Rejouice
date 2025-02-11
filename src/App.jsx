import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Test from './components/Test'

function App() {

  return (
    <div className='text-red-400 font-grotsek w-[100vw] h-screen scroll'>
      <Navbar/>
      <Hero/>
      <Test/>
    </div>
  )
}

export default App
