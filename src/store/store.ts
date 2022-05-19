import { configureStore } from '@reduxjs/toolkit'
import { gameSlice } from './features/game'
import { scoreboardSlice } from './features/scoreboard'

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
    scoreboard: scoreboardSlice.reducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch