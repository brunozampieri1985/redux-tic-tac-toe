import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGame } from './game'

interface IScoreBoard {
  games: IGame[]
}

const initialState: IScoreBoard = {
  games: [],
}

export const scoreboardSlice = createSlice({
  name: 'scoreboard',
  initialState,
  reducers: {
    addGame(state: IScoreBoard, action: PayloadAction<IGame>) {
      state.games.push(action.payload)
    },
    clearScoreboard(state: IScoreBoard) {
      state.games = []
    }
  },
})

export const { addGame, clearScoreboard} = scoreboardSlice.actions

export default scoreboardSlice.reducer
