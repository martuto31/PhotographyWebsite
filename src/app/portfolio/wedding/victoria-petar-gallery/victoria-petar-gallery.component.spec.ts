import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictoriaPetarGalleryComponent } from './victoria-petar-gallery.component';

describe('VictoriaPetarGalleryComponent', () => {
  let component: VictoriaPetarGalleryComponent;
  let fixture: ComponentFixture<VictoriaPetarGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VictoriaPetarGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VictoriaPetarGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
