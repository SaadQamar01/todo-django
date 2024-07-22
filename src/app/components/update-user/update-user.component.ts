import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserService } from '../../app.service';
import { CommonModule } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule, RouterModule, ToastrModule],
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  userId: number = 0;
  constructor(private service: UserService, private route: ActivatedRoute, private router : Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getUser(id).subscribe(data => {
      this.form.patchValue(data);
      this.userId = data.id || 0;
    })
  }

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', Validators.required)
  })

  submit(){  
    this.service.updateUser(this.userId, this.form.value).subscribe(() => {
      this.toastr.success('User updated successfully');
    })
    this.router.navigate(['/']);
  }

}
