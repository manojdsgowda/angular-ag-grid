import { Component } from '@angular/core';

import {AllCommunityModules} from "@ag-grid-community/all-modules";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

    columnDefs = [
        {field: 'EmployeeID' },
        {field: 'EmployeeCode', editable: true },
        {field: 'EmployeeName', editable: true},
        {field: 'DOJ', editable: true},
        {field: 'Gender', editable: true},
        {field: 'MaritalStatus', editable: true},
        {field: 'ContactNo', editable: true}
    ];

    rowData = [
        { EmployeeID: '1', EmployeeCode: 'MDJ', EmployeeName: 'Manoj D S', DOJ:'12-Dec-2019', Gender:'Male',
        MaritalStatus:'Single', ContactNo:'1234567890' },
        { EmployeeID: '2', EmployeeCode: 'VIC', EmployeeName: 'Vinod R Chougule', DOJ:'05-Sep-2019', Gender:'Male', MaritalStatus:'Married', ContactNo:'876543211' },
        { EmployeeID: '3', EmployeeCode: 'SPU', EmployeeName: 'Sridhar Hanumanthappa', DOJ:'20-Sep-2019', Gender:'Male', MaritalStatus:'Married', ContactNo:'234567890' }
    ];

    modules = AllCommunityModules;

}
