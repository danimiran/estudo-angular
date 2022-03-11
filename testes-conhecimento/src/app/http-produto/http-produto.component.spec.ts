import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpProdutoComponent } from './http-produto.component';

describe('HttpProdutoComponent', () => {
  let component: HttpProdutoComponent;
  let fixture: ComponentFixture<HttpProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
