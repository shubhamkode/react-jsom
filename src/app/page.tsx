import HomePageTemplate from "@/ui/templates/HomePageTemplate";

export const getPosts = async ({
  skip,
  limit,
}: {
  skip?: number;
  limit?: number;
}) => {
  const response = await fetch(
    `https://dummyjson.com/posts?skip=${skip ?? 0}&limit=${limit ?? 10}`
  );

  const jsonResponse = await response.json();

  return {
    posts: jsonResponse.posts,
    range: jsonResponse.total / (limit ?? 10),
  };
};

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string | undefined };
}) {
  const { posts, range } = await getPosts({
    skip: (+(searchParams.page ?? 1) - 1) * 10,
  });

  return <HomePageTemplate posts={posts} range={range} />;
}
