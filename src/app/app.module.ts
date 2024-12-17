import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/layout/header/header.component';
import { FooterComponent } from './layout/layout/footer/footer.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { AboutComponent } from './layout/pages/about/about.component';
import { ServicesComponent } from './layout/pages/services/services.component';
import { DestinationComponent } from './layout/pages/destination/destination.component';
import { NotFoundComponent } from './layout/pages/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    DestinationComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
