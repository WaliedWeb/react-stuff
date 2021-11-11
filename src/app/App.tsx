import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Stuff from './pages/Stuff/Stuff';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="About" element={<p>About</p>}/>
        <Route path="stuff" element={<Stuff />} />
        <Route path="stuff/Walied" element={<p>Hallo</p>}/>
      
        <Route path="/stuff" element={<Stuff/>}>
        <Route path=":stuff" element={<Stuff />} />
        </Route>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
