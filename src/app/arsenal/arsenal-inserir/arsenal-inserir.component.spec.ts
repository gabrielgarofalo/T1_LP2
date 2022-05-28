import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArsenalInserirComponent } from './arsenal-inserir.component';

describe('ArsenalInserirComponent', () => {
  let component: ArsenalInserirComponent;
  let fixture: ComponentFixture<ArsenalInserirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArsenalInserirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArsenalInserirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
