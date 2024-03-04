import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageAdminComponent } from './voyage-admin.component';

describe('VoyageAdminComponent', () => {
  let component: VoyageAdminComponent;
  let fixture: ComponentFixture<VoyageAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoyageAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoyageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
