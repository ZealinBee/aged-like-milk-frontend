import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { PostApiResponse } from '../interfaces/posts/PostApiResponse';
import { NotificationsService } from './notifications.service';
import { GetPost } from '../interfaces/posts/GetPost';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly apiUrl = 'http://localhost:8080/api/v1/posts'

  constructor(private http: HttpClient, private notificationService: NotificationsService) { }

  getPosts(): Observable<PostApiResponse> {
    const posts = this.http.get<PostApiResponse>(this.apiUrl);
    this.notificationService.add('PostService: fetched posts');
    return posts;
  }

  getOnePost(id : string | null) : Observable<GetPost> {
    const post = this.http.get<GetPost>(`${this.apiUrl}/${id}`);
    this.notificationService.add(`PostService: fetched post id=${id}`);
    return post;
  }


}
