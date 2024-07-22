import { Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

export const routes: Routes = [
    { path: '', component: ViewUserComponent },
    { path: 'add', component: AddUserComponent },
    { path: 'update/:id', component: UpdateUserComponent}
];
