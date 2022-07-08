import React from 'react'
import { Link } from 'react-router-dom';

const Game = () => {
  return (
    <Link to={`/result`}>
      <div>Game</div>
    </Link>
  )
}

export default Game;