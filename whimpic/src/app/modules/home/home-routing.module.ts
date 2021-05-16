import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailPage } from './pages/detail/detail.page';
import { EpisodeViewerPage } from './pages/episode-viewer/episode-viewer.page';
import { HomePage } from './pages/home/home.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'detail/:mangaId', component: DetailPage },
  { path: 'episode/:mangaId/:volumeId/:episodeId/:scene', component: EpisodeViewerPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
