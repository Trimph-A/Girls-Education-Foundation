import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
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
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ImpactStatsComponent } from './components/impact-stats/impact-stats.component';
import { FeaturedStoryComponent } from './components/featured-story/featured-story.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ProgramsComponent,
    ProgramDetailComponent,
    GetInvolvedComponent,
    DonateComponent,
    StoriesOfChangeComponent,
    BlogListComponent,
    BlogPostComponent,
    ContactUsComponent,
    HeroSectionComponent,
    ImpactStatsComponent,
    FeaturedStoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule.forRoot(),
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
