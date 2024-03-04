import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageSliderComponent } from './voyage-slider.component';

describe('VoyageSliderComponent', () => {
  let component: VoyageSliderComponent;
  let fixture: ComponentFixture<VoyageSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoyageSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoyageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
