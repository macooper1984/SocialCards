type PostTextProps = {
  body: string;
};

function PostText({ body }: PostTextProps) {
  const paragraphs = body.split("\n");
  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default PostText;
