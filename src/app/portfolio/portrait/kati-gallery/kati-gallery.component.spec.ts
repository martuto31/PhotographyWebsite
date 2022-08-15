import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatiGalleryComponent } from './kati-gallery.component';

describe('KatiGalleryComponent', () => {
  let component: KatiGalleryComponent;
  let fixture: ComponentFixture<KatiGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatiGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatiGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
