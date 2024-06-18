import { useState, useEffect } from "react";
import Comments from "../comments/comments";

type SocialCardProps = {
  postId: string;
  portrait: string;
  firstName: string;
  surname: string;
  time: string;
  mainImage: string;
  body: string;
};

function SocialCard({
  postId,
  portrait,
  firstName,
  surname,
  time,
  mainImage,
  body,
}: SocialCardProps) {
  const [reactions, setReactions] = useState<{ [key: string]: number }>(() => {
    const savedReactions = localStorage.getItem(`reactions_${postId}`);
    return savedReactions
      ? JSON.parse(savedReactions)
      : { like: 0, love: 0, laugh: 0, angry: 0 };
  });

  const paragraphs = body.split("\n");

  useEffect(() => {
    localStorage.setItem(`reactions_${postId}`, JSON.stringify(reactions));
  }, [reactions, postId]);

  const handleReact = (reaction: string) => {
    setReactions((prevReactions) => ({
      ...prevReactions,
      [reaction]: prevReactions[reaction] + 1,
    }));
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        maxWidth: "520px",
        margin: "auto",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <img
          src={portrait}
          alt={`${firstName} ${surname}`}
          width={70}
          style={{ marginRight: "10px" }}
        />
        <span style={{ textAlign: "left" }}>
          <strong>
            {firstName} {surname}
          </strong>{" "}
          <br /> at {time}
        </span>
      </div>

      <div>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="image-container" style={{ marginBottom: "10px" }}>
        <img src={mainImage} alt="Main content" />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <button onClick={() => handleReact("like")}>👍 {reactions.like}</button>
        <button onClick={() => handleReact("love")}>❤️ {reactions.love}</button>
        <button onClick={() => handleReact("laugh")}>
          😂 {reactions.laugh}
        </button>
        <button onClick={() => handleReact("angry")}>
          😡 {reactions.angry}
        </button>
      </div>

      <Comments postId={postId}></Comments>
    </div>
  );
}

export default SocialCard;
