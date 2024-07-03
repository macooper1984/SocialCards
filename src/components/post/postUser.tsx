type PostUserProps = {
  portrait: string;
  firstName: string;
  surname: string;
  time: string;
};

function PostUser({ portrait, firstName, surname, time }: PostUserProps) {
  return (
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
  );
}

export default PostUser;
