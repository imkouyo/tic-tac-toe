import { Injectable } from '@angular/core';
import {PlayerInfo} from '../interface/player-info';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeService {
  private playerOne;
  private playerTwo;
  private board = [];
  constructor() { }
  createNewGame() {
    [this.playerOne, this.playerTwo] =  this.initPlayer();
    this.initBoard();
  }
  initPlayer() {
    const playerOne = new PlayerInfo('PlayerOne');
    const playerTwo = new PlayerInfo('PlayerTwo');
    return [playerOne, playerTwo];
  }
  initBoard() {
    for (let i = 0; i < 9; i++ ) {
      this.board.push({
        size: null,
        type: 'space',
        value: 0
      });
    }
  }
  getPlayer(name: string) {
    return name === 'one' ? this.playerOne : this.playerTwo;
  }
  getBoard() {
    return this.board;
  }
}
