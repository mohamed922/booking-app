import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { ResturantComponent } from './food-beverage/resturant/resturant.component';
import { CafeComponent } from './food-beverage/cafe/cafe.component';
import { LifeStyleComponent } from './life-style/life-style.component';
import { SpaAndGemComponent } from './life-style/spa-and-gem/spa-and-gem.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module' ;



@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    RoomsComponent,
    FoodBeverageComponent,
    ResturantComponent,
    CafeComponent,
    LifeStyleComponent,
    SpaAndGemComponent,
    OffersComponent,
    AuthComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule ,
    BrowserAnimationsModule ,
    MaterialModule,
    AppRoutingModule ,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
