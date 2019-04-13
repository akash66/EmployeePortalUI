import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './../shared/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public $userList: Observable<any[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.$userList = this.userService.getList();
  }

}
