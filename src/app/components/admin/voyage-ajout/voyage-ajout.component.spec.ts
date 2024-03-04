import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageAjoutComponent } from './voyage-ajout.component';

describe('VoyageAjoutComponent', () => {
  let component: VoyageAjoutComponent;
  let fixture: ComponentFixture<VoyageAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoyageAjoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoyageAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
