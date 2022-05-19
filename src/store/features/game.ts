import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type PlayerType = 'X' | 'O' | null

export interface IAction {
  player: PlayerType
  index: number
}

export interface IGame {
  board: string[]
  winner: PlayerType | 'T'
  moves: IAction[]
}

const initialState: IGame = {
  board: Array(9).fill(''),
  winner: null,
  moves: [],
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    makeMove(state: IGame, action: PayloadAction<IAction>) {
      const { player, index } = action.payload
      if (player && state.board[index] === '') {
        state.board[index] = player
        state.moves.push({ player, index })
      }
    },
    newGame(state: IGame) {
      state.board = Array(9).fill('')
      state.winner = null
      state.moves = []
    },
    checkWinner(state: IGame) {
      const { board } = state
      if (board[0] === board[1] && board[1] === board[2] && board[0] !== '') {
        state.winner = board[0] as PlayerType
        return
      }
      if (board[3] === board[4] && board[4] === board[5] && board[5] !== '') {
        state.winner = board[3] as PlayerType
        return
      }
      if (board[6] === board[7] && board[7] === board[8] && board[8] !== '') {
        state.winner = board[6] as PlayerType
        return
      }
      if (board[0] === board[3] && board[3] === board[6] && board[6] !== '') {
        state.winner = board[0] as PlayerType
        return
      }
      if (board[1] === board[4] && board[4] === board[7] && board[7] !== '') {
        state.winner = board[1] as PlayerType
        return
      }
      if (board[2] === board[5] && board[5] === board[8] && board[8] !== '') {
        state.winner = board[2] as PlayerType
        return
      }
      if (board[0] === board[4] && board[4] === board[8] && board[8] !== '') {
        state.winner = board[0] as PlayerType
        return
      }
      if (board[2] === board[4] && board[4] === board[6] && board[6] !== '') {
        state.winner = board[2] as PlayerType
        return
      }
      if (state.moves.length === 9) {
        state.winner = 'T'
      }
    },
  },
})

export const { makeMove, checkWinner, newGame } = gameSlice.actions

export default gameSlice.reducer
