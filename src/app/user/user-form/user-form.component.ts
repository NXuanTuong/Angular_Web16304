import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() inputValues: any
  // Dinh nghia su kien de ban du lieu nguoc lai
  @Output() handleSubmit: EventEmitter<any>
  constructor() { 
  // Khai bao gia tri default
    this.handleSubmit = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onSubmit(userForm: NgForm) {
    // 1. tim ra id lon nhat
    // Gui du lieu di 

    this.handleSubmit.emit(userForm.value)

    userForm.resetForm({
      name : '',
      age: 0,
      email: '',
      phoneNumber : '',
      avatar: ''
    })
  }
}
