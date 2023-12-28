import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import ActivitiesPage from './pages/ActivitiesPage';
import AboutUsPage from './pages/AboutUsPage';
import NavBar from './components/NavBar';
import RegisterFooter from './screens/RegisterFooter';
import ContactFooter from './screens/ContactFooter';
import EventsPage from './pages/EventsPage';

function App() {
  return (
    <div className="bg-[#EBE9E6] min-h-screen max-w-full">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          {/* CONDITIONAL EVENTS */}
          <Route path="/events" element={<EventsPage />} />
        </Routes>
        {/* Footer*/}
        <div className="w-full">
          <RegisterFooter />
          <ContactFooter />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
