import { useState } from "react";

function SocialCard(props: SocialCardProps) {
  const [likes, setLikes] = useState(0);

  return (
    <>
      <div>
        <img src={props.portrait} width={70}></img>
        <span>
          {props.firstName} {props.surname} <br /> at {props.time}
        </span>
      </div>

      <div>
        <img src={props.mainImage} width={500}></img>
      </div>

      <div>{props.body}</div>

      <button onClick={() => setLikes(likes + 1)}>Like</button>
      <div>{likes}</div>
    </>
  );
}

export default SocialCard;
