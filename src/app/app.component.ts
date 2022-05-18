import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  name  = 'Xuan Tuong';
  class = 'Web16304';

  // Phần định nghĩa giá trị cho biến, logic, sử dụng ở html 
  // Kiểu dữ liệu
  teachers = [
    {
      id: 1,
      name: "xuantuong01",
      age: 20,
      gender: 0,
      avatar: "https://picsum.photos/400/300",
      status: 0
    },
    {
      id: 2,
      name: "xuantuong02",
      age: 25,
      gender: 1,
      avatar: "https://picsum.photos/400/300",
      status: 0
    },
    {
      id: 3,
      name: "xuantuong03",
      age: 30,
      gender: 1,
      avatar: "https://picsum.photos/400/300",
      status: 1
    },
    {
      id: 4,
      name: "xuantuong04",
      age: 32,
      gender: 0,
      avatar: "https://picsum.photos/400/300",
      status: 1
    },
  ]
  // Định nghĩa hàm khi click vào thẻ h1 bên html
  schoolName = "";
  clickH1 = () => {
    this.schoolName = "Poly"
  }

  // Định nghĩa hàm khi click nút ẩn hiện bảng
  showStatus = true
  changeStatus() {
    this.showStatus = !this.showStatus
  }
  inputValue = "xuantuong12"
  changeInput(event: any) {
    this.inputValue = event.target.value
  }
  // Dinh nghia ham nhan gia tri tu cac input
  StudentValue = {
    name : '',
    age : '',
    avatar : ''
  }
  // onInputName(event: any, info: string) {
  //   this.StudentValue.name = event.target.value;
  // }
  // onInputAge(event: any, info: string) {
  //   this.StudentValue.age = event.target.value;
  // }
  onInput(event: any, key: 'name' | 'age' | 'avatar') {
    this.StudentValue[key] = event.target.value;
  }
  onSubmit() {
    this.teachers.push({
      ...this.StudentValue, 
      age: +this.StudentValue.age,
      gender: 0,
      avatar: '',
      status: 0,
      id: this.teachers.length + 1
    });
    this.StudentValue = {
      name: '',
      age: '',
      avatar : ''
    }
  }
}
