import { RootState } from "../store/store"
import { useAppDispatch, useAppSelector } from "./useRedux"
import { newGame as ngame, checkWinner, makeMove as mmove, PlayerType } from "../store/features/game"

const useGame = () => {
    const dispatch = useAppDispatch()
    const getGame = () => useAppSelector((state: RootState) => state.game)
    const { board, moves, winner } = getGame()
    const newGame = () => {
        dispatch(ngame())

    }
    const makeMove = (player: PlayerType, index: number) => {
        dispatch(mmove({player, index}))
        dispatch(checkWinner())
    }
    return {        
        getGame,
        makeMove,
        newGame
    }
}

export default useGame