import styled from "styled-components";
import { useImageUrlQuery } from "../hooks/querys/useContentQuery";
import defaultImage from "../assets/default.png";
import Portalcreater from "./modal/Portalcreater";
import Contentmodal from "./modal/ContentModal";
import { useState } from "react";

export default function ContentFeed({ contentItem }) {
  const [modalOn, setModalOn] = useState(false);
  const { title, content, id } = contentItem;
  const { data, error } = useImageUrlQuery(id);

  const publicUrl = data ? `${data?.publicUrl}.png` : defaultImage;
  const closeModal = () => setModalOn(false);

  return (
    <StyledContentFeed onClick={() => setModalOn(true)}>
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

      {modalOn && (
        <Portalcreater>
          <Contentmodal id={id} closeModal={closeModal} modalOn={modalOn} />
        </Portalcreater>
      )}
    </StyledContentFeed>
  );
}

const StyledContentFeed = styled.li`
  height: 21rem;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  .content-image {
    width: 100%;
    height: 200px;
    border-bottom: 1px solid #ccc;
  }
  .content-detail {
    padding: 1.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 1.5em;
  }
  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
`;
