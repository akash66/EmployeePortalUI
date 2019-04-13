
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new User();
  submitted = false;

  constructor(private userService: UserService) { }

  ngOnInit() {

  }
  onSubmit() {
    this.submitted = true;
    this.userService.register(this.user).subscribe(res => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }


}
