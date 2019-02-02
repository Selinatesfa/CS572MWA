import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailscompComponent } from './userdetailscomp.component';

describe('UserdetailscompComponent', () => {
  let component: UserdetailscompComponent;
  let fixture: ComponentFixture<UserdetailscompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdetailscompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
