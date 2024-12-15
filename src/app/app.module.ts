import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/layout/header/header.component';
import { FooterComponent } from './layout/layout/footer/footer.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { AboutComponent } from './layout/pages/about/about.component';
import { ServicesComponent } from './layout/pages/services/services.component';
import { DestinationComponent } from './layout/pages/destination/destination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    DestinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
