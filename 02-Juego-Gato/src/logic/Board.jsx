import { CombosWinners } from '../constants/constans'

export const checkWinner = (NewBoard) => {
  for (const Combinacion of CombosWinners) {
    const [a, b, c] = Combinacion
    if (NewBoard[a] && NewBoard[a] === NewBoard[b] && NewBoard[a] === NewBoard[c]) {
      return NewBoard[a]
    }
  }
  return null
}

export const checkEnd = (NewBoard) => {
  return NewBoard.every((Casilla) => Casilla != null)
}
