import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PekaApiService } from './peka-api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [PekaApiService]
})
export class PekaModule { }
