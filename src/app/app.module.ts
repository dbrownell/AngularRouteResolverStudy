import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  imports: [AppRoutingModule, BrowserModule, HttpClientModule],
  declarations: [AppComponent, HomeComponent, NewsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}