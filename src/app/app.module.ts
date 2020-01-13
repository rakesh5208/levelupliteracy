// angular imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
// third party imports
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';

// app imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { FooterComponent } from './footer/footer.component';
import { TopContactComponent } from './top-contact/top-contact.component';
import { HomeComponent } from './home/home.component';
import { MarqueeComponent } from './marquee/marquee.component';
import { StudentTestinomialComponent } from './student-testinomial/student-testinomial.component';
import { CourseLoaderComponent } from './loader/course-loader/course-loader.component';
import { AddressLoaderComponent } from './loader/address-loader/address-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CourseComponent,
    ContactsComponent,
    TopNavComponent,
    FooterComponent,
    TopContactComponent,
    HomeComponent,
    MarqueeComponent,
    StudentTestinomialComponent,
    CourseLoaderComponent,
    AddressLoaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
