import { GetPost } from "./GetPost";

export interface PostApiResponse {
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
    last: boolean;
    posts: GetPost[];
  }