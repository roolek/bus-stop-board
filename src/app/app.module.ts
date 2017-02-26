import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PekaModule } from './peka/peka.module';
import { TypeaheadModule } from 'ng2-bootstrap/typeahead';
import { DropdownModule } from 'ng2-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { BusStopPickerComponent } from './busstop-picker/busstop-picker.component';
import { DirectionPickerComponent } from './direction-picker/direction-picker.component';
import { BoardComponent } from './board/board.component';
import { TimesBoardComponent } from './times-board/times-board.component';

@NgModule({
  declarations: [
    AppComponent,
    BusStopPickerComponent,
    DirectionPickerComponent,
    BoardComponent,
    TimesBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PekaModule,
    TypeaheadModule.forRoot(),
    DropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
