import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Landing from './Pages/Landing/Landing';
import Registration from './Pages/Registration/Registration';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
     
  );
}

export default App;