import { FC } from "react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { Post } from "@/lib/models";
import { Badge } from "@/components/ui/badge";

interface IPostTileProps {
  post: Post;
}

const PostTile: FC<IPostTileProps> = ({ post }) => {
  return (
    <div className="py-3 px-4">
      <Balancer
        as={Link}
        href={`/posts/${post.id}`}
        className="text-[calc(0.39vw+22px)]  tracking-wide capitalizeFirst font-[500] leading-tight"
      >
        {post.title}
      </Balancer>

      <Link
        href={`/posts/${post.id}`}
        className="mt-3 text-base line-clamp-2 tracking-wider  leading-5  opacity-70 capitalizeFirst"
      >
        {post.body}
      </Link>
      <div className="px-2 flex items-center justify-end py-2 space-x-2 mt-4">
        {post.tags.map((tag, index) => (
          <Badge
            key={index}
            variant="default"
            className="bg-pink-500/60 text-slate-100/70 uppercase hover:bg-pink-500/80 duration-200 transition-all cursor-pointer hover:text-slate-100"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default PostTile;
