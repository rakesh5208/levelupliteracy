import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CourseComponent } from './course/course.component';

// first page to redirect is about

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'courses',
    component: CourseComponent
  },
  {
    path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  },
  { path: '**', component: ContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
