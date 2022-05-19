import './App.css'
import Board from './components/Board'
import useGame from './hooks/useGame'

const App: React.FC = () => {
  const  { getGame, newGame } = useGame()

  return (
    <div className="app">
      <div className="left">
        <h2>Tic-Tac-Toe</h2>
        <p>React + Redux + TS</p>
        <Board game={getGame()} size={250} />
        <br />
        <button onClick={newGame}>Novo Jogo</button>
      </div>
      <div className="right">
        
      </div>
    </div>
  )
}

export default App
