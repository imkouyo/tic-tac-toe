import {Component, Input, OnInit} from '@angular/core';
import {Chess} from '../../interface/Chess';

@Component({
  selector: 'app-pieces',
  templateUrl: './pieces.component.html',
  styleUrls: ['./pieces.component.scss']
})
export class PiecesComponent implements OnInit {
  constructor() {}
  @Input() chess: Chess;
  ngOnInit(): void {
  }

}
