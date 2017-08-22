import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyScComponentComponent } from './my-sc-component.component';

describe('MyScComponentComponent', () => {
  let component: MyScComponentComponent;
  let fixture: ComponentFixture<MyScComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyScComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyScComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
