import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import Stuff from './pages/Stuff/Stuff';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>Main</p>}/>
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
