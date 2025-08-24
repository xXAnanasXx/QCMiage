import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  standalone: true,
  template: `
    <div class="auth-container">
      <h1>Authentication</h1>
      <p>Welcome to the authentication page.</p>
    </div>
  `,
  styles: [`
    .auth-container {
      text-align: center;
      margin-top: 50px;
    }
  `]
})
export class AuthComponent {}
