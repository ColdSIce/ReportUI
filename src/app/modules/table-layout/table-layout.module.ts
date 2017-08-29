import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLayoutComponent } from './components/table-layout/table-layout.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

@NgModule({
  imports: [
    CommonModule,
    Angular2FontawesomeModule
  ],
  declarations: [TableLayoutComponent],
  exports: [TableLayoutComponent]
})
export class TableLayoutModule { }
