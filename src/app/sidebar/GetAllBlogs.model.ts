export interface GetAllBlogs {
    id: number;
    title: string;
    content: string;
    comments: Comment[];
  }
  
  export interface Comment {
    id: number;
    text: string;
  }