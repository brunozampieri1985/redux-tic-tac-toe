import './App.css'
import Board from './components/Board'
import { useAppSelector } from './hooks/useRedux'
import { IBoard } from './interfaces/IBoard'

const App: React.FC = () => {
  const board = useAppSelector<IBoard>(state => state.board)
  
  return (
    <div className="App">
      <Board currentBoard={board} size={'sm'}/> 
    </div>
  )
}

export default App
