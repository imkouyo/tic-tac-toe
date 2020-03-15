import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOverDlgComponent } from './game-over-dlg.component';

describe('GameOverDlgComponent', () => {
  let component: GameOverDlgComponent;
  let fixture: ComponentFixture<GameOverDlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameOverDlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOverDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
