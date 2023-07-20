import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  constructor(private router: Router, private blogService: BlogService) {}

  blogs: any[] = [];

  ngOnInit() {
    this.loadBlogs();
  }

  loadBlogs() {
    this.blogService.getAllBlogs()
      .subscribe({
        next: (blogs: any[]) => {
          this.blogs = blogs;
          console.log(this.blogs);
        },
        error: (error) => {
          console.error('Error al cargar los blogs:', error);
        }
      });
  }

  

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