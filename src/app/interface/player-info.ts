import {Chess, PlayerChess} from './Chess';

export class PlayerInfo {

  private readonly name: string;
  private chess = [];
  private sizeMap = ['small', 'mid', 'big'];
  private id: number;
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

  getID() {
    return this.id;
  }

  setChess(chess: PlayerChess[]) {
    this.chess = chess;
  }

  initChess() {
    if (this.name === 'PlayerOne') {
      this.id = 1;
      for (let i = 0; i < 3; i++) {
        this.chess.push({
          mount: 3,
          size: this.sizeMap[i],
          type: 'circle'
        });
      }
    } else {
      this.id = 2;
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
