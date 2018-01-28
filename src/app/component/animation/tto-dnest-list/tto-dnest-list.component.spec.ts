import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TtoDnestListComponent } from './tto-dnest-list.component';

describe('TtoDnestListComponent', () => {
  let component: TtoDnestListComponent;
  let fixture: ComponentFixture<TtoDnestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtoDnestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtoDnestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
