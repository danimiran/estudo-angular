import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasIfComponent } from './diretivas-if.component';

describe('DiretivasIfComponent', () => {
  let component: DiretivasIfComponent;
  let fixture: ComponentFixture<DiretivasIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivasIfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
