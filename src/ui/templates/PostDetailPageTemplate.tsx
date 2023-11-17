import { Post } from "@/lib/models/post.model";
import Link from "next/link";
import { Author } from "@/lib/models/author.model";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import { profileImageUrl } from "@/lib/helpers";
import { Comment } from "@/lib/models/comment.model";
import { Badge } from "@/components/ui/badge";

export default function PostDetailPageTemplate({
  post,
  author,
  comments,
}: {
  post: Post;
  author: Author;
  comments?: Comment[];
}) {
  return (
    <div className="px-4 md:px-8 md:container mt-5 py-5 pb-10">
      <Balancer
        as="h2"
        className="text-[calc(0.39vw+28px)] font-[600] capitalizeFirst tracking-wider leading-snug px-2"
      >
        {post.title}
      </Balancer>
      <div className="flex items-center justify-between">
        <div className="flex items-center  py-1 px-4 mt-2">
          <Image
            alt="profilePic"
            width="50"
            height="50"
            src={author.image ?? profileImageUrl(author.firstName)}
            className="w-7 h-auto aspect-square rounded-full bg-orange-50/80"
          />
          <Link
            href={`/authors/${author.id}`}
            className="font-[500] tracking-wide leading-loose px-1 ml-1 text-[calc(0.39vw+14px)] opacity-90 text-pink-500"
          >
            {author.firstName + " " + author.lastName}{" "}
            <span className="">&#40; {author.username} &#41;</span>
          </Link>
        </div>

        <div className="flex items-center p-2 space-x-2">
          {post.tags.map((tag, index) => (
            <Badge
              key={index}
              className="bg-pink-500/60 text-slate-100/70 uppercase hover:bg-pink-500/80 duration-200 transition-all cursor-pointer hover:text-slate-100"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <Balancer
        as="p"
        className="mt-8 text-[calc(0.39vw+14px)] tracking-wider leading-7 capitalizeFirst px-2 opacity-90"
      >
        {post.body}
      </Balancer>

      <div className="mt-20">
        <h3 className="text-[calc(0.39vw+20px)] font-[600] tracking-wide leading-loose px-2 opacity-80">
          Top Comments &#40; {comments?.length} &#41; :-
        </h3>
        <div className="">
          {comments?.map((comment, index) => (
            <CommentCard key={index} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
}

const CommentCard = ({ comment }: { comment: Comment }) => {
  return (
    <div className="px-2 py-1 flex flex-col mt-2">
      <p className="px-2 text-base font-[600] tracking-wide opacity-70 text-pink-400">
        {comment.user.username}
      </p>
      <Balancer
        as="p"
        className="px-4 capitalizeFirst text-sm tracking-wider opacity-90 leading-loose"
      >
        {comment.body}
      </Balancer>
    </div>
  );
};
