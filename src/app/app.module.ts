import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopSingleComponent } from './components/shop-single/shop-single.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponentComponent } from './ErrorPage/error-component/error-component.component';
import { ReviewComponent } from './components/review/review.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    ShopComponent,
    ShopSingleComponent,
    AboutComponent,
    ErrorComponentComponent,
    ReviewComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
