import React from 'react';
import Index from './pages/Index'
import { Routes, Route } from 'react-router-dom';
import Auth from './pages/auth';
import Dashboard from './components/Dashboard/Dashboard';
// import UserDashboard from './components/UserDashboard/UserDashboard';
import './style.css'
import Login from './components/auth/Login';
import EventSchedule from './components/EventSchedule';
import Payment from './components/Payment';
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/register' element={<Auth/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/EventSchedule' element={<EventSchedule/>} />
        <Route path='/*' element={<Dashboard />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
    </>
  )
}
export default App