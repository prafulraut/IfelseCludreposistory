import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { UserCardComponent } from './user-card/user-card.component';
import { RecentOrderComponent } from './recent-order/recent-order.component';
import { NewUserComponent } from './new-user/new-user.component';
import { HighChartsComponent } from './high-charts/high-charts.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopMenuComponent,
    LeftMenuComponent,
    UserCardComponent,
    RecentOrderComponent,
    NewUserComponent,
    HighChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
