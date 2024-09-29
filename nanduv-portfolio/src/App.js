import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './views/Home.js';
import Work from './views/Work.js';
import AboutMe from './views/AboutMe.js';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/work' element={<Work/>} />
         <Route path='/about-me' element={<AboutMe/>} />
       </Routes>
    </div>
  );
}

export default App;
