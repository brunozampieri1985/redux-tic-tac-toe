import { IBoard } from "../../interfaces/IBoard"
import './Board.css'
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux"
import { makeMove } from "../../store/features/board"

interface BoardProps {
    currentBoard: IBoard,
    size: 'sm' | 'md' | 'lg',
}


const Board: React.FC<BoardProps> = ({ currentBoard, size }) => {

    const dispatch = useAppDispatch()
    const { board } = currentBoard

    const handleClick = (index: number) => {
        console.log(dispatch)
        dispatch(makeMove(index))
    }


    return (
        <div className="board" style={{
            width: '160px',
            gap: '5px',
        }}>
            {board.map((square, index) => (
                <div className="board__square" key={index} onClick={() => handleClick(index)}>
                    {square}
                </div>
            ))}            
        </div>
    )
}

export default Board