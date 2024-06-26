import styled from "styled-components";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
import CreatePotal from "./modal/Portalcreater";
import UploadModal from "./modal/UploadModal";
import StyledBtn from "./ui/StyledBtn";

export default function Header() {
  const [modalOn, setModalOn] = useState(false);
  const closeModal = () => setModalOn(false);

  return (
    <StyledHeader>
      <h1>veelog</h1>
      <div className="header_menu">
        <FaBell />
        <IoMdSearch />
        <StyledBtn
          buttonText="새 글 작성"
          onClickHander={() => setModalOn(true)}
          color="default"
        />
        <FaUserCircle />
      </div>
      {modalOn && (
        <CreatePotal>
          <UploadModal closeModal={closeModal} />
        </CreatePotal>
      )}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    padding-block: 1rem;
  }

  .header_menu {
    display: flex;
    gap: 1.4rem;
    svg {
      font-size: 1.5rem;
    }
    button {
      padding: 0.5rem 1rem;
      background-color: white;
      border: 1px solid #ccc;
      border-radius: 100px;
      cursor: pointer;
    }
  }
`;
