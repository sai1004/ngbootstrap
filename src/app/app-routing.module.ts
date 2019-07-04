import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { TemplatesComponent } from './pages/templates/templates.component';
import { MusifyPageComponent } from './pages/musify-page/musify-page.component';
import { TempalteDrivenComponent } from './pages/tempalte-driven/tempalte-driven.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';

const routes: Routes = [

{path: '', component: TemplatesComponent},
{path: 'welcome', component: WelcomePageComponent},
{path: 'jobs', component: JobsPageComponent},
{path: 'musify', component: MusifyPageComponent },
{ path: 'driven', component: TempalteDrivenComponent},
{ path: 'reactive', component: ReactiveComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
