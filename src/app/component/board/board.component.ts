import {Component, Input, OnInit} from '@angular/core';
import {TicTacToeService} from '../../service/tic-tac-toe.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() board;
  constructor(private ticTacToeService: TicTacToeService) { }

  ngOnInit(): void {
  }
  placeChess(index) {
    this.ticTacToeService.placeChess(index);
  }
}
