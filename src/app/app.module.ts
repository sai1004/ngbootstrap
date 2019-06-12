import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { WelcomeNavComponent } from './components/welcome-nav/welcome-nav.component';
import { WelcomeBannerComponent } from './components/welcome-banner/welcome-banner.component';
import { WelcomeAboutUsComponent } from './components/welcome-about-us/welcome-about-us.component';
import { WelcomeFactsComponent } from './components/welcome-facts/welcome-facts.component';
import { WelcomeServiceComponent } from './components/welcome-service/welcome-service.component';
import { WelcomeFootComponent } from './components/welcome-foot/welcome-foot.component';
import { WelcomeTeamComponent } from './components/welcome-team/welcome-team.component';
import { WelcomePortfolioComponent } from './components/welcome-portfolio/welcome-portfolio.component';
import { WelcomePracticeComponent } from './components/welcome-practice/welcome-practice.component';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { JobsBannerComponent } from './components/jobs-banner/jobs-banner.component';
import { JobsCardsComponent } from './components/jobs-cards/jobs-cards.component';
import { JobsReportsComponent } from './components/jobs-reports/jobs-reports.component';
import { JobsPopularComponent } from './components/jobs-popular/jobs-popular.component';
import { JobsFeedbackComponent } from './components/jobs-feedback/jobs-feedback.component';
import { JobsPlansComponent } from './components/jobs-plans/jobs-plans.component';
import { JobsPortfolioComponent } from './components/jobs-portfolio/jobs-portfolio.component';
import { JobsNewsletterComponent } from './components/jobs-newsletter/jobs-newsletter.component';
import { JobsFooterComponent } from './components/jobs-footer/jobs-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    WelcomeNavComponent,
    WelcomeBannerComponent,
    WelcomeAboutUsComponent,
    WelcomeFactsComponent,
    WelcomeServiceComponent,
    WelcomeFootComponent,
    WelcomeTeamComponent,
    WelcomePortfolioComponent,
    WelcomePracticeComponent,
    JobsPageComponent,
    JobsBannerComponent,
    JobsCardsComponent,
    JobsReportsComponent,
    JobsPopularComponent,
    JobsFeedbackComponent,
    JobsPlansComponent,
    JobsPortfolioComponent,
    JobsNewsletterComponent,
    JobsFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
