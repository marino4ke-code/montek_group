import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage2 from './pages/HomePage2/HomePage2'
import ProjectsPage from './pages/Projects/Projects'
import KitchenPage from './pages/Kitchen/Kitchen'
import BathroomPage from './pages/Bathroom/Bathroom'
import FlooringPage from './pages/Flooring/Flooring'
import PaintingPage from './pages/Painting/Painting'
import CommercialPage from './pages/Commercial/Commercial'
import FullHomePage from './pages/FullHome/FullHome'
import ContactUsPage from './pages/ContactUs/ContactUs'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage2 />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/kitchen" element={<KitchenPage />} />
        <Route path="/bathroom" element={<BathroomPage />} />
        <Route path="/flooring" element={<FlooringPage />} />
        <Route path="/painting" element={<PaintingPage />} />
        <Route path="/commercial" element={<CommercialPage />} />
        <Route path="/fullhome" element={<FullHomePage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </Router>
  )
}

export default App
