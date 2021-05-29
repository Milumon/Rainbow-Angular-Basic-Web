import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFooterComponent } from './commom/main-footer/main-footer.component';
import { MainNavComponent } from './commom/main-nav/main-nav.component';
import { HomeComponent } from './inicio/home/home.component';
import { BannerComponent } from './inicio/banner/banner.component';
import { BrandAreaComponent } from './inicio/brand-area/brand-area.component';
import { CardsComponent } from './inicio/cards/cards.component';
import { TeamComponent } from './inicio/team/team.component';
import { ServiceComponent } from './components/service/service.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFooterComponent,
    MainNavComponent,
    HomeComponent,
    BannerComponent,
    BrandAreaComponent,
    CardsComponent,
    TeamComponent,
    ServiceComponent,
    AboutComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
