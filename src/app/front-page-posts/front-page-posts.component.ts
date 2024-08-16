import { Component } from '@angular/core';

import { GetPost } from '../interfaces/posts/GetPost';
import { mockPosts } from './mock';

@Component({
  selector: 'app-front-page-posts',
  templateUrl: './front-page-posts.component.html',
  styleUrls: ['./front-page-posts.component.scss']
})
export class FrontPagePostsComponent {
  selectedPost?: GetPost;
  onSelect(post: GetPost) {
    this.selectedPost = post;
  }
  posts : GetPost[] = mockPosts;

}
