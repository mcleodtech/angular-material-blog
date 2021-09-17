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
    var likeCount = BLOGPOST[0].likeCount;
    this.messageService.add("You liked this post")
    this._snackBar.openFromComponent(MessagesComponent, {
      duration: 3000,
    });
    likeCount++;
    return likeCount;
  }


  ngOnInit(): void {
    this.getPosts();
  }

}
