import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { GetInvolvedComponent } from './pages/get-involved/get-involved.component';
import { DonateComponent } from './pages/donate/donate.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component'; // Import the Contact Us Component

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'get-involved', component: GetInvolvedComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'contact-us', component: ContactUsComponent }, // Add the route for Contact Us
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
