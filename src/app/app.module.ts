import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    LottieAnimationViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
