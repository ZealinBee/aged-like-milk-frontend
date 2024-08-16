import { Component, Input } from '@angular/core';

import { GetPost } from '../interfaces/posts/GetPost';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})

export class PostPageComponent {
  @Input() post?: GetPost;
}
