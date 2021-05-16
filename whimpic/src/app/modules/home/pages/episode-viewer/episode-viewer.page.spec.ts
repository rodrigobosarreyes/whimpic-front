import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeViewerPage } from './episode-viewer.page';

describe('EpisodeViewerPage', () => {
  let component: EpisodeViewerPage;
  let fixture: ComponentFixture<EpisodeViewerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeViewerPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeViewerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
