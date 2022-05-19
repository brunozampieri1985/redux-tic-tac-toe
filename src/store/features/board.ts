import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IBoard } from '../../interfaces/IBoard'
import type { RootState } from '../store'

const initialState: IBoard = {
  board: Array(9).fill(''),  
  player: null 
}

export const boardSlice = createSlice({
  name: 'board',  
  initialState,
  reducers: {
    makeMove: (state: IBoard, index: PayloadAction<number>) => {
        state.player = state.player === 'X' ? 'O' : 'X'
        state.board[index.payload] = state.player
    }   
  },
})

export const { makeMove } = boardSlice.actions

export default boardSlice.reducer