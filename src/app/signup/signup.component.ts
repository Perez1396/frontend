import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupData = {
    username: '',
    password: '',
    roles: 'ADMIN'
  };

  constructor(private apiService: ApiService) {}

   onSignup() {
    try {
      console.log(this.signupData);
      const response = this.apiService.signup(this.signupData.username, this.signupData.password, this.signupData.roles);
      console.log('Respuesta del signup:', response);
    } catch (error) {
      console.error('Error en el signup:', error);
    }
  }
}
