import { useAppSelector, useAppDispatch } from './useRedux'
import { RootState } from '../store/store'
import { IGame, newGame, PlayerType } from '../store/features/game'
import { addGame, clearScoreboard } from '../store/features/scoreboard'

const useScoreboard = () => {
    const dispatch = useAppDispatch()
  const getScoreboard = () =>
    useAppSelector((state: RootState) => state.scoreboard)
    const { games } = getScoreboard()
    const totalGames = () => games.length
    const totalWins = (player: PlayerType | 'T') => {
        return games.filter(game => game.winner === player).length
    }
    const saveGame = (game: IGame) => { 
        dispatch(addGame(game))
        dispatch(newGame()) 
    }
    
    const resetScoreboard = () => { 
        dispatch(clearScoreboard())
        dispatch(newGame()) 
    }


    return {
        totalGames,
        totalWins,
        saveGame,
        resetScoreboard
    }
}

export default useScoreboard
