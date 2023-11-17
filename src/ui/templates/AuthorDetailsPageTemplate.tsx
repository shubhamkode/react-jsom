"use client";
import { profileImageUrl } from "@/lib/helpers";
import Image from "next/image";
import { Author } from "@/lib/models/author.model";
import { Post } from "@/lib/models/post.model";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { profile } from "console";

export default function AuthorsDetailsPageTemplate({
  author,
  authorPosts,
}: {
  author?: Author;
  authorPosts?: Post[];
}) {
  return (
    <>
      <div className="grid lg:grid-cols-2 px-2 md:container pt-8 lg:gap-x-2 pb-20">
        <div className="lg:order-last">
          <div className="flex flex-col gap-8 py-8 items-center px-2">
            <Image
              src={author?.image || profileImageUrl(author?.firstName!)}
              className="rounded-full opacity-75 bg-contain bg-orange-50"
              alt="Image"
              height={300}
              width={300}
            />
            <div className="w-full  flex items-start flex-col justify-center dark:bg-slate-50/20 bg-black/10 rounded backdrop-sm py-4 px-2">
              <p className="text-2xl font-[600] tracking-wider px-2 py-1 text-pink-500">
                {author?.firstName + " " + author?.lastName}
                <span className="ml-2 text-lg">
                  &#40;{author?.username}&#41;
                </span>
              </p>
              <p className="mt-5 text-md opacity-75 px-2 tracking-wide cursor-pointer">
                {author?.email}
              </p>
              <p className="mt-1 text-sm opacity-75 px-2 tracking-wide cursor-pointer">
                &#40; {author?.phone} &#41;
              </p>
            </div>
          </div>
        </div>

        <AuthorPostsSection posts={authorPosts!} />
      </div>
    </>
  );
}

const AuthorPostsSection = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="px-1 lg:px-2 mt-3 lg:mt-0 py-5">
      <h3 className="text-3xl font-semibold mb-8 pl-2">Posts</h3>
      <div className="w-full divide-y-[4px] ring-[1px] ring-black/20 dark:ring-slate-50/20 py-1 px-1 mx-auto">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="py-6 px-2 rounded">
      <Balancer
        href={`/posts/${post.id}`}
        as={Link}
        className="text-[calc(0.39vw+22px)] leading-tight tracking-wide capitalizeFirst font-[500]"
      >
        {post.title}
      </Balancer>

      <Link href={`/posts/${post.id}`}>
        <p className="mt-3 text-base line-clamp-2 tracking-wider  leading-5  opacity-70 capitalizeFirst">
          {post.body}
        </p>
      </Link>
    </div>
  );
};
