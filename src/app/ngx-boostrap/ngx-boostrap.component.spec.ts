import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBoostrapComponent } from './ngx-boostrap.component';

describe('NgxBoostrapComponent', () => {
  let component: NgxBoostrapComponent;
  let fixture: ComponentFixture<NgxBoostrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBoostrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxBoostrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
