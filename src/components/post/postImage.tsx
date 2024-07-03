type PostImageProps = {
  mainImage: string;
};

function PostImage({ mainImage }: PostImageProps) {
  return (
    <div className="image-container" style={{ marginBottom: "10px" }}>
      <img src={mainImage} alt="Main content" />
    </div>
  );
}

export default PostImage;
