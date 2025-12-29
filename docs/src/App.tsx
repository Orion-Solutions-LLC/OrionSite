import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import WhatWeDo from './pages/WhatWeDo'
import Work from './pages/Work'
import HowWeWork from './pages/HowWeWork'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/work" element={<Work />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

