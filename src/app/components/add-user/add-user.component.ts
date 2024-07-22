import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../app.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule, RouterModule, ToastrModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  
    constructor(private service: UserService, private router: Router, private toastr: ToastrService) { }
  
    ngOnInit(): void {
    }

    data: any

    form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('', Validators.required)
    });

    addUser() {
      this.data = this.form.value;
      this.service.addUser(this.data).subscribe(() => {
        // redirect to home page
        this.toastr.success('User added successfully');
        this.router.navigate(['/']);
      });
    }

    

    


}
