import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css'
import AboutPage from './pages/AboutPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import HomePage from './pages/HomePage';

const App = () => {
  

  return (
    <div className = 'App'>
      <Routes>
        <Route exact path ='/' element = {<HomePage />} />
        <Route exact path ='/about' element = {<AboutPage />} />
        <Route exact path ='/events' element = {<EventsPage />} />
        <Route exact path ='/gallery' element = {<GalleryPage />} />
        <Route exact path ='/booking_events' element = {<BookingPage />} />
        <Route exact path ='/contact' element = {<ContactPage />} />




      </Routes>
 
    </div>
  );
};

export default App;
