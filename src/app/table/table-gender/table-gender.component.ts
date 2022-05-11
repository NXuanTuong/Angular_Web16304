import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-gender',
  templateUrl: './table-gender.component.html',
  styleUrls: ['./table-gender.component.css']
})
export class TableGenderComponent implements OnInit {
  @Input() gender: boolean;
  constructor() {
    this.gender = true;
   }

  ngOnInit(): void {
  }

}
