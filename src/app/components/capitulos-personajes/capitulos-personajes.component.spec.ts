import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitulosPersonajesComponent } from './capitulos-personajes.component';

describe('CapitulosPersonajesComponent', () => {
  let component: CapitulosPersonajesComponent;
  let fixture: ComponentFixture<CapitulosPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitulosPersonajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitulosPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
