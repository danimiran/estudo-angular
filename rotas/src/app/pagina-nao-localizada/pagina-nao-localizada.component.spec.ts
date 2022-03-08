import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNaoLocalizadaComponent } from './pagina-nao-localizada.component';

describe('PaginaNaoLocalizadaComponent', () => {
  let component: PaginaNaoLocalizadaComponent;
  let fixture: ComponentFixture<PaginaNaoLocalizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaNaoLocalizadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaNaoLocalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
