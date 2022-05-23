import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
  
  // onRemove(id: number) {
  //   this.users = this.users.filter(user => user.id !== id);
  // }
  // onEdit(userId: number) {
  //   const editUser = this.users.find(user => user.id === userId);
  //   if(editUser) {
  //     // this.inputValue = {...editUser};
  //   }
  // }
}
