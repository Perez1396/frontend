import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/api'; // Reemplaza esto con la URL de tu backend API

  async login(username: string, password: string) {
    try {
      const response = await axios.post(`${this.apiUrl}/auth/login`, {
        username,
        password
      });
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async signup(username: string, password: string, roles: string) {
    try {
      const response = await axios.post(`${this.apiUrl}/auth/signup`, {
        username,
        password,
        roles
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

