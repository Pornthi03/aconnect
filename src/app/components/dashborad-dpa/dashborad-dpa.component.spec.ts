import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboradDPAComponent } from './dashborad-dpa.component';

describe('DashboradDPAComponent', () => {
  let component: DashboradDPAComponent;
  let fixture: ComponentFixture<DashboradDPAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboradDPAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboradDPAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
