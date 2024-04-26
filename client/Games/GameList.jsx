import React from 'react'
import './gameStyles.css'
import GameSlider from './allGames'

const GameList = () => {
  return (
    <div className='container'>
        <div className='mt-5 gamesHeading'>
            <h1>GAMES</h1>
            <p>Innovate the world with Games</p>
        </div>
        <div>
            <h4>New Releases</h4>
            <hr/>
            <div>
                <GameSlider/>
            </div>
        </div>
    </div>
  )
}

export default GameList