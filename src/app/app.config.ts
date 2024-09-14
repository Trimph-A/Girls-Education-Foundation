import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routing.module';
import { provideClientHydration } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importing all components
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { ProgramDetailComponent } from './pages/program-detail/program-detail.component';
import { GetInvolvedComponent } from './pages/get-involved/get-involved.component';
import { DonateComponent } from './pages/donate/donate.component';
import { StoriesOfChangeComponent } from './pages/stories-of-change/stories-of-change.component';
import { BlogListComponent } from './pages/blog/blog-list/blog-list.component';
import { BlogPostComponent } from './pages/blog/blog-post/blog-post.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

// Providing Router and Client Hydration
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    // Add importProvidersFrom if required for browser imports
    importProvidersFrom(BrowserModule)
  ]
};
