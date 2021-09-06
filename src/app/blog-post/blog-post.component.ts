import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogService } from '../blog.service';
import { MessageService } from '../message.service';
import { BLOGPOST } from '../mock-posts';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MessagesComponent } from '../messages/messages.component';


@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  blogpost: BlogPost[] = [];

  blogPost = this.blogpost.toString();

  constructor(private blogService: BlogService,
              private messageService: MessageService,
              private _snackBar: MatSnackBar,
              ) { }

  getPosts(): void {
    this.blogService.getPosts()
    .subscribe(post => this.blogpost = post)
  }

  onSelect(): void {

  }

  clickLike() {
    this.messageService.add(`You liked a post!` )
    this._snackBar.openFromComponent(MessagesComponent, {
      duration: 3000,
    });
  }


  ngOnInit(): void {
    this.getPosts();
  }

}
