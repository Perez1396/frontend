import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'http://localhost:8080/api/blog/posts';

  constructor(private http: HttpClient) {}

  getAllBlogs(): Observable<any> {
    console.log(this.http.get<any>(this.apiUrl));
    return this.http.get<any>(this.apiUrl);
  }

  getBlogById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createBlog(blog: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, blog);
  }

  updateBlog(id: number, blog: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, blog);
  }

  deleteBlog(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
