import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingPhotoshootComponent } from './wedding-photoshoot.component';

describe('WeddingPhotoshootComponent', () => {
  let component: WeddingPhotoshootComponent;
  let fixture: ComponentFixture<WeddingPhotoshootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingPhotoshootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingPhotoshootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
