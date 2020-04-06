import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PnrComponent } from './components/pnr/pnr.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    PnrComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
