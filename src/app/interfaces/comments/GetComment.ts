export interface GetComment {
    id: string;
    postId: string;
    content: string;
    userId: string;
    parentCommentId: string;
    createdDate: string;
    nestingLevel: number;
    likes: number;
    dislikes: number;
}