import { useState } from "react";

type AddCommentProps = {
  onAdd: (commentBody: string, commentName: string) => void;
};

function AddComment({ onAdd }: AddCommentProps) {
  const [commentName, setCommentName] = useState("");
  const [commentBody, setCommentBody] = useState("");

  function onAddCommentButtonClick() {
    setCommentName("");
    setCommentBody("");
    onAdd(commentName, commentBody);
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <input
        type="text"
        value={commentName}
        onChange={(e) => setCommentName(e.target.value)}
        placeholder="Your name"
        style={{
          width: "100%",
          padding: "10px",
          boxSizing: "border-box",
          marginBottom: "10px",
        }}
      />
      <textarea
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
        placeholder="Add a comment"
        style={{
          width: "100%",
          minHeight: "50px",
          padding: "10px",
          boxSizing: "border-box",
        }}
      ></textarea>
      <button
        onClick={() => onAddCommentButtonClick()}
        style={{ marginTop: "10px" }}
      >
        Add Comment
      </button>
    </div>
  );
}

export default AddComment;
