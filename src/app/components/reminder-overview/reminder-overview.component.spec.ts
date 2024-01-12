import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderOverviewComponent } from './reminder-overview.component';

describe('ReminderOverviewComponent', () => {
  let component: ReminderOverviewComponent;
  let fixture: ComponentFixture<ReminderOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReminderOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReminderOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});