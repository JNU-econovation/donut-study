import styled from "styled-components";
import { useImageUrlQuery } from "../hooks/querys/useContentQuery";
import defaultImage from "../assets/default.png";

export default function ContentFeed({ contentItem }) {
  const { title, content, id } = contentItem;
  const { data, error } = useImageUrlQuery(id);

  const publicUrl = data ? `${data?.publicUrl}.png` : defaultImage;

  return (
    <StyledContentFeed>
      {error && <p>Error: {error.message}</p>}
      <div
        className="content-image"
        style={{
          backgroundImage: `url(${publicUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="content-detail">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </StyledContentFeed>
  );
}

const StyledContentFeed = styled.li`
  height: 20rem;
  border: 1px solid #ccc;
  .content-image {
    width: 100%;
    height: 200px;
    border-bottom: 1px solid #ccc;
  }
  .content-detail {
    border: 1px solid #ccc;
    padding: 1rem;
  }
  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
`;
