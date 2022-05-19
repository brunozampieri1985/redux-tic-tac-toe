import './Board.css'
import useGame from '../../hooks/useGame'
import { IGame, PlayerType } from '../../store/features/game'

interface BoardProps {
  game: IGame
  size: number
  disabled?: boolean
}

const Board: React.FC<BoardProps> = ({ game, size, disabled }) => {
  const { getGame, makeMove } = useGame()

  const { moves, winner } = getGame()
  var currentPlayer = moves.length > 0 ? moves[moves.length - 1].player : null

  const handleClick = (index: number) => {
    if (!disabled) {
      let newPlayer: PlayerType =
        currentPlayer === null ? 'X' : currentPlayer === 'X' ? 'O' : 'X'
      makeMove(newPlayer, index)
    }
  }

  if (winner) {
    return (
      <div>        
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
