import styled from "styled-components";
import {
  useContentByIdQuery,
  useImageUrlQuery,
} from "../../hooks/querys/useContentQuery";

export default function ContentModal({ id, closeModal }) {
  const { data, error, isLoading } = useContentByIdQuery(id);
  const { data: imageUrl } = useImageUrlQuery(id);

  if (isLoading || !data) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { title, content } = data;
  const thumbnail = imageUrl ? `${imageUrl.publicUrl}.png` : "default.png";

  const handleModalClose = (e) => {
    e.stopPropagation(); //bubbling 때문이라고..?
    closeModal();
  };

  return (
    <StyledContentModal>
      <button id="modal-background" onClick={handleModalClose} />
      <section id="modal-main">
        <img src={thumbnail} alt="content image" />
        <div>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </section>
    </StyledContentModal>
  );
}

const StyledContentModal = styled.div`
  #modal-background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #7f7f7f;
    opacity: 0.5;
    border: none;
    outline: none;
  }
  #modal-main {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 800px;
    max-height: 80vh;
    overflow-y: auto;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    img {
      width: 100%;
      object-fit: cover;
    }
    div {
      padding: 1rem;

      h2 {
        font-size: 2rem;
        font-weight: 600;
        margin: 1rem 0;
      }

      p {
        font-size: 1.2rem;
      }
    }
  }
`;
