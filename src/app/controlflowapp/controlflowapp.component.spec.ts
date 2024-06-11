import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlflowappComponent } from './controlflowapp.component';

describe('ControlflowappComponent', () => {
  let component: ControlflowappComponent;
  let fixture: ComponentFixture<ControlflowappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlflowappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlflowappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
