import { Post } from "@/lib/models/post.model";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Author } from "@/lib/models/author.model";
import { profileImageUrl } from "@/lib/helpers";
import Image from "next/image";
import PaginationBar from "@/components/paginationBar";
import { Badge } from "@/components/ui/badge";

const getAuthorById = async (id: number): Promise<Author | null> => {
  const author = await fetch(`https://dummyjson.com/users/${id}`).then((res) =>
    res.json()
  );
  return author;
};

export default async function HomePageTemplate({
  posts,
  range,
}: {
  posts: Post[];
  range: number;
}) {
  return (
    <div className="md:container px-2 pt-8 pb-10 ">
      <div className="max-w-2xl divide-y-[2px] ring-[1px] ring-black/20 dark:ring-slate-50/20 py-4 mx-auto px-1 rounded-sm">
        {posts.map(async (post, index) => (
          <PostCard
            key={index}
            post={post}
            author={await getAuthorById(post.userId)}
          />
        ))}
      </div>
      <PaginationBar range={range} />
    </div>
  );
}

const PostCard = ({ post, author }: { post: Post; author?: Author | null }) => {
  return (
    <div className="py-3 px-4">
      <div className="flex items-center  py-1 px-1 mb-1">
        <Image
          alt="profilePic"
          width="50"
          height="50"
          src={author?.image ?? profileImageUrl(author?.firstName!)}
          className="w-7 h-auto aspect-square rounded-full bg-orange-50/80"
        />
        <Link
          href={`/authors/${author?.id}`}
          className="font-[500] tracking-wider leading-loose px-1 ml-1 text-[calc(0.39vw+14px)] text-pink-500/80 visited:text-pink-500/60"
        >
          {author?.firstName! + " " + author?.lastName!}
        </Link>
      </div>
      <Balancer
        href={`/posts/${post.id}`}
        as={Link}
        className="text-[calc(0.39vw+22px)] leading-tight tracking-wide capitalizeFirst font-[500]"
      >
        {post.title}
      </Balancer>

      <Link href={`/posts/${post.id}`}>
        <p className="mt-3 text-base line-clamp-2 tracking-wider  leading-5  opacity-70 capitalizeFirst ">
          {post.body}
        </p>
      </Link>
      <div className="px-2 flex items-center justify-end py-2 space-x-2">
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
