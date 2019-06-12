import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';

const routes: Routes = [

{path: '', component: WelcomePageComponent},
{path: 'jobs', component: JobsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
