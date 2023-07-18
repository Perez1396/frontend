import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) {}

  onLogout() {
    // Aquí colocas la lógica para cerrar sesión
    // Por ejemplo, puedes limpiar las credenciales almacenadas en el local storage o eliminar la sesión en el backend.
    // Luego, redirige al componente de login.
    // Ejemplo simplificado:
    // this.authService.logout();
    // this.router.navigate(['/login']);
    
    // Por ahora, solo navegamos al componente de login directamente sin cerrar sesión.
    this.router.navigate(['/login']);
  }
}