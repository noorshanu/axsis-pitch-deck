// import Layout from './Layout'
// import Chain from './pages/Chain'
import Chart from './pages/Chart'
import Proposition from './pages/Proposition'
// import Team from './pages/Team'
// import Home from './sections/Home'
import Intro from './pages/Intro'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ThankYou from "./pages/ThankYou"

function App() {
 

  return (
    <>
     <Router>
     <Routes>

     <Route path="/" element={<Intro/>} />
     <Route path="/proposition" element={<Proposition/>} />
     <Route path="/chart" element={<Chart/>} />


     </Routes>
     </Router>
    {/* <Team/> */}
    {/* <Chart/> */}
    {/* <Chain/> */}
 
    
       
    </>
  )
}

export default App
