import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { fetchUserDetails } from './utils/auth';
import { HeroSection } from './components/hero/HeroSection';
import ConsultationForm from './components/calculator/calculator';
import ProjectsPage from './pages/project/Project';
import AboutPage from './pages/about/About';
import ContactForm from './pages/contact/Contact';
import Dashboard from './pages/admin/dashboard/Dashboard';
import ConsultationsPage from './pages/admin/consultation/consultation';
import ConsumerDetailsPage from './pages/admin/consumer/consumer';
import LoginPage from './pages/LoginDialog/LoginDialog';
import { SignupForm } from './pages/LoginDialog/signup';
import ProtectedRoute from './pages/LoginDialog/ProtectedRoute';
import { UsersTable } from './pages/admin/users/Users';
import LoadingAnimation from './pages/loader/loader';
import SlidingNav from './components/hero/sidesection';
import ApplicationsTable from './pages/admin/joinourteam/adminjoinourteam';
import ScrollToTop from './components/scrolltop/Scrolltop';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      try {
        const userDetails = await fetchUserDetails();
        setUser(userDetails ? userDetails : null);
      } catch (error) {
        console.error('Error validating token:', error);
      }
      setLoading(false);
    };

    validateToken();
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <>
    <SlidingNav/>
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupForm/>}/>
        <Route path="/calculator" element={<ConsultationForm />} />
        <Route path='/project' element={<ProjectsPage/>} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/admin' element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
        <Route path='/consultations' element={<ProtectedRoute><ConsultationsPage /></ProtectedRoute>} />
        <Route path='/consumers' element={<ProtectedRoute><ConsumerDetailsPage /></ProtectedRoute>} />
        <Route path='/setting' element={<ProtectedRoute><UsersTable /></ProtectedRoute>} />
        <Route path='/adminjoinourteam' element={<ProtectedRoute><ApplicationsTable /></ProtectedRoute>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
