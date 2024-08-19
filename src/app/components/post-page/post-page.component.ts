import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

import { GetPost } from '../../interfaces/posts/GetPost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})

export class PostPageComponent implements OnInit {
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private postService: PostService
  ){}
  @Input() post?: GetPost;

  ngOnInit() {
    this.getOnePost();
  }

  getOnePost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.getOnePost(id)
      .subscribe(post => this.post = post);
  }


}
