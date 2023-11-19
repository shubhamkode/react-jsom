import { Author } from "@/lib/models";
import { BASE_URL } from "@/lib/helpers";
import { AuthorDetailPageTemplate } from "@/ui/templates";

const getAuthorById = async (userId: number): Promise<Author> =>
  await fetch(`${BASE_URL}/users/${userId}`).then(
    async (res) => await res.json()
  );

const AuthorDetailsPage = async ({ params }: { params: { id: number } }) => {
  const author = getAuthorById(+params.id);

  return <AuthorDetailPageTemplate author={await author} />;
};

export default AuthorDetailsPage;
