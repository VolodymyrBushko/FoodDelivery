import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
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
import {TokenInterceptor} from './interceptors/token.interceptor';
import { FeedbackListComponent } from './components/feedback-list/feedback-list.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { MaxLengthPipe } from './pipes/max-length.pipe';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ControllRadioGroupComponent } from './components/controll-radio-group/controll-radio-group.component';
import { ModelListComponent } from './components/model-list/model-list.component';
import { ModalListPipePipe } from './pipes/modal-list-pipe.pipe';

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
    FeedbackListComponent,
    ModalWindowComponent,
    MaxLengthPipe,
    ItemCardComponent,
    ControllRadioGroupComponent,
    ModelListComponent,
    ModalListPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
