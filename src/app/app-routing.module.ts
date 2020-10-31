import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {ContactsPageComponent} from './pages/contacts-page/contacts-page.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {BasketPageComponent} from './pages/basket-page/basket-page.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {CategoryPageComponent} from './pages/category-page/category-page.component';
import {OrderPageComponent} from './pages/order-page/order-page.component';
import {ProfileGuard} from './guards/profile.guard';
import {LoginGuard} from './guards/login.guard';
import {AuthPageComponent} from './pages/auth-page/auth-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'contacts', component: ContactsPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'basket', component: BasketPageComponent},
  {path: 'profile', component: ProfilePageComponent, canActivate: [ProfileGuard]},
  {path: 'categories/:id', component: CategoryPageComponent},
  {path: 'order', component: OrderPageComponent},
  {path: 'auth', component: AuthPageComponent, canActivate: [LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
