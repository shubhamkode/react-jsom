import { FC } from "react";
import Balancer from "react-wrap-balancer";

import { Comment } from "@/lib/models";

interface ICommentTileProps {
  comment: Comment;
}

const CommentTile: FC<ICommentTileProps> = async ({ comment }) => {
  return (
    <div className="px-2">
      <p className="px-2 font-[600] tracking-wide opacity-70 text-pink-400 w-min whitespace-nowrap text-sm">
        {comment.user.username}
      </p>
      <Balancer
        as="p"
        className="px-2 capitalizeFirst text-sm tracking-wider opacity-90 -mt-1"
      >
        {comment.body}
      </Balancer>
    </div>
  );
};

export default CommentTile;
