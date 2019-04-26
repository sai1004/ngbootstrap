import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { WelcomeNavComponent } from './components/welcome-nav/welcome-nav.component';
import { WelcomeBannerComponent } from './components/welcome-banner/welcome-banner.component';
import { WelcomeAboutUsComponent } from './components/welcome-about-us/welcome-about-us.component';
import { WelcomeFactsComponent } from './components/welcome-facts/welcome-facts.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    WelcomeNavComponent,
    WelcomeBannerComponent,
    WelcomeAboutUsComponent,
    WelcomeFactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
