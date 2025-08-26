import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.html',
  styleUrls: ['./auth.css'],
  imports: [NgIf] 
})
export class AuthComponent {
  isLogin: boolean = true; 

  toggleForm() {
    this.isLogin = !this.isLogin;
  }
}