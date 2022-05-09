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
  students = [
    {
      id: "1",
      name: "xuantuong01",
      status: 0
    },
    {
      id: "2",
      name: "xuantuong02",
      status: 1
    },

  ]
}
