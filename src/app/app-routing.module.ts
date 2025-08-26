import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopSingleComponent } from './components/shop-single/shop-single.component';
import { ErrorComponentComponent } from './ErrorPage/error-component/error-component.component';
import { ReviewComponent } from './components/review/review.component';

const routes: Routes = [
  {path:"", redirectTo:'/home', pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"shop",component:ShopComponent},
   {path:'single/:id',component:ShopSingleComponent},
  
 
  {path:"**",component:ErrorComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
