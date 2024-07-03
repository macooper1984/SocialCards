import { useEffect, useState } from "react";

function Reactions({ postId }: { postId: string }) {
  const [reactions, setReactions] = useState<{ [key: string]: number }>(() => {
    const savedReactions = localStorage.getItem(`reactions_${postId}`);
    return savedReactions
      ? JSON.parse(savedReactions)
      : { like: 0, love: 0, laugh: 0, angry: 0 };
  });

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
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
      }}
    >
      <button onClick={() => handleReact("like")}>👍 {reactions.like}</button>
      <button onClick={() => handleReact("love")}>❤️ {reactions.love}</button>
      <button onClick={() => handleReact("laugh")}>😂 {reactions.laugh}</button>
      <button onClick={() => handleReact("angry")}>😡 {reactions.angry}</button>
    </div>
  );
}

export default Reactions;
