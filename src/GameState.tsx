export interface IBoardRules {
    gameState: () => GameState
}

enum GameState {
    InProgress = 0,
    Win = 1,
    Lose = 2,
    Draw = 3,
}

export default GameState