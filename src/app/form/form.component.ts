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
  inputValue = {
    id: 0,
    name : '',
    age: 0,
    email: '',
    phoneNumber: '',
    avatar: ''
  }
  users = [
    {
        id: 1,
        name: 'tuongnxph17348',
        age: 30,
        email: 'tuongnxph17348@fpt.edu.vn',
        phoneNumber: "0359282859",
        avatar: "https://picsum.photos/100/100"
    },
    {
      id: 15,
      name: 'tuongnxph17',
      age: 30,
      email: 'tuongnxph17@fpt.edu.vn',
      phoneNumber: "0359282859",
      avatar: "https://picsum.photos/100/100"
    },
    {
      id: 10,
      name: 'tuongnxph17',
      age: 30,
      email: 'tuongnxph17@fpt.edu.vn',
      phoneNumber: "0359282859",
      avatar: "https://picsum.photos/100/100"
    },
    {
        id: 20,
        name: 'tuongnxph17348',
        age: 30,
        email: 'tuongnxph17348@fpt.edu.vn',
        phoneNumber: "0359282859",
        avatar: "https://picsum.photos/100/100"
    }
  ];
  onSubmit(userForm: NgForm) {
    // 1. tim ra id lon nhat
    const userIds= this.users.map(user => user.id).sort((a,b) => a - b)
    const newId = userIds[userIds.length - 1]
    if (this.inputValue.id == 0) {
      this.users.push({
      ...userForm.value, // laays ra object gia tri cua form
      id: newId + 1
    });
    } else {
      const inx = this.users.findIndex(user => user.id === this.inputValue.id)
      if(inx > -1) {
        this.users[inx] = {
          ...userForm.value,
          id: this.inputValue.id
        }
      }
    }
    
    userForm.resetForm({
      name : '',
      age: 0,
      email: '',
      phoneNumber : '',
      avatar: ''
    })
  }
  onRemove(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
  onEdit(userId: number) {
    const editUser = this.users.find(user => user.id === userId);
    if(editUser) {
      this.inputValue = {...editUser};
    }
  }
}
