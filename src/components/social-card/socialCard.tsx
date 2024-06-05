function SocialCard(props: SocialCardProps) {
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

      <button>Like</button>
    </>
  );
}

export default SocialCard;
