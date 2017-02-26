import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesBoardComponent } from './times-board.component';

describe('TimesBoardComponent', () => {
  let component: TimesBoardComponent;
  let fixture: ComponentFixture<TimesBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
