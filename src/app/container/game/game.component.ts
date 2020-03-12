import { Component, OnInit } from '@angular/core';
import { TicTacToeService } from '../../service/tic-tac-toe.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public playerOne;
  public playerTwo;
  public board = [];
  constructor(private ticTacToeService: TicTacToeService) { }

  ngOnInit(): void {
  }

  createNewGame() {
    this.ticTacToeService.createNewGame();
    this.playerOne = this.ticTacToeService.getPlayer('one');
    this.playerTwo = this.ticTacToeService.getPlayer('two');
    this.board = this.ticTacToeService.getBoard();
  }
}
