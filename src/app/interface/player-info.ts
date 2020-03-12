import {Chess, PlayerChess} from './Chess';

export class PlayerInfo {

  private readonly name: string;
  private chess = [];
  private sizeMap = ['small', 'mid', 'big'];

  constructor(name: string) {
    this.name = name;
    this.initChess();
  }

  getName() {
    return this.name;
  }

  getChess() {
    return this.chess;
  }

  setChess(chess: PlayerChess[]) {
    this.chess = chess;
  }

  initChess() {
    if (this.name === 'PlayerOne') {
      for (let i = 0; i < 3; i++) {
        this.chess.push({
          mount: 3,
          size: this.sizeMap[i],
          type: 'circle'
        });
      }
    } else {
      for (let i = 0; i < 3; i++) {
        this.chess.push({
          mount: 3,
          size: this.sizeMap[i],
          type: 'close'
        });
      }
    }
  }
}
