
import { Ganadores } from "../constants/Constantes.jsx"

export const checkEmpate = (NuevoTablero) => {
    return NuevoTablero.every((item) => item !== null);
}

export const checkGanador = (boardToCheck) => {
    for (const combo of Ganadores) {
        const [a, b, c] = combo;
        if(boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
            return boardToCheck[a];
        }
    }
}
