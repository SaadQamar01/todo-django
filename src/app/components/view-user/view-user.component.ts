import { Component, OnInit } from '@angular/core';
import { UserService } from '../../app.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-user',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule, RouterModule, ToastrModule],
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {
  users: any | undefined;

  constructor(private userService: UserService, private toastr: ToastrService) { 
    this.getUsers()
  }

  ngOnInit(): void {
  }

  getUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(data => {
      this.toastr.error('User has been deleted');
      this.getUsers();
    });
  }

}
