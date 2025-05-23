import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import HouseOfDelegates from './pages/HouseOfDelegates';
import Map from './pages/Map';
import Seating from './pages/Seating';
import Schedule from './pages/Schedule';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';
import ScavengerHunt from './pages/ScavengerHunt';
import Contests from './pages/Contests';
import Workshops from './pages/Workshops';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        {/* Regular routes with MainLayout */}
        <Route path="/" element={
          <MainLayout>
            <Home />
          </MainLayout>
        } />
        <Route path="/house-of-delegates" element={
          <MainLayout>
            <HouseOfDelegates />
          </MainLayout>
        } />
        {/* Support both paths for backwards compatibility */}
        <Route path="/delegates" element={<Navigate to="/house-of-delegates" replace />} />
        <Route path="/map" element={
          <MainLayout>
            <Map />
          </MainLayout>
        } />
        <Route path="/seating" element={
          <MainLayout>
            <Seating />
          </MainLayout>
        } />
        <Route path="/schedule" element={
          <MainLayout>
            <Schedule />
          </MainLayout>
        } />
        <Route path="/workshops" element={
          <MainLayout>
            <Workshops />
          </MainLayout>
        } />
        <Route path="/gallery" element={
          <MainLayout>
            <Gallery />
          </MainLayout>
        } />
        <Route path="/faq" element={
          <MainLayout>
            <FAQ />
          </MainLayout>
        } />
        <Route path="/scavenger-hunt" element={
          <MainLayout>
            <ScavengerHunt />
          </MainLayout>
        } />
        <Route path="/contests" element={
          <MainLayout>
            <Contests />
          </MainLayout>
        } />
        
        {/* 404 route */}
        <Route path="*" element={
          <MainLayout>
            <NotFound />
          </MainLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
