import { FC, Suspense } from "react";
import Image from "next/image";

import { Author } from "@/lib/models";
import { AuthorPostsSection } from "@/ui/sections";
import { Skeleton } from "@/components/ui/skeleton";

interface IAuthorDetailPageTemplate {
  author: Author;
}

const AuthorDetailPageTemplate: FC<IAuthorDetailPageTemplate> = ({
  author,
}) => {
  return (
    <div className="grid lg:grid-cols-2 px-2 md:container pt-8 lg:gap-x-2 pb-20">
      <div className="lg:order-last">
        <div className="flex flex-col gap-8 py-8 items-center px-2">
          {author.image && (
            <Image
              src={author.image}
              className="rounded-full opacity-75 bg-contain bg-orange-50"
              alt="Image"
              height={300}
              width={300}
            />
          )}
          <div className="w-full  flex items-start flex-col justify-center dark:bg-slate-50/20 bg-black/10 rounded backdrop-sm py-4 px-2">
            <p className="text-2xl font-[600] tracking-wider px-2 py-1 text-pink-500">
              {author.firstName + " " + author.lastName}
              <span className="ml-2 text-lg">&#40;{author.username}&#41;</span>
            </p>
            <p className="mt-5 text-md opacity-75 px-2 tracking-wide cursor-pointer">
              {author.email}
            </p>
            <p className="mt-1 text-sm opacity-75 px-2 tracking-wide cursor-pointer">
              &#40; {author.phone} &#41;
            </p>
          </div>
        </div>
      </div>

      <Suspense fallback={<AuthorPostsFallback />}>
        <AuthorPostsSection authorId={author.id} />
      </Suspense>
    </div>
  );
};

export default AuthorDetailPageTemplate;

const AuthorPostsFallback = () => {
  return (
    <div className="p-4 ">
      <Skeleton className="w-full max-w-xs h-12" />
      <div className="mt-5 mb-5 space-y-3 px-2 py-2">
        <Skeleton className="w-full h-[100px]" />
        <Skeleton className="w-full h-[100px]" />
        <Skeleton className="w-full h-[100px]" />
      </div>
    </div>
  );
};
