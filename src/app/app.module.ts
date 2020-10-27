import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {ContactsPageComponent} from './pages/contacts-page/contacts-page.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {BasketPageComponent} from './pages/basket-page/basket-page.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {CategoryPageComponent} from './pages/category-page/category-page.component';
import {OrderPageComponent} from './pages/order-page/order-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {HeaderComponent} from './components/header/header.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {FooterComponent} from './components/footer/footer.component';
import { BasketListComponent } from './components/basket-list/basket-list.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { InfoComponent } from './components/info/info.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactsPageComponent,
    AboutPageComponent,
    BasketPageComponent,
    ProfilePageComponent,
    CategoryPageComponent,
    OrderPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HeaderComponent,
    NavbarComponent,
    CategoryListComponent,
    FooterComponent,
    BasketListComponent,
    OrderListComponent,
    InfoComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
