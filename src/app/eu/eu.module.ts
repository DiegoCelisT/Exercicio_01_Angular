import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EuComponent} from './eu.component';


@NgModule({
  declarations: [EuComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EuComponent
  ]
})
export class EuModule { }
