import { Component } from '@angular/core';
import { IPerson } from './models/person';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatCheckboxChange } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';

  displayedColumns: string[] = ['Name', 'Age', 'Description'];
  dataSource: IPerson[];
  NameValue: String;
  AgeValue: String;

  constructor() {
    this.dataSource = [
      {Name: 'Juan', Age: '26', Description: 'Descript'}
    ];
  }

  onSave(): void {
    // tslint:disable-next-line:prefer-const
    let valueData = this.NameValue;
  }
}



