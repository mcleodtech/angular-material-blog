import { BlogPost } from "./blog-post";

export const BLOGPOST: BlogPost[] = [
  { id: 1,
    title: "Independence Day",
    body: "This is a post about creating a fun school assembly! It was a super exciting day!",
    image: "../../images/thirdFourthIndependenceDay.jpg",
    alt: "Image of school assembly",
    slug: "indepenence-day",
    likeCount: 0,
  },

  { id: 2,
    title: "Rainy Day",
    body: "Here's a post about a rainy day.",
    image: "../../images/rain-background.jpg",
    alt: "Image of rain",
    slug: "rainy-day",
    likeCount: 0,
  },

  { id: 3,
    title: "Computer Class",
    body: "Today I had a computer class with my kids. I had them take apart a computer and put it back together.",
    image: "../../images/fixing-computer.jpg",
    alt: "Image of kids fixing a computer",
    slug: "computer-class",
    likeCount: 0,
  }
]
