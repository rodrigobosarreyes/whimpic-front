import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WpButtonComponent } from './components/wp-button/wp-button.component';

@NgModule({
  declarations: [WpButtonComponent],
  imports: [CommonModule],
  exports: [WpButtonComponent]
})
export class SharedModule {}
