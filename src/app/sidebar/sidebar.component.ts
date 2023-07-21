import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { NgForm } from '@angular/forms';
import { UpdateBlog } from './blog.model';
import { GetAllBlogs } from './GetAllBlogs.model';

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
  getAllBlogs: GetAllBlogs[] | null = null;
  selectedBlog: UpdateBlog | null = null;
  selectedItem: string = 'Create blog';
  sidebarItems: string[] = ['Create blog', 'Update blog', 'Delete blog', 'Blog'];
  @ViewChild('createForm', { static: false }) createForm!: NgForm;

  constructor(private router: Router, private blogService: BlogService) {}

  ngOnInit() {
    this.loadBlogs();
  }

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
          console.error('Error:', error);
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
          console.error('Error:', error);
        }
      });
      this.createForm.reset();
    }
  }

  editBlog(blog: UpdateBlog) {
    this.selectedBlog = { ...blog };
  }

  updateBlog() {
    this.blogService.updateBlog(this.selectedBlog).subscribe(
      () => {
        this.loadBlogs();
        this.selectedBlog = null;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  deleteBlog(blogId: number) {
    this.blogService.deleteBlog(blogId).subscribe(
      () => {
        this.loadBlogs();
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
    
}
