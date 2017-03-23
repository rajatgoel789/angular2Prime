import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { InputTextModule, ButtonModule }  from 'primeng/primeng';
import {ConfirmDialogModule,ConfirmationService,DataTableModule,SharedModule} from 'primeng/primeng';
import {CarService} from './car.service';
import './rxjso'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InputTextModule, 
    ButtonModule,
    ConfirmDialogModule,
    DataTableModule,
    SharedModule    
  ],
  providers: [ConfirmationService,CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
