import { FC } from "react";

import { BASE_URL } from "@/lib/helpers";
import { Author } from "@/lib/models";
import { AuthorTile } from "../molecules";

interface IAuthorSectionProps {
  authorId: number;
}


const getAuthorOfPost = async (authorId: number): Promise<Author> => {
  const jsonResponse = await fetch(`${BASE_URL}/users/${authorId}`).then(
    async (res) => res.json()
  );
  return jsonResponse;
};

const AuthorSection: FC<IAuthorSectionProps> = async ({ authorId }) => {
  const author = getAuthorOfPost(authorId);
  return <AuthorTile author={await author} />;
};

export default AuthorSection;
