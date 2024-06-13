import { useState, useEffect } from "react";

type Comment = {
  id: number;
  name: string;
  time: string;
  body: string;
};

type SocialCardProps = {
  portrait: string;
  firstName: string;
  surname: string;
  time: string;
  mainImage: string;
  body: string;
  comments?: Comment[];
};

function SocialCard({
  portrait,
  firstName,
  surname,
  time,
  mainImage,
  body,
  comments = [],
}: SocialCardProps) {
  const [reactions, setReactions] = useState<{ [key: string]: number }>(() => {
    const savedReactions = localStorage.getItem('reactions');
    return savedReactions ? JSON.parse(savedReactions) : { like: 0, love: 0, laugh: 0, angry: 0 };
  });

  const [commentList, setCommentList] = useState<Comment[]>(() => {
    const savedComments = localStorage.getItem('comments');
    return savedComments ? JSON.parse(savedComments) : comments;
  });
  const [commentBody, setCommentBody] = useState("");

  useEffect(() => {
    localStorage.setItem('reactions', JSON.stringify(reactions));
  }, [reactions]);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(commentList));
  }, [commentList]);

  const handleReact = (reaction: string) => {
    setReactions((prevReactions) => ({ ...prevReactions, [reaction]: prevReactions[reaction] + 1 }));
  };

  const handleAddComment = () => {
    if (commentBody.trim() === "") return;

    const newComment: Comment = {
      id: Date.now(),
      name: "User",
      time: new Date().toLocaleString(),
      body: commentBody,
    };
    setCommentList((prevComments) => [...prevComments, newComment]);
    setCommentBody("");
  };

  const handleRemoveComment = (id: number) => {
    setCommentList((prevComments) => prevComments.filter((comment) => comment.id !== id));
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", maxWidth: "520px", margin: "auto" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <img src={portrait} alt={`${firstName} ${surname}`} width={70} style={{ marginRight: "10px" }} />
        <span>
          <strong>{firstName} {surname}</strong> <br /> at {time}
        </span>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <img src={mainImage} alt="Main content" style={{ width: "100%", height: "auto" }} />
      </div>

      <div style={{ marginBottom: "10px" }}>{body}</div>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
        <button onClick={() => handleReact("like")}>👍 {reactions.like}</button>
        <button onClick={() => handleReact("love")}>❤️ {reactions.love}</button>
        <button onClick={() => handleReact("laugh")}>😂 {reactions.laugh}</button>
        <button onClick={() => handleReact("angry")}>😡 {reactions.angry}</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Comments</h3>
        {commentList.map((comment) => (
          <div key={comment.id} style={{ borderTop: "1px solid #eee", paddingTop: "10px", marginTop: "10px" }}>
            <strong>{comment.name}</strong> at {comment.time}
            <p>{comment.body}</p>
            <button onClick={() => handleRemoveComment(comment.id)}>Remove</button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <textarea
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
          placeholder="Add a comment"
          style={{ width: "100%", minHeight: "50px", padding: "10px", boxSizing: "border-box" }}
        ></textarea>
        <button onClick={handleAddComment} style={{ marginTop: "10px" }}>Add Comment</button>
      </div>
    </div>
  );
}

export default SocialCard;
