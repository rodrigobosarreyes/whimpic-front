import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeControlBarComponent } from './episode-control-bar.component';

describe('EpisodeControlBarComponent', () => {
  let component: EpisodeControlBarComponent;
  let fixture: ComponentFixture<EpisodeControlBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeControlBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeControlBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
