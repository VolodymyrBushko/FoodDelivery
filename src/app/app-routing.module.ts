import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {ContactsPageComponent} from './pages/contacts-page/contacts-page.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {BasketPageComponent} from './pages/basket-page/basket-page.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {CategoryPageComponent} from './pages/category-page/category-page.component';
import {OrderPageComponent} from './pages/order-page/order-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'contacts', component: ContactsPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'basket', component: BasketPageComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'categories/:id', component: CategoryPageComponent},
  {path: 'order', component: OrderPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
