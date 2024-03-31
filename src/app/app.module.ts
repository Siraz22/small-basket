import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempComponentComponent } from 'src/TempComponent/temp-component/temp-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from 'src/component/homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { ViewBasketComponent } from 'src/component/view-basket/view-basket.component';

@NgModule({
  declarations: [
    AppComponent,
    TempComponentComponent,
    HomepageComponent,
    ViewBasketComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
