import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { MatTableModule } from '@angular/material/table';

const materialModules =[
  MatTableModule
]

@NgModule({
  imports: [
    CommonModule,
    ...materialModules
  ],
  declarations: [CustomTableComponent],
  exports: [
    CustomTableComponent
  ],
  
})
export class CustomMaterialModule { }
