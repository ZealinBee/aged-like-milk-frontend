import { GetComment } from '../comments/GetComment';

export interface GetPost {
    id: string;
    title: string;
    content: string;
    categoryId: string;
    userId: string;
    comments: GetComment[];
}