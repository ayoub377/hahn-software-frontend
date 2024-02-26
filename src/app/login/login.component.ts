import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = '';
  password: string = '';

  login() {
    // Perform login logic here
    console.log('Login clicked');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
