import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicosEspecialidad } from './medicos-especialidad';

describe('MedicosEspecialidad', () => {
  let component: MedicosEspecialidad;
  let fixture: ComponentFixture<MedicosEspecialidad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicosEspecialidad],
    }).compileComponents();

    fixture = TestBed.createComponent(MedicosEspecialidad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
