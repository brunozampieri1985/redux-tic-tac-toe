import './App.css'
import Board from './components/Board'
import { useAppSelector, useAppDispatch } from './hooks/useRedux'
import { IGame, newGame } from './store/features/game'

const App: React.FC = () => {
  const board = useAppSelector<IGame>((state) => state.game)

  const dispatch = useAppDispatch()
  const handleClickNewGame = () => {
    dispatch(newGame())
  }

  return (
    <div className="app">
      <div className="left">
        <Board game={board} size={250} />
        <br />
        <button onClick={handleClickNewGame}>Novo Jogo</button>
      </div>
      <div className="right">
        {/*  {games.map((game, index) => {          
          return <Board key={index} currentBoard={game} size={100} disabled/>;
        })} */}
      </div>
    </div>
  )
}

export default App
