import Comments from "../comments/comments";
import Post from "../post/post";
import Reactions from "../reactions/reactions";

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
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        maxWidth: "520px",
        margin: "auto",
      }}
    >
      <Post
        portrait={portrait}
        firstName={firstName}
        surname={surname}
        time={time}
        mainImage={mainImage}
        body={body}
      ></Post>
      <Reactions postId={postId}></Reactions>
      <Comments postId={postId}></Comments>
    </div>
  );
}

export default SocialCard;
