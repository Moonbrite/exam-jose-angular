import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageModificationComponent } from './voyage-modification.component';

describe('VoyageModificationComponent', () => {
  let component: VoyageModificationComponent;
  let fixture: ComponentFixture<VoyageModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoyageModificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoyageModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
