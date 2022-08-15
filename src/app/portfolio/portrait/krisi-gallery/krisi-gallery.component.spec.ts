import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrisiGalleryComponent } from './krisi-gallery.component';

describe('KrisiGalleryComponent', () => {
  let component: KrisiGalleryComponent;
  let fixture: ComponentFixture<KrisiGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrisiGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KrisiGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
