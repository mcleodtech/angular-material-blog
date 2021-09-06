import { getSafePropertyAccessString } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post';
import { BLOGPOST } from './mock-posts';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private messageService: MessageService) { }

  getPosts(): Observable<BlogPost[]> {
    const posts = of(BLOGPOST);
    return posts;
  }

  likeCount(): any {
    return "hello";
  }

}


