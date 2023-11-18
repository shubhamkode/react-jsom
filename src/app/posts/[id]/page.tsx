import { BASE_URL } from "@/lib/helpers";
import { Post } from "@/lib/models";
import { PostDetailPageTemplate } from "@/ui/templates";

const getPostById = async (id: number): Promise<Post> => {
  const post = await fetch(`${BASE_URL}/posts/${id}`).then((res) => res.json());
  return { ...post };
};

export default async function PostDetailsPage({
  params,
}: {
  params: { id: number };
}) {
  const post = getPostById(+params.id);
  return <PostDetailPageTemplate post={await post} />;
}
