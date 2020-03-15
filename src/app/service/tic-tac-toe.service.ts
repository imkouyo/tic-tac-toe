import { Injectable } from '@angular/core';
import { PlayerInfo } from '../interface/player-info';
import {BehaviorSubject, Subject} from 'rxjs';
import { Chess } from '../interface/Chess';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MessageTipComponent} from '../component/message-tip/message-tip.component';
import {MatDialog} from '@angular/material/dialog';
import {GameOverDlgComponent} from '../component/game-over-dlg/game-over-dlg.component';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeService {
  private playerOne;
  private playerTwo;
  private board = [];
  public playerOneScore = 0;
  public playerTwoScore = 0;
  private whoCanPlace = ['circle', 'close'];
  private sizeMap = { small: 0, mid: 1, big: 2 };
  private steps: number;
  private createGame = new Subject();
  public  createGame$ = this.createGame.asObservable();
  public playerOneChess = new BehaviorSubject<Chess>({
    size: 'small',
    type: 'circle',
    value: 1});
  public playerTwoChess = new BehaviorSubject<Chess>({
    size: 'small',
    type: 'close',
    value: 1});
  constructor(private snackBar: MatSnackBar, private gameOverDlg: MatDialog) { }
  createNewGame() {
    [this.playerOne, this.playerTwo] =  this.initPlayer();
    this.initBoard();
    this.steps = (this.playerOneScore + this.playerTwoScore) % 2;
  }
  initPlayer() {
    const playerOne = new PlayerInfo('PlayerOne');
    const playerTwo = new PlayerInfo('PlayerTwo');
    return [playerOne, playerTwo];
  }
  initBoard() {
    this.board = [];
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
  getSteps() {
    return this.steps;
  }
  placeChess(index) {
    const chooseChess = this.steps % 2 === 0 ? this.playerOneChess.getValue() : this.playerTwoChess.getValue();
    if (this.isAvailable(chooseChess)) {
      if (this.board[index].value < chooseChess.value &&
        this.board[index].type !== chooseChess.type ) {
        this.board[index] = chooseChess;
        this.updateUserChess(chooseChess);
        this.changeNext();
      } else {
        this.showTip({errorMessage: 'You can not place here.'})
      }
      if (this.isGameOver()) {
        console.log(this.board);
        this.openGameOverDialog(this.isGameOver());
      }
      if (this.isDraw()) {
        this.openGameOverDialog(this.isDraw());
      }
    }
  }
  showTip(message) {
    this.snackBar.openFromComponent(MessageTipComponent, {
      duration: 3000,
      data: message
    });
  }
  changeNext() {
    this.steps += 1;
  }
  isAvailable(chess) {
    if (chess.type === 'circle') {
      const chesses = this.playerOne.getChess();
      if (chesses[this.sizeMap[chess.size]].mount > 0) {
        return this.whoCanPlace[this.steps % 2] === chess.type;
      } else {
        this.showTip({errorMessage: `You are run out of ${chess.size} chess`})
        return false;
      }
    } else {
      const chesses = this.playerTwo.getChess();
      if (chesses[this.sizeMap[chess.size]].mount > 0) {
        return this.whoCanPlace[this.steps % 2] === chess.type;
      } else {
        this.showTip({errorMessage: `You are run out of ${chess.size} chess`})
        return false;
      }
    }
  }
  isGameOver() {
    console.log(this.isRowComplete() , this.isColumnComplete() , this.isDiagonalComplete());

    return this.isRowComplete() || this.isColumnComplete() || this.isDiagonalComplete();
  }
  isDraw() {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      count += (this.playerOne.getChess()[i].mount + this.playerTwo.getChess()[i].mount);
    }
    return count === 0 ? 'draw' : null;
  }
  isRowComplete() {
    for (let i = 0; i < 3; i++) {
      if (this.board[i * 3].type !== 'space') {
        if (this.board[i * 3].type === this.board[i * 3 + 1].type &&
          this.board[i * 3].type === this.board[i * 3 + 2].type) {
          return this.board[i * 3].type;
        }
      }
    }
    return null;
  }
  isColumnComplete() {
    for (let i = 0; i < 3; i++) {
      if (this.board[i].type !== 'space') {
        if (this.board[i].type === this.board[3 + i].type &&
          this.board[i].type === this.board[6 + i].type) {
          return this.board[i].type;
        }
      }
    }
    return null;
  }
  isDiagonalComplete() {
    for (let i = 1; i < 3; i++) {
      if (this.board[4].type !== 'space') {
        if (this.board[4].type === this.board[4 - 2 * i].type &&
          this.board[4].type === this.board[4 + 2 * i].type) {
          return this.board[4].type;
        }
      }
    }
    return null;
  }
  openGameOverDialog(winner) {
      this.gameOverDlg.open(GameOverDlgComponent, {
        width: '400px',
        height: '200px',
        data: { winner },
        panelClass: 'game-over'
      }).afterClosed().subscribe(res => {
        this.createGame.next(true);
      });
  }

  updateUserChess(chess) {
    if (chess.type === 'circle') {
      const chesses = this.playerOne.getChess();
      chesses[this.sizeMap[chess.size]].mount -= 1;
      this.playerOne.setChess(chesses);
    } else {
      const chesses = this.playerTwo.getChess();
      chesses[this.sizeMap[chess.size]].mount -= 1;
      this.playerTwo.setChess(chesses);
    }
  }
}
