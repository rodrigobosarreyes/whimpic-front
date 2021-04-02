import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/200`);
}
