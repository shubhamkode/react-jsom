import { FC, Suspense } from "react";

import { Comment } from "@/lib/models";
import { BASE_URL } from "@/lib/helpers";
import CommentTile from "../molecules/CommentTile";

interface ICommentSectionProps {
  postId: number;
}

// function wait<T>(ms: number, value: T) {
//   return new Promise<T>((resolve) => setTimeout(resolve, ms, value));
// }

const getCommentsOfPosts = async (postId: number): Promise<Comment[]> => {
  const jsonResponse = await fetch(`${BASE_URL}/posts/${postId}/comments`).then(
    async (res) => res.json()
  );
  return jsonResponse.comments;
  // return wait<Comment[]>(5000, jsonResponse.comments);
};


const CommentSection: FC<ICommentSectionProps> = async ({ postId }) => {
  const comments = await getCommentsOfPosts(postId);

  return (
    <>
      <h3 className="text-[calc(0.39vw+20px)] font-[600] tracking-wide leading-loose px-2 opacity-80 mb-4">
        Top Comments &#40;{comments.length}&#41;:-
      </h3>
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <CommentTile comment={comment} key={index} />
          ))}
        </div>
    </>
  );
};

export default CommentSection;
