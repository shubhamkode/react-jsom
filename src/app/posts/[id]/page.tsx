import { Post } from "@/lib/models/post.model";
import PostDetailPageTemplate from "@/ui/templates/PostDetailPageTemplate";
import { Author } from "@/lib/models/author.model";
import { Comment } from "@/lib/models/comment.model";
import PostsLoading from "./loading";

const getPostById = async (id: number): Promise<Post> => {
  const post = await fetch(`https://dummyjson.com/posts/${id}`).then((res) =>
    res.json()
  );
  return { ...post };
};
const getAuthor = async (authorId: number): Promise<Author> => {
  const author = await fetch(`https://dummyjson.com/users/${authorId}`).then(
    (res) => res.json()
  );
  return { ...author };
};
const getComments = async (postId: number): Promise<Comment[]> => {
  const comments = await fetch(
    `https://dummyjson.com/posts/${postId}/comments`
  ).then((res) => res.json());
  return comments.comments;
};

export default async function PostDetailsPage({
  params,
}: {
  params: { id: number };
}) {
  const post = await getPostById(+params.id);

  return (
    <PostDetailPageTemplate
      post={post}
      author={await getAuthor(post.userId)}
      comments={await getComments(+params.id)}
    />
  );
}
