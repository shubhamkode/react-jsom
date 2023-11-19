import { FC } from "react";

import { BASE_URL } from "@/lib/helpers";
import { Post } from "@/lib/models";
import { PostTile } from "../molecules";

const getPostsByAuthor = async (userId: number): Promise<Post[]> =>
  await fetch(`${BASE_URL}/users/${userId}/posts`).then(
    async (res) => (await res.json()).posts
  );

interface IAuthorPostsSectionProps {
  authorId: number;
}

const AuthorPostsSection: FC<IAuthorPostsSectionProps> = async ({
  authorId,
}) => {
  const posts = await getPostsByAuthor(authorId);
  return (
    <div className="px-1 lg:px-2 mt-3 lg:mt-0 py-5">
      <h3 className="text-3xl font-semibold mb-8 pl-4">Posts</h3>
      <div className="w-full divide-y-[4px] ring-[1px] ring-black/20 dark:ring-slate-50/20 py-1 px-1 mx-auto">
        {posts.map((post, index) => (
          <PostTile key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default AuthorPostsSection;
