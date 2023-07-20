import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    username: '',
    password: ''
  };

  constructor(private apiService: ApiService, private router: Router) {}

   async onLogin() {
    try {
      console.log(this.loginData);
      const response = await this.apiService.login(this.loginData.username, this.loginData.password);
      localStorage.setItem('token', response.data);
      this.router.navigate(['/dashboard']);
      console.log(localStorage.getItem('token'));
    } catch (error) {
      console.error('Error en el login:', error);
    }
  }
}
