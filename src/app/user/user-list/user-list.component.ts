import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users: any
  @Output() handleDelete: EventEmitter<number>
  @Output() handEdit: EventEmitter<any>
  
  constructor() { 
    this.handleDelete = new EventEmitter()
    this.handEdit = new EventEmitter()
  }

  ngOnInit(): void {
  }

  onEdit(id : number) {
    this.handEdit.emit(id)
  }

  onRemove(id: number) {
    this.handleDelete.emit(id)
  }
}
