import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserErrorComponent } from './user-error.component';

describe('UserErrorComponent', () => {
  let component: UserErrorComponent;
  let fixture: ComponentFixture<UserErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserErrorComponent]
    });
    fixture = TestBed.createComponent(UserErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
