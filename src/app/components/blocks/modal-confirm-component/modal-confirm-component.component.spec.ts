import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmComponentComponent } from './modal-confirm-component.component';

describe('ModalConfirmComponentComponent', () => {
  let component: ModalConfirmComponentComponent;
  let fixture: ComponentFixture<ModalConfirmComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalConfirmComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalConfirmComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
