import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  constructor(private router: Router, private blogService: BlogService) {}

  blogs: any[] = [];

  onLogout() {
    this.router.navigate(['/login']);
  }
}