import { Component,OnInit } from '@angular/core';
import {ConfirmDialogModule,ConfirmationService,DataTableModule,SharedModule} from 'primeng/primeng';
import {Car} from './car';
import {CarService} from './car.service';
@Component({
  selector: 'app-root',
  template: `
        <input type="text" [(ngModel)]="name" pInputText>
        <button type="button" pButton label="Click" icon="fa fa-check" (click)="onClick($event)"></button>
        
        <div>{{message}}</div>
        <p-confirmDialog header="Confirmation" icon="fa fa-question-circle" width="425"></p-confirmDialog>

		<button type="text" (click)="confirm()" pButton icon="fa-check" label="Confirm"></button>
  


        <p-dataTable [value]="cars">
            <p-column field="vin" header="Vin"></p-column>
            <p-column field="model" header="Model"></p-column>
            <p-column field="brand" header="Brand"></p-column>
            <p-column field="price" header="Price"></p-column>
        </p-dataTable>




  `,
  providers: [ConfirmationService]
})
export class AppComponent implements OnInit{ 
    
    name: string; 
    
    message: string;
    cars: Car[] = [];
    errorMessage:any;

    constructor(private confirmationService: ConfirmationService,private CarService:CarService) {}

    onClick() {
        this.message = 'Hello ' + this.name;
    }

 
    confirm() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: () => {
                //Actual logic to perform a confirmation
            }
        });
    }

    ngOnInit():void
    {
        this.CarService.getCarsSmall().subscribe(
                       cars => {this.cars = cars ; console.log("Heroes " , cars ); },
                       error =>  this.errorMessage = <any>error);
    };

}
