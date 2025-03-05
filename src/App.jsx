import { useState } from 'react'
import { Loading } from './components/Loading'
import "./index.css";
import { Navbar } from './components/Navbar';
import { Mobile } from './components/Mobile';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';


function App() {
  const [load, setLoad] = useState(false)
  const [menu, setMenu] = useState(false)


  return (
    <div>
      {!load && <Loading onComplete={()=> {setLoad(true)}}></Loading>}
      <div className={`min-h-screen transition-opacity duration-700 ${!load ? "opacity-0" : "opacity-100"}`}>
      <Navbar menu={menu} setMenu={setMenu}/>
      <Mobile menu={menu} setMenu={setMenu}/>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      </div>
      
    </div>
  )
}
export default App
