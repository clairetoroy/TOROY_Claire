import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: string;

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    // Assuming your AuthService has a getUsername method
    this.username = this.authService.getUsername();
  }
}
