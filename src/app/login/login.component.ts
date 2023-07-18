import { Component } from '@angular/core';
import { ApiService } from '../api.service';

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

  constructor(private apiService: ApiService) {}

   onLogin() {
    try {
      console.log(this.loginData);
      const response = this.apiService.login(this.loginData.username, this.loginData.password);
      console.log('Respuesta de login:', response);
    } catch (error) {
      console.error('Error en el login:', error);
    }
  }
}
