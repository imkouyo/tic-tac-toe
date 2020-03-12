import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiecesComponent } from './component/pieces/pieces.component';
import { BoardComponent } from './component/board/board.component';
import { PlayerComponent } from './component/player/player.component';
import { GameComponent } from './container/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    PiecesComponent,
    BoardComponent,
    PlayerComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
