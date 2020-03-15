import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TicTacToeService} from '../../service/tic-tac-toe.service';

@Component({
  selector: 'app-game-over-dlg',
  templateUrl: './game-over-dlg.component.html',
  styleUrls: ['./game-over-dlg.component.scss']
})
export class GameOverDlgComponent implements OnInit {
  winner: string;
  isDraw: boolean;
  constructor(@Inject(MAT_DIALOG_DATA)private data: any,
              private gameOverDlg: MatDialogRef<GameOverDlgComponent>,
              private ticTacToeService: TicTacToeService) {
    this.isDraw = data.winner === 'draw';
    this.winner = data.winner === 'circle' ? 'PlayerOne' : 'PlayerTwo';
  }
  ngOnInit(): void {
  }
  nextGame() {
    if (this.data.winner !== 'draw') {
      this.data.winner === 'circle' ? this.ticTacToeService.playerOneScore++ : this.ticTacToeService.playerTwoScore++;
    }
    this.gameOverDlg.close('next');
  }

}
