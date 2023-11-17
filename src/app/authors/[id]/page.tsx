import AuthorsDetailsPageTemplate from "@/ui/templates/AuthorDetailsPageTemplate";
import { Author } from "@/lib/models/author.model";
import { Post } from "@/lib/models/post.model";

const getAuthorById = async (userId: number): Promise<Author> => {
  const author = await fetch(`https://dummyjson.com/users/${userId}`).then(
    async (res) => await res.json()
  );
  return author;
};

const getPostByAuthor = async (userId: number): Promise<Post[]> => {
  const posts = await fetch(`https://dummyjson.com/users/${userId}/posts`).then(
    async (res) => await res.json()
  );
  return posts.posts;
};

export default async function AuthorDetailsPage({
  params,
}: {
  params: { id: number };
}) {
  return (
    <AuthorsDetailsPageTemplate
      author={await getAuthorById(+params.id)}
      authorPosts={await getPostByAuthor(+params.id)}
    />
  );
}
