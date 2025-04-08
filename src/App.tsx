import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import HouseOfDelegates from './pages/HouseOfDelegates';
import Map from './pages/Map';
import Schedule from './pages/Schedule';

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
        <Route path="/delegates" element={
          <MainLayout>
            <HouseOfDelegates />
          </MainLayout>
        } />
        <Route path="/map" element={
          <MainLayout>
            <Map />
          </MainLayout>
        } />
        <Route path="/schedule" element={
          <MainLayout>
            <Schedule />
          </MainLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
