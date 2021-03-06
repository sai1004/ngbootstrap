import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WelcomePageComponent } from "./pages/welcome-page/welcome-page.component";
import { WelcomeNavComponent } from "./components/welcome-nav/welcome-nav.component";
import { WelcomeBannerComponent } from "./components/welcome-banner/welcome-banner.component";
import { WelcomeAboutUsComponent } from "./components/welcome-about-us/welcome-about-us.component";
import { WelcomeFactsComponent } from "./components/welcome-facts/welcome-facts.component";
import { WelcomeServiceComponent } from "./components/welcome-service/welcome-service.component";
import { WelcomeFootComponent } from "./components/welcome-foot/welcome-foot.component";
import { WelcomeTeamComponent } from "./components/welcome-team/welcome-team.component";
import { WelcomePortfolioComponent } from "./components/welcome-portfolio/welcome-portfolio.component";
import { WelcomePracticeComponent } from "./components/welcome-practice/welcome-practice.component";
import { JobsPageComponent } from "./pages/jobs-page/jobs-page.component";
import { JobsBannerComponent } from "./components/jobs-banner/jobs-banner.component";
import { JobsCardsComponent } from "./components/jobs-cards/jobs-cards.component";
import { JobsReportsComponent } from "./components/jobs-reports/jobs-reports.component";
import { JobsPopularComponent } from "./components/jobs-popular/jobs-popular.component";
import { JobsFeedbackComponent } from "./components/jobs-feedback/jobs-feedback.component";
import { JobsPlansComponent } from "./components/jobs-plans/jobs-plans.component";
import { JobsPortfolioComponent } from "./components/jobs-portfolio/jobs-portfolio.component";
import { JobsNewsletterComponent } from "./components/jobs-newsletter/jobs-newsletter.component";
import { JobsFooterComponent } from "./components/jobs-footer/jobs-footer.component";
import { TemplatesComponent } from "./pages/templates/templates.component";
import { MusifyPageComponent } from "./pages/musify-page/musify-page.component";
import { HollwoodComponent } from "./components/musify/musify-albums/hollwood/hollwood.component";
import { TempalteDrivenComponent } from "./pages/tempalte-driven/tempalte-driven.component";
import { ReactiveComponent } from "./pages/reactive/reactive.component";
import { JobsCarouselComponent } from './components/jobs-carousel/jobs-carousel.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { ServiceChildOneComponent } from './components/service/service-child-one/service-child-one.component';
import { ServiceChildtwoComponent } from './components/service/service-childtwo/service-childtwo.component';
import { JobsNavComponent } from './components/jobs-nav/jobs-nav.component';

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
    JobsFooterComponent,
    TemplatesComponent,
    MusifyPageComponent,
    HollwoodComponent,
    TempalteDrivenComponent,
    ReactiveComponent,
    JobsCarouselComponent,
    ServicePageComponent,
    ServiceChildOneComponent,
    ServiceChildtwoComponent,
    JobsNavComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
