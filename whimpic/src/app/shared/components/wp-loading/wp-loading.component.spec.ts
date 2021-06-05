import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpLoadingComponent } from './wp-loading.component';

describe('WpLoadingComponent', () => {
  let component: WpLoadingComponent;
  let fixture: ComponentFixture<WpLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
