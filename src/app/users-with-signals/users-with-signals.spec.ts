import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersWithSignals } from './users-with-signals';

describe('UsersWithSignals', () => {
  let component: UsersWithSignals;
  let fixture: ComponentFixture<UsersWithSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersWithSignals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersWithSignals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
