import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangasCollectionComponent } from './mangas-collection.component';

describe('MangasCollectionComponent', () => {
  let component: MangasCollectionComponent;
  let fixture: ComponentFixture<MangasCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangasCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangasCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
