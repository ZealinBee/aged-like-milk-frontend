import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { GetPost } from '../../interfaces/posts/GetPost';
import { PostService } from 'src/app/services/post.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-front-page-posts',
  templateUrl: './front-page-posts.component.html',
  styleUrls: ['./front-page-posts.component.scss']
})
export class FrontPagePostsComponent implements OnInit {
  constructor(private postService: PostService, public notificationsService: NotificationsService) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts.posts);
  }

  onSelect(post: GetPost) {
    this.notificationsService.add(`Selected post id=${post.id}`);
  }
  posts : GetPost[] = [];


}
