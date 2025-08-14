import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Landing from './Pages/Landing/Landing';
import Registration from './Pages/Registration/Registration';
import Onboarding from './Pages/Onboarding/Onboarding';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
     
  );
}

export default App;