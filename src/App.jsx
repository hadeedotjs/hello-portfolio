import { useState } from 'react'
import { Loading } from './components/Loading'
import "./index.css";
import { Navbar } from './components/Navbar';
import { Mobile } from './components/Mobile';


function App() {
  const [load, setLoad] = useState(false)
  const [menu, setMenu] = useState(false)


  return (
    <div>
      {!load && <Loading onComplete={()=> {setLoad(true)}}></Loading>}
      <div className={`min-h-screen transition-opacity duration-700 ${!load ? "opacity-0" : "opacity-100"}`}>
      <Navbar menu={menu} setMenu={setMenu}/>
      <Mobile menu={menu} setMenu={setMenu}/>
      </div>
      
    </div>
  )
}
export default App
