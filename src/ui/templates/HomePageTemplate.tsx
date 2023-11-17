import { Post, Author } from "@/lib/models";
import PaginationBar from "@/components/paginationBar";
import { PostTile } from "@/ui/molecules";

import { FC } from "react";

// const getAuthorById = async (id: number): Promise<Author | null> => {
//   const author = await fetch(`https://dummyjson.com/users/${id}`).then((res) =>
//     res.json()
//   );
//   return author;
// };

// export default async function HomePageTemplate({
//   posts,
//   range,
// }: {
//   posts: Post[];
//   range: number;
// }) {
// }

interface IHomePageTemplateProps {
  posts: Post[];
}

const HomePageTemplate: FC<IHomePageTemplateProps> = ({ posts }) => {
  return (
    <div className="md:container px-2 pt-8 pb-10 ">
      <div className="max-w-2xl divide-y-[2px] ring-[1px] ring-black/20 dark:ring-slate-50/20 py-4 mx-auto px-1 rounded-sm">
        {posts.map(async (post, index) => (
          <PostTile
            key={index}
            post={post}
            // author={await getAuthorById(post.userId)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePageTemplate;
