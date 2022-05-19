export interface IBoard { 
    board: string[]
    player: IPlayer
}

export type IPlayer = 'X' | 'O' | null

export interface IGame {
    history: IBoard[]
}