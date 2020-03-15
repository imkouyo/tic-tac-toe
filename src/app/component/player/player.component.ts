import { Component, Input, OnInit } from '@angular/core';
import { PlayerInfo } from '../../interface/player-info';
import {TicTacToeService} from '../../service/tic-tac-toe.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  id: number;
  name: string;
  currentSelect: string;
  @Input()playerInfo: PlayerInfo;
  valueMap = { small: 1, mid: 2, big: 3 };
  constructor(private ticTacToeService: TicTacToeService) { }

  ngOnInit(): void {
    this.name = this.playerInfo.getName();
    this.id = this.playerInfo.getID();
    this.currentSelect = 'small';
  }
  selectSize(chess) {
    if (this.id === 1) {
      this.ticTacToeService.playerOneChess.next({
        type: chess.type,
        value: this.valueMap[chess.size],
        size: chess.size
      });
    } else {
      this.ticTacToeService.playerTwoChess.next({
        type: chess.type,
        value: this.valueMap[chess.size],
        size: chess.size
      });
    }
    this.currentSelect = chess.size;
  }

}
