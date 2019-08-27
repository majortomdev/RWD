import { NgModule } from '@angular/core';
//import * as Material from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
   MatToolbarModule,
   MatFormFieldModule
  ],
  exports: [
    //Material.MatToolbarModule
    MatToolbarModule,
    MatFormFieldModule
  ]
})
export class AppMaterialModule { }
