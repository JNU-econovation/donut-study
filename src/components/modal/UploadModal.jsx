import styled from "styled-components";
import useUpload from "../../hooks/useUpload";
import StyledBtn from "../ui/StyledBtn";

export default function UploadModal({ closeModal }) {
  const {
    title,
    setTitle,
    content,
    setContent,
    setFile,
    isLoading,
    mutate: uploadContent,
  } = useUpload({ closeModal });

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadContent();
  };

  return (
    <StyledUploadModal>
      <div id="background" />
      <section id="mainSection">
        <div id="mainSection_header">
          <h2>새 글 작성</h2>
          <StyledBtn
            color="primary"
            buttonText="닫기"
            onClickHander={() => closeModal()}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="제목"
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setFile(e.target.files);
            }}
          />
          <button type="submit" disabled={isLoading}>
            작성하기
          </button>
        </form>
      </section>
    </StyledUploadModal>
  );
}

const StyledUploadModal = styled.section`
  #background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  #mainSection {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50rem;
    padding: 2rem;
    background-color: white;
    border-radius: 1rem;

    #mainSection_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2 {
        font-size: 1.5rem;
        font-weight: bold;
        padding-block: 1rem;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      input,
      textarea {
        font-size: 1.2rem;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
      }

      textarea {
        height: 20rem;
        resize: none;
      }
      button {
        padding: 1rem;
        color: white;
        font-weight: 700;
        font-size: 1.2rem;
        background-color: #20c997;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        cursor: pointer;
      }
    }
  }
`;
