import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PreloaderComponent } from './preloader/preloader.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PreloaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      HeaderComponent,
      FooterComponent
  ]
})
export class SharedModule { }
