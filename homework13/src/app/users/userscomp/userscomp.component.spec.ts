import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserscompComponent } from './userscomp.component';

describe('UserscompComponent', () => {
  let component: UserscompComponent;
  let fixture: ComponentFixture<UserscompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserscompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
