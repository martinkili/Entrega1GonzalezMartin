import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { 

 
}
