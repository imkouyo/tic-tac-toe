import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiecesComponent } from './component/pieces/pieces.component';
import { BoardComponent } from './component/board/board.component';
import { PlayerComponent } from './component/player/player.component';
import { GameComponent } from './container/game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageTipComponent } from './component/message-tip/message-tip.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { GameOverDlgComponent } from './component/game-over-dlg/game-over-dlg.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    PiecesComponent,
    BoardComponent,
    PlayerComponent,
    GameComponent,
    MessageTipComponent,
    GameOverDlgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  entryComponents: [
    GameOverDlgComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
