import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../../components/shared/header/header.component';
import { SidebarComponent } from '../../components/shared/sidebar/sidebar.component';
import { FilterComponent } from '../../components/shared/filter/filter.component';
import { DataTableComponent } from '../../components/shared/data-table/data-table.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    DataTableComponent,
    FilterComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    DataTableComponent,
    FilterComponent
  ]
})
export class SharedModule { }
