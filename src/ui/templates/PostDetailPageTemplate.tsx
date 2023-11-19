import Balancer from "react-wrap-balancer";
import { FC, Suspense } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

import { Post } from "@/lib/models";
import { CommentSection, AuthorSection } from "../sections";

interface IPostDetailPageTemplateProps {
  post: Post;
}

const PostDetailPageTemplate: FC<IPostDetailPageTemplateProps> = ({ post }) => {
  return (
    <div className="px-4 md:px-8 md:container mt-5 py-5 pb-10">
      <Balancer
        as="h2"
        className="text-[calc(0.39vw+28px)] font-[600] capitalizeFirst tracking-wider leading-snug px-2"
      >
        {post.title}
      </Balancer>
      <div className="mt-2">
        <Suspense fallback={<AuthorFallback />}>
          <AuthorSection authorId={post.userId} />
        </Suspense>
        <div className="space-x-2 p-2 flex justify-end items-center">
          {post.tags.map((tag, index) => (
            <Badge
              key={index}
              className="uppercase bg-pink-400/50 text-slate-100/50 duration-200 hover:text-slate-100 hover:bg-pink-400 cursor-pointer"
            >
              {" "}
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <Balancer
        as="p"
        className="mt-10 text-[calc(0.39vw+14px)] tracking-wider leading-7 capitalizeFirst px-2 opacity-90"
      >
        {post.body}
      </Balancer>

      <div className="mt-20">
        <Suspense fallback={<FallBackComment />}>
          <CommentSection postId={post.id} />
        </Suspense>
      </div>
    </div>
  );
};
export default PostDetailPageTemplate;

const FallBackComment = () => {
  return (
    <div className="">
      <Skeleton className="w-full max-w-lg h-10 mb-5" />
      <div className="space-y-1">
        <Skeleton className="w-full max-w-sm h-5" />
        <Skeleton className="w-full max-w-xs h-5" />
      </div>
    </div>
  );
};

const AuthorFallback = () => {
  return <Skeleton className="h-10 w-full max-w-xs" />;
};
