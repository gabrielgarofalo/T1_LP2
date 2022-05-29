import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArsenalTabelaComponent } from './arsenal-tabela.component';

describe('ArsenalTabelaComponent', () => {
  let component: ArsenalTabelaComponent;
  let fixture: ComponentFixture<ArsenalTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArsenalTabelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArsenalTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
