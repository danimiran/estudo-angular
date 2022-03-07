import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasSwitchComponent } from './diretivas-switch.component';

describe('DiretivasSwitchComponent', () => {
  let component: DiretivasSwitchComponent;
  let fixture: ComponentFixture<DiretivasSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivasSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
