import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Game from '../pages/Game';
import Result from '../pages/Result';

const AnimatedRoutes = () => {
  return (
    <Routes>
      <Route path='/game' element={<Game />} />
      <Route path='/result' element={<Result />} />
    </Routes>
  )
}

export default AnimatedRoutes;