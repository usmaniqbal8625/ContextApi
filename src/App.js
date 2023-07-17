import { useState } from 'react';
import { Home } from './context/Home';
import About from './context/About';

import NoteState from './context/noteState';
import {BrowserRouter, Route, Routes} from "react-router-dom"


function App() {
  return (
    <NoteState>
        <BrowserRouter>
       
       <Routes>
     <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home/>} /> */}
    
    <Route path="/about" element={<About/>} />
    
    
    
       </Routes>
       </BrowserRouter>
       </NoteState>
  );
}

export default App;
