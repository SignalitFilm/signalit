import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopNavForMobileComponent } from './components/top-nav-for-mobile/top-nav-for-mobile.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopNavForMobileComponent,
    MainPageComponent,
    GalleryPageComponent,
    AboutMePageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
