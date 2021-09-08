import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MessengerComponent } from './messenger/messenger.component';

const routes: Routes = [
  {
    path: '',
    component: MessengerComponent,
    data: { title: 'Dashboard' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Dashboard' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
