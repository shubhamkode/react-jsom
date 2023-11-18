import { BASE_URL } from "@/lib/helpers";
import { Author } from "@/lib/models";
import { FC } from "react";
import AuthorTile from "../molecules/AuthorTile";

interface IAuthorSectionProps {
  authorId: number;
}

// function wait<T>(ms: number, value: T) {
//   return new Promise<T>((resolve) => setTimeout(resolve, ms, value));
// }

const getAuthorOfPost = async (authorId: number): Promise<Author> => {
  const jsonResponse = await fetch(`${BASE_URL}/users/${authorId}`).then(
    async (res) => res.json()
  );
  return jsonResponse;
};

const AuthorSection: FC<IAuthorSectionProps> = async ({ authorId }) => {
  const author = await getAuthorOfPost(authorId);
  return <AuthorTile author={author} />;
};

export default AuthorSection;
