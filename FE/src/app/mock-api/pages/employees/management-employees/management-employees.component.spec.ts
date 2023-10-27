import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementEmployeesComponent } from './management-employees.component';

describe('ManagementEmployeesComponent', () => {
  let component: ManagementEmployeesComponent;
  let fixture: ComponentFixture<ManagementEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
