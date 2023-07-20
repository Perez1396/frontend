import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  blogs: any[] = [];
  createBlog = {
    title: '',
    content: ''
  };
  selectedItem: string = 'Crear blog';
  sidebarItems: string[] = ['Crear blog', 'Actualizar blog', 'Eliminar blog', 'Ver blog'];
  @ViewChild('createForm', { static: false }) createForm!: NgForm;

  constructor(private router: Router, private blogService: BlogService) {}

  ngOnInit() {
    this.loadBlogs();
  }

  // Función para cambiar el ítem seleccionado
  changeSelectedItem(item: string) {
    this.selectedItem = item;
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

  onCreateForm() {
    if (this.createForm.valid) {
      console.log(this.createBlog);
      this.blogService.createBlog(this.createBlog)
      .subscribe({
        next: (blogs: any[]) => {
          this.blogs = blogs;
          console.log(this.blogs);
        },
        error: (error) => {
          console.error('Error al cargar los blogs:', error);
        }
      });
      // Aquí puedes utilizar los valores para crear un nuevo blog
      // por ejemplo, enviar los datos al servidor, etc.
  
      // Después de procesar el formulario, podrías resetearlo
      this.createForm.reset();
    }
  }

  deleteBlog(blogId: number) {
    this.blogService.deleteBlog(blogId).subscribe(
      () => {
        console.log('Blog eliminado con éxito.');
        // Actualizar la lista de blogs después de eliminar
        this.loadBlogs();
      },
      error => {
        console.error('Error al eliminar el blog:', error);
      }
    );
  }
    
}
