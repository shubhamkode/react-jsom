import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { Author } from "@/lib/models";

interface IAuthorTileProps {
  author: Author;
}
const AuthorTile: FC<IAuthorTileProps> = ({ author }) => {
  return (
    <div className="flex items-center mt-2 px-2 py-1">
      {author.image && (
        <Image
          alt={`${author.firstName.at(0)}`}
          width="50"
          height="50"
          src={author.image}
          className="w-7 h-auto aspect-square rounded-full bg-orange-50/80 text-center"
        />
      )}
      <Link
        href={`/authors/${author.id}`}
        className="font-[500] tracking-wide leading-loose px-2 ml-1 text-[calc(0.39vw+14px)] opacity-90 text-pink-500"
      >
        {author.firstName + " " + author.lastName}{" "}
        <span className="">&#40; {author.username} &#41;</span>
      </Link>
    </div>
  );
};
export default AuthorTile;
