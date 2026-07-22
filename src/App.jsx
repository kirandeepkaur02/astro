import React  from "react"
import {Routes , Route} from "react-router-dom"
import Index from "./components/Index"
import Talk from "./components/Talk"


function App() {


  return (
    <>
      <Routes>
        <Route path ="/" element={<Index/>} />
        <Route path="/talk" element={<Talk/>} />
      </Routes>
      
    </>
  )
}

export default App
