import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formValues = {
    id: 0,
    name:'',
    age: 0,
    email: '',
    phoneNumber:'',
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
  onParentSubmit = (formData: any) => {
    const userId = this.users.map(user => user.id).sort((a,b) => a-b)
    const newId = userId[userId.length - 1]
    if(this.formValues.id == 0) {
      this.users.push({
        ...formData,
        id: newId + 1
      });
    } else {
      const idx = this.users.findIndex(user => user.id === this.formValues.id) 
      if (idx > -1) {
        this.users[idx] = {
          ...formData, 
          id: this.formValues.id
        }
      }
    }
  }
  onParentDelete(id: number) {
    this.users = this.users.filter(item => item.id !== id)
  }
  onParentUpdate(id: number) {
        const editUser = this.users.find(user => user.id === id);
        if(editUser) {
          this.formValues = {...editUser};
        }
  }
}
