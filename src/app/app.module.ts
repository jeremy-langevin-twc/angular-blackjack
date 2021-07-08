import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardsComponent } from './components/cards/cards.component';
import { TableComponent } from './screens/table/table.component';
import { ControlsComponent } from './components/controls/controls.component';
import { StartButtonComponent } from './components/start-button/start-button.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { DealerCardsComponent } from './components/dealer-cards/dealer-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardsComponent,
    TableComponent,
    ControlsComponent,
    StartButtonComponent,
    TopBarComponent,
    DealerCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
