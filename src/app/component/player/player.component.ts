import { Component, Input, OnInit } from '@angular/core';
import { PlayerInfo } from '../../interface/player-info';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input()playerInfo: PlayerInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
