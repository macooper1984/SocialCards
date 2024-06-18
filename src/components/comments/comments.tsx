import { useEffect, useState } from "react";
import CommentType from "./commentType";
import Comment from "./comment";
import AddComment from "./addComment";

function Comments({ postId }: { postId: string }) {
  const [commentList, setCommentList] = useState<CommentType[]>(() => {
    const savedComments = localStorage.getItem(`comments_${postId}`);
    return savedComments ? JSON.parse(savedComments) : [];
  });

  useEffect(() => {
    localStorage.setItem(`comments_${postId}`, JSON.stringify(commentList));
  }, [commentList, postId]);

  const handleAddComment = (commentBody: string, commentName: string) => {
    if (commentBody.trim() === "" || commentName.trim() === "") return;

    const newComment: CommentType = {
      id: Date.now(),
      name: commentName,
      time: new Date().toLocaleString(),
      body: commentBody,
    };
    setCommentList((prevComments) => [...prevComments, newComment]);
  };

  const handleRemoveComment = (id: number) => {
    setCommentList((prevComments) =>
      prevComments.filter((comment) => comment.id !== id)
    );
  };

  return (
    <>
      <div style={{ marginTop: "20px" }}>
        {commentList.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onRemove={handleRemoveComment}
          ></Comment>
        ))}
      </div>

      <AddComment onAdd={handleAddComment}></AddComment>
    </>
  );
}

export default Comments;
