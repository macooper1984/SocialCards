import { useState, useEffect } from "react";

// Define the prop types for better type checking
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
    // Initialize likes state with a function to read from localStorage
    const [likes, setLikes] = useState<number>(() => {
      const savedLikes = localStorage.getItem('likes');
      return savedLikes ? parseInt(savedLikes, 10) : 0;
    });
    
  const [commentList, setCommentList] = useState<Comment[]>(comments);
  const [commentBody, setCommentBody] = useState("");

  // Load likes count from localStorage on component mount
  useEffect(() => {
    const savedLikes = localStorage.getItem('likes');
    if (savedLikes) {
      setLikes(parseInt(savedLikes, 10));
    }
  }, []);

  // Save likes count to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('likes', likes.toString());
  }, [likes]);

  const handleAddComment = () => {
    const newComment: Comment = {
      id: commentList.length + 1,
      name: "User", // Ideally, this would be dynamic based on the logged-in user
      time: new Date().toLocaleString(),
      body: commentBody,
    };
    setCommentList([...commentList, newComment]);
    setCommentBody("");
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
        <img src={mainImage} alt="Main content" width={500} style={{ width: "100%", height: "auto" }} />
      </div>

      <div style={{ marginBottom: "10px" }}>{body}</div>

      <button onClick={() => setLikes(likes + 1)}>Like</button>
      <div>{likes} {likes === 1 ? 'Like' : 'Likes'}</div>

      <div style={{ marginTop: "20px" }}>
        <h3>Comments</h3>
        {commentList.map((comment) => (
          <div key={comment.id} style={{ borderTop: "1px solid #eee", paddingTop: "10px", marginTop: "10px" }}>
            <strong>{comment.name}</strong> at {comment.time}
            <p>{comment.body}</p>
          </div>
        ))}
        <div style={{ marginTop: "20px" }}>
          <textarea
            value={commentBody}
            onChange={(e) => setCommentBody(e.target.value)}
            placeholder="Add a comment"
            style={{ width: "100%", height: "50px", padding: "10px" }}
          ></textarea>
          <button onClick={handleAddComment} style={{ marginTop: "10px" }}>Add Comment</button>
        </div>
      </div>
    </div>
  );
}

export default SocialCard;
