import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanesaGalleryComponent } from './vanesa-gallery.component';

describe('VanesaGalleryComponent', () => {
  let component: VanesaGalleryComponent;
  let fixture: ComponentFixture<VanesaGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VanesaGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VanesaGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
