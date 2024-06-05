import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router) {
    this.username = ''; // Or any other initial value you prefer
    this.password = '';
  }

  ngOnInit() {}

  login() {
    // Implement your login logic here (e.g., call an authentication service)
    console.log('Login clicked! Username:', this.username, 'Password:', this.password);
    // If successful, navigate to the desired page
    this.router.navigate(['/home']);
  }
}