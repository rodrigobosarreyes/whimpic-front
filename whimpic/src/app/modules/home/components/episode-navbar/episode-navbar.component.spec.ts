import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeNavbarComponent } from './episode-navbar.component';

describe('EpisodeNavbarComponent', () => {
  let component: EpisodeNavbarComponent;
  let fixture: ComponentFixture<EpisodeNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
