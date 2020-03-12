import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Chess} from '../../interface/Chess';

@Component({
  selector: 'app-pieces',
  templateUrl: './pieces.component.html',
  styleUrls: ['./pieces.component.scss']
})
export class PiecesComponent implements OnInit {
  constructor() {}
  @Input() chess: Chess;
  @Input() index: number;
  @Output() putChess = new EventEmitter<{chess: Chess, index: number}>();
  ngOnInit(): void {
  }
  placeChess() {
    this.putChess.emit({chess: this.chess, index: this.index});
    console.log(this.chess, this.index);
  }

}
