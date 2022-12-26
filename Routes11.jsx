import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import '../index.css';
import Home from '../pages/Home';
import Finance from '../pages/Finance';
import Worldwide from '../pages/Worldwide';
import Environment from '../pages/Environment';
import Openview from '../pages/openview';

const Routes11 = () => {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/Worldwide" element={<Worldwide />} />
            <Route path="/environment" element={<Environment />} />
            <Route path="/openview" element={<Openview />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default Routes11;