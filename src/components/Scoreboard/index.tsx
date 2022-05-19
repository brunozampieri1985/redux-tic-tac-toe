import './Scoreboard.css'
import useScoreboard from '../../hooks/useScoreboard'

const Scoreboard: React.FC = () => {
  const { totalGames, totalWins , resetScoreboard } = useScoreboard()

  return (
    <>
      <div>
        <h3>Scoreboard</h3>
        <span>O</span>
        <span>&nbsp;-&nbsp;{totalWins('O')}</span>
        <div>
          <span>X</span>
          <span>&nbsp;-&nbsp;{totalWins('X')}</span>
        </div>
        <div>
          <span>Empates</span>
          <span>&nbsp;-&nbsp;{totalWins('T')}</span>
        </div>
        <div>
          <span>Total Games</span>
          <span>&nbsp;-&nbsp;{totalGames()}</span>
        </div>
        <div>
          <button onClick={resetScoreboard}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default Scoreboard
