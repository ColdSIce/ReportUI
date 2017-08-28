import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableLayoutModule } from './modules/table-layout/table-layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TableLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
