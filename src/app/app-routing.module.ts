import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'gallery', component: GalleryPageComponent },
  { path: 'about-me', component: AboutMePageComponent },
  { path: 'contacts', component: ContactPageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`

  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
