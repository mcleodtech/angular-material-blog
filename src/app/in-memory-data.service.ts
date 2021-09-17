import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { BlogPost } from './blog-post';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts = [
      { id: 1,
        title: "Independence Day",
        body: "This is a post about creating a fun school assembly! It was a super exciting day!",
        image: "../../assets/thirdFourthIndependenceDay.jpg",
        alt: "Image of school assembly",
        slug: "indepenence-day",
        likeCount: 2,
      },

      { id: 2,
        title: "Rainy Day",
        body: "Here's a post about a rainy day.",
        image: "../../assets/rain-background.jpg",
        alt: "Image of rain",
        slug: "rainy-day",
        likeCount: 5,
      },

      { id: 3,
        title: "Computer Class",
        body: "Today I had a computer class with my kids. I had them take apart a computer and put it back together.",
        image: "../../assets/fixing-computer.jpg",
        alt: "Image of kids fixing a computer",
        slug: "computer-class",
        likeCount: 3,
      }
    ];
    return {posts};

  }

  genId(posts: BlogPost[]): number {
    return posts.length > 0 ? Math.max(...posts.map(posts => posts.id)) + 1 : 11;
  }


  constructor() { }
}
