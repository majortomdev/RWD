import { NgModule } from '@angular/core';
//import * as Material from '@angular/material';
import { MatToolbarModule } '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
   MatToolbarModule
  ],
  exports: [
    //Material.MatToolbarModule
    MatToolbarModule
  ]
})
export class AppMaterialModule { }
