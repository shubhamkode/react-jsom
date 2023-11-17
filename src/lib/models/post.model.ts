export interface Post {
  id: number;
  body: string;
  title: string;
  userId: number;
  tags: string[];
  reactions: number;
}
