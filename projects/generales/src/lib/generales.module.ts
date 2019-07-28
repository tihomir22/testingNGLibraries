import { NgModule } from '@angular/core';
import { GeneralesComponent } from './generales.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [GeneralesComponent],
  imports: [
    TableModule
  ],
  exports: [GeneralesComponent]
})
export class GeneralesModule { }
