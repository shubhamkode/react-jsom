import { FC } from "react";

import { Post } from "@/lib/models";
import { PostTile } from "@/ui/molecules";

interface IHomePageTemplateProps {
  posts: Post[];
}

const HomePageTemplate: FC<IHomePageTemplateProps> = async ({ posts }) => {
  return (
    <div className="md:container px-2 pt-8">
      <div className="max-w-2xl divide-y-[2px] ring-[1px] ring-black/20 dark:ring-slate-50/20 py-4 mx-auto px-1 rounded-sm">
        {posts.map((post, index) => (
          <PostTile key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomePageTemplate;
