import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLayoutComponent } from './components/table-layout/table-layout.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { TreeViewComponent } from './components/tree-view/tree-view.component'

@NgModule({
  imports: [
    CommonModule,
    Angular2FontawesomeModule
  ],
  declarations: [TableLayoutComponent, TreeViewComponent],
  exports: [TableLayoutComponent]
})
export class TableLayoutModule { }
