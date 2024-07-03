import PostImage from "./postImage";
import PostText from "./postText";
import PostUser from "./postUser";

type PostProps = {
  portrait: string;
  firstName: string;
  surname: string;
  time: string;
  mainImage: string;
  body: string;
};

function Post({
  portrait,
  firstName,
  surname,
  time,
  mainImage,
  body,
}: PostProps) {
  return (
    <>
      <PostUser
        portrait={portrait}
        firstName={firstName}
        surname={surname}
        time={time}
      ></PostUser>
      <PostText body={body}></PostText>
      <PostImage mainImage={mainImage}></PostImage>
    </>
  );
}

export default Post;
