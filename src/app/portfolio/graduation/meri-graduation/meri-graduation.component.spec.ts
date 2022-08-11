import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeriGraduationComponent } from './meri-graduation.component';

describe('MeriGraduationComponent', () => {
  let component: MeriGraduationComponent;
  let fixture: ComponentFixture<MeriGraduationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeriGraduationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeriGraduationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
