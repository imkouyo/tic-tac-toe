import {Component, OnDestroy, OnInit} from '@angular/core';
import { TicTacToeService } from '../../service/tic-tac-toe.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {

  public playerOne;
  public playerTwo;
  public board = [];
  public unSub = new Subject();
  constructor(public ticTacToeService: TicTacToeService) { }

  ngOnInit(): void {
    this.ticTacToeService.createNewGame();
    this.playerOne = this.ticTacToeService.getPlayer('one');
    this.playerTwo = this.ticTacToeService.getPlayer('two');
    this.board = this.ticTacToeService.getBoard();
    this.ticTacToeService.createGame$.pipe(takeUntil(this.unSub.asObservable())).subscribe( _ => {

      this.createNewGame();
    });
  }

  ngOnDestroy(): void {
    this.unSub.next(true);
  }

  createNewGame() {
    this.ticTacToeService.createNewGame();
    this.playerOne = this.ticTacToeService.getPlayer('one');
    this.playerTwo = this.ticTacToeService.getPlayer('two');
    this.board = this.ticTacToeService.getBoard();
  }
}
