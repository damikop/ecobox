import { Component } from '@angular/core';
import { Request } from './request';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  request: Request = { description: '', work_type: '' };
  selectedWorkType: string = '';
  showDropdownList: boolean = false;
  workTypeList: string[] = ['take out the garbage', 'clean the kitchen', 'vacuum the carpet'];

  submitRequest() {
    console.log(this.request);
  }

  showDropdown() {
    this.showDropdownList = true;
  }

  selectWorkType(item: string) {
    this.selectedWorkType = item;
    this.request.work_type = item;
    this.showDropdownList = false;
  }
}
