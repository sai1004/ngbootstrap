import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { TemplatesComponent } from './pages/templates/templates.component';

const routes: Routes = [

{path: '', component: TemplatesComponent},
{path: 'welcome', component: WelcomePageComponent},

{path: 'jobs', component: JobsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
