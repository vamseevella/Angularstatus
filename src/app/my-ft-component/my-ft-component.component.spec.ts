import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFtComponentComponent } from './my-ft-component.component';

describe('MyFtComponentComponent', () => {
  let component: MyFtComponentComponent;
  let fixture: ComponentFixture<MyFtComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFtComponentComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFtComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    console.log("sssssssssssssssss");
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('testing testcase', () => {
    expect(component.testMethod()).toBeTruthy();
  });
});
