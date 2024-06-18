import CommentType from "./commentType";

type CommentProps = {
  comment: CommentType;
  onRemove: (id: number) => void;
};

function Comment({ comment, onRemove }: CommentProps) {
  return (
    <div
      key={comment.id}
      style={{
        position: "relative",
        borderTop: "1px solid #eee",
        paddingTop: "10px",
        marginTop: "10px",
      }}
    >
      <span
        onClick={() => onRemove(comment.id)}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          color: "red",
          cursor: "pointer",
        }}
      >
        &#10005;
      </span>
      <strong>{comment.name}</strong> at {comment.time}
      <p>{comment.body}</p>
    </div>
  );
}

export default Comment;
