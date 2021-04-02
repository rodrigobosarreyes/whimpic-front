import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mangas-collection',
  templateUrl: './mangas-collection.component.html',
  styleUrls: ['./mangas-collection.component.scss']
})
export class MangasCollectionComponent {
  @Input() sectionTitle: string;
}
