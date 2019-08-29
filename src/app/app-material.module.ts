import { NgModule } from '@angular/core';
// import * as Material from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule, MatDividerModule, MatGridListModule, MatInputModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
   MatToolbarModule,
   MatFormFieldModule,
   MatDividerModule,
   MatGridListModule,
   MatInputModule,
   MatIconModule,
   MatButtonModule
  ],
  exports: [
    // Material.MatToolbarModule
    MatToolbarModule,
    MatFormFieldModule,
    MatDividerModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AppMaterialModule { }
