import { getSafePropertyAccessString } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post';
import { BLOGPOST } from './mock-posts';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private messageService: MessageService,
              private http: HttpClient) { }

  private postsUrl = 'api/posts';

  getPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.postsUrl)
  }

  likeCount(): any {
    return "hello";
  }

}


