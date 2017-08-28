import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLayoutComponent } from './components/table-layout/table-layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableLayoutComponent],
  exports: [TableLayoutComponent]
})
export class TableLayoutModule { }
