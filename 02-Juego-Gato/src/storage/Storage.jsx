export const SaveStorage = (NewBoard, NewTurn) => {
    window.localStorage.setItem('board', JSON.stringify(NewBoard))
    window.localStorage.setItem('turn', JSON.stringify(NewTurn))
}

export const RemoveStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}