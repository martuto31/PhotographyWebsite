import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanesaStanislavGalleryComponent } from './vanesa-stanislav-gallery.component';

describe('VanesaStanislavGalleryComponent', () => {
  let component: VanesaStanislavGalleryComponent;
  let fixture: ComponentFixture<VanesaStanislavGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VanesaStanislavGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VanesaStanislavGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
