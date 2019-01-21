import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { LifeStyleComponent } from './life-style/life-style.component';
import { OffersComponent } from './offers/offers.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
   {path: 'auth' , component: AuthComponent} ,
   {path: 'sign-in' , component: SignInComponent} ,
   {path: 'sign-up' , component: SignUpComponent},
   {path: 'accomodation' , component: AccomodationComponent},
   {path: 'food-bererage' , component: FoodBeverageComponent},
   {path: 'life-style' , component: LifeStyleComponent},
   {path: 'offers' , component: OffersComponent} ,
   {path: '' , component: HomeComponent}
] ;
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
