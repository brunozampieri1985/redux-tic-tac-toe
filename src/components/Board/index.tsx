import './Board.css'
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import {
  IGame,
  PlayerType,
  checkWinner,
  makeMove,
} from '../../store/features/game'

interface BoardProps {
  game: IGame
  size: number
  disabled?: boolean
}

const Board: React.FC<BoardProps> = ({ game, size, disabled }) => {
  const dispatch = useAppDispatch()
  const moves = useAppSelector((state) => state.game.moves)
  const winner = useAppSelector((state) => state.game.winner)
  var currentPlayer = moves.length > 0 ? moves[moves.length - 1].player : null

  const handleClick = (index: number) => {
    if (!disabled) {
      let newPlayer: PlayerType =
        currentPlayer === null ? 'X' : currentPlayer === 'X' ? 'O' : 'X'
      dispatch(makeMove({ player: newPlayer, index }))
      dispatch(checkWinner())
      console.log(winner)
    }
  }

  if (winner) {
    return (
      <div>
        {/* {winner && moves.length === 9 && <div>Empate</div>} */}
        {winner && <div>{winner === 'T' ? 'Empate' : `${winner} VENCEU!`}</div>}
      </div>
    )
  }

  return (
    <>
      <div
        className="board"
        style={{
          width: `${size + 10}px`,
          gap: '5px',
        }}>
        {game.board.map((square, index) => (
          <div
            className="board__square"
            key={index}
            style={{
              width: `${size / 3}px`,
              height: `${size / 3}px`,
              fontSize: `${size / 6}px`,
            }}
            onClick={() => handleClick(index)}>
            {square}
          </div>
        ))}
      </div>
    </>
  )
}

export default Board
