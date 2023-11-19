import { HomePageTemplate } from "@/ui/templates";
import { Post } from "@/lib/models";
import { PaginationBar } from "@/components";
import { BASE_URL } from "@/lib/helpers";

const getPosts = async ({
  skip,
  limit,
}: {
  skip?: number;
  limit?: number;
} = {}): Promise<{ posts: Post[]; max: number }> => {
  const jsonResponse = await fetch(
    `${BASE_URL}/posts?skip=${skip ?? 0}&limit=${limit ?? 10}`
  ).then(async (res) => await res.json());
  return { posts: jsonResponse.posts, max: jsonResponse.total / (limit ?? 10) };
};

const getCurrentPage = (page: string | null) => +(page ?? 1);

const HomePage = async ({
  searchParams,
}: {
  searchParams: { page: string | null };
}) => {
  const currentPage = getCurrentPage(searchParams.page);

  const { posts, max } = await getPosts({
    skip: (currentPage - 1) * 10,
    limit: 10,
  });

  return (
    <>
      <HomePageTemplate posts={posts} />
      <PaginationBar current={currentPage} max={max} />
    </>
  );
};
export default HomePage;
