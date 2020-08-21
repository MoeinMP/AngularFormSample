import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { LoginModule } from './Modules/Login/login.module';
import { HomeModule } from './Modules/Home/home.module';
import { CoreModule } from './Core/core.module';
import { LayoutModule } from './Layout/layout.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    LoginModule,
    HomeModule,
    CoreModule,
    HttpClientModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
