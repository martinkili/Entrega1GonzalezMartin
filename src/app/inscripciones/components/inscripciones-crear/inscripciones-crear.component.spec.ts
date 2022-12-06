import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionesCrearComponent } from './inscripciones-crear.component';

describe('InscripcionesCrearComponent', () => {
  let component: InscripcionesCrearComponent;
  let fixture: ComponentFixture<InscripcionesCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionesCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionesCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
