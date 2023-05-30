// import Layout from './Layout'
import Chain from './pages/Chain'
import Chart from './pages/Chart'
import Proposition from './pages/Proposition'
import Team from './pages/Team'
// import Home from './sections/Home'
import Intro from './pages/Intro'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import ThankYou from './pages/ThankYou'
import Roadmap from './pages/Roadmap'
import Tokenomics from './pages/Tokenomics'
import Echosystem from './pages/Echosystem'
import Comparison from './pages/Comparision'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/proposition" element={<Proposition />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/team" element={<Team />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/chain" element={<Chain />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/tokenomics" element={<Tokenomics />} />
          <Route path="/echosystem" element={<Echosystem />} />
          <Route path="/comparision" element={<Comparison />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
