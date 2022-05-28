import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArsenalListaComponent } from './arsenal-lista.component';

describe('ArsenalListaComponent', () => {
  let component: ArsenalListaComponent;
  let fixture: ComponentFixture<ArsenalListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArsenalListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArsenalListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
