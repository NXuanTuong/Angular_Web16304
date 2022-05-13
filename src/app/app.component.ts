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
      id: "1",
      name: "xuantuong01",
      age: 20,
      gender: 0,
      avatar: "https://picsum.photos/400/300",
      status: 0
    },
    {
      id: "2",
      name: "xuantuong02",
      age: 25,
      gender: 1,
      avatar: "https://picsum.photos/400/300",
      status: 0
    },
    {
      id: "3",
      name: "xuantuong03",
      age: 30,
      gender: 1,
      avatar: "https://picsum.photos/400/300",
      status: 1
    },
    {
      id: "4",
      name: "xuantuong04",
      age: 32,
      gender: 0,
      avatar: "https://picsum.photos/400/300",
      status: 1
    },

  ]
}
